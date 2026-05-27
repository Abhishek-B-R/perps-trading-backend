import { USERS, type CreateOrderInput } from "../store/exchange-store";
import { PublishToPoller } from "./publish-to-poller";

export async function PositionUpdation(
  data: CreateOrderInput,
  currentMarketPrice: number,
  orderId: string,
) {
  // update user position in his USERS array
  // if he already has some LONG and he is doing LONG again, merge them,
  // and if he is doing in reverse, then reduce his LONG if doing SHORT and vice versa
  //
  // add a order record in USERS array
  // create a fills element and push it to FILLS
  // return success status with some data to caller
  //
  // also write that infinite check for orderbook matching logic

  const userData = USERS.get(data.userId);
  if (!userData) {
    throw new Error("User not found while billing");
  }

  await PublishToPoller("ORDER_FILLED", { orderId });

  const existingPositionIndex = userData.positions.findIndex(
    (x) => x.market === data.market,
  );
  const existingPosition = userData.positions[existingPositionIndex];
  const leverage =
    ((data.price ?? currentMarketPrice) * data.qty) / data.equity;
  const leverageReciprocal = 1 / leverage;
  const liquidationPrice =
    data.positionType === "long"
      ? (data.price ?? currentMarketPrice) * (1 - leverageReciprocal)
      : (data.price ?? currentMarketPrice) * (1 + leverageReciprocal);

  if (!existingPosition) {
    userData.positions.push({
      market: data.market,
      type: data.positionType,
      qty: data.qty,
      margin: data.equity,
      liquidationPrice, //update later
      averagePrice: currentMarketPrice, // update later
      createdAt: Date.now(),
    });
  } else {
    if (existingPosition.type === data.positionType) {
      existingPosition.qty += data.qty;
    } else {
      existingPosition.qty -= data.qty;
      if (existingPosition.qty < 0) {
        existingPosition.type =
          existingPosition.type === "long" ? "short" : "long";
        existingPosition.qty *= -1;
      } else if (existingPosition.qty === 0) {
        userData.positions.splice(existingPositionIndex, 1);
      }
    }
  }

  const fills = [
    {
      maker: data.userId,
      taker: "", // update later
      market: data.market,
      qty: data.qty,
      price: currentMarketPrice,
      makerOrderId: orderId,
      takerOrderId: "", // update later
    },
  ];

  await PublishToPoller("CREATE_FILL", { fills });

  return {
    fills,
    order_status: "FILLED",
  };
}
