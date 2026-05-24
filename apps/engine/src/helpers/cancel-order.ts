import type { Orders } from "db";
import {
  MARKET_WITH_IDS,
  ORDERBOOKS,
  USERS,
  type CancelOrderInput,
} from "../store/exchange-store";
import { PublishToEngine } from "../utils/publish-to-poller";

export default async function CancelOrder(data: CancelOrderInput) {
  const existingUser = USERS.find((x) => x.userId === data.userId);
  if (!existingUser) {
    throw new Error("user not found");
  }

  await PublishToEngine("ORDER_CANCELLED", { orderId: data.orderId });

  const orderInfoResponse = await fetch(
    `http://localhost:3000/orders/${data.orderId}`,
  );
  if (!orderInfoResponse.ok) {
    throw new Error("no order found with that id");
  }
  const orderInfo = orderInfoResponse.body as unknown as Orders;

  const market_slug = MARKET_WITH_IDS.get(orderInfo.marketId);
  if (!market_slug) {
    throw new Error("no such market found");
  }

  const existingBidOrAsk =
    orderInfo.type === "LONG"
      ? ORDERBOOKS[market_slug]?.bids
      : ORDERBOOKS[market_slug]?.asks;
  if (!existingBidOrAsk) {
    throw new Error("no bids or asks found for this market");
  }

  const priceBucket =
    existingBidOrAsk[parseFloat(parseFloat(orderInfo.price).toFixed(2))];
  if (!priceBucket) {
    throw new Error("no existing price bucket for this market");
  }

  const index = priceBucket.openOrders.findIndex(
    (x) => x.orderId === orderInfo.id,
  );
  if (index < 0) {
    throw new Error("no order found with such order id");
  }
  priceBucket.openOrders.splice(index, 1);
  priceBucket.availableQty -= parseFloat(orderInfo.qty);

  if (priceBucket.availableQty <= 0) {
    delete existingBidOrAsk[parseFloat(parseFloat(orderInfo.price).toFixed(2))];
  }

  existingUser.collateral.locked -= parseFloat(orderInfo.equity);
  existingUser.collateral.available += parseFloat(orderInfo.equity);
  await PublishToEngine("ORDER_CANCELLED", {
    orderId: orderInfo.id,
  });

  return {
    status: "ok",
    message: "order cancelled successfully",
  };
}
