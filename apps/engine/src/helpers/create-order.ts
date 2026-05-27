import {
  MARKET_PRICES,
  ORDERBOOKS,
  type CreateOrderInput,
  type IncomingOrderType,
} from "../store/exchange-store";
import { PublishToPoller } from "../utils/publish-to-poller";
import { RemoveFromOrderbook } from "../utils/remove-from-orderbook";
import { getOrCreateOrderbook, getOrCreateUser } from "./get-or-create";
import { PlaceIntoOrderbook } from "../utils/place-into-orderbook";

export default async function CreateOrder(data: CreateOrderInput) {
  if (!MARKET_PRICES.has(data.market + "USDT")) {
    throw new Error("Invalid market data");
  }

  // get current balance of that market
  let currentMarketPrice = MARKET_PRICES.get(
    data.market.toUpperCase() + "USDT",
  );
  if (currentMarketPrice === undefined) {
    throw new Error("invalid market, plse check ur spelling again");
  }

  let userData = getOrCreateUser(data.userId);
  const orderId = crypto.randomUUID();
  const slippage = (currentMarketPrice * (data.slippage ?? 0)) / 100;
  const slippagePrice =
    data.positionType === "long"
      ? currentMarketPrice + slippage
      : currentMarketPrice - slippage;

  const incomingOrder: IncomingOrderType = {
    orderId,
    userId: data.userId,
    market: data.market,
    side: data.positionType === "long" ? "buy" : "sell",
    positionType: data.positionType,
    type: data.orderType,
    price: data.price ?? slippagePrice,
    qty: data.qty,
    equity: data.equity,
    remainingQuantity: data.qty,
    createdAt: Date.now(),
  };

  if (userData.collateral.available < incomingOrder.equity) {
    throw new Error("insufficient balance to do this transaction");
  }

  await PublishToPoller("ORDER_CREATED", {
    orderId,
    market: data.market,
    type: data.positionType,
    qty: data.qty,
    margin: data.equity, // update later
    orderType: data.orderType,
    price: data.price ?? 0,
    slippage: data.slippage ?? 0,
    status: "open",
    createdAt: Date.now(),
  });

  // lock user equity
  userData.collateral.available -= incomingOrder.equity;
  userData.collateral.locked += incomingOrder.equity;

  const book = getOrCreateOrderbook(incomingOrder.market);

  while (incomingOrder.remainingQuantity > 0) {
    const bestPrice =
      incomingOrder.positionType === "long"
        ? book.askPrices[0]
        : book.bidPrices[0];
    if (bestPrice === undefined) {
      if (incomingOrder.type === "market") {
        userData.collateral.locked -= incomingOrder.equity;
        userData.collateral.available += incomingOrder.equity;
        break;
      }

      PlaceIntoOrderbook({ incomingOrder, type: "bid" });
      break;
    }

    if (incomingOrder.positionType === "long") {
      if (
        bestPrice <= incomingOrder.price
      ) // add slippage logic for market orders
      {
        const totalQty = book.asks.get(bestPrice)?.availableQty;
        const ask = book.asks.get(bestPrice)?.openOrders;
        if (!totalQty || !ask || totalQty <= 0) {
          RemoveFromOrderbook({
            price: bestPrice,
            market: incomingOrder.market,
            type: "ask",
          });
          continue;
          // if no liquidity exists, then this might go infinite loop
        }

        const orders = [...ask];
        for (const order of orders) {
          if (incomingOrder.remainingQuantity === 0) break;
          const matchedQuantity = Math.min(
            order.remainingQty,
            incomingOrder.remainingQuantity,
          );

          await PublishToPoller("CREATE_FILL", {
            //complete it neatly
            maker: incomingOrder.userId,
            taker: order.userId,
            market: incomingOrder.market,
            qty: matchedQuantity,
            price: bestPrice,
            makerOrderId: incomingOrder.orderId,
            takerOrderId: order.orderId,
          });

          // update the filled quantity field in Orders table of db, might have to create a new field
          // for asker here and then for buyer after this loop ends

          const currentOpenOrders = ORDERBOOKS.get(
            incomingOrder.market,
          )!.asks.get(bestPrice)!.openOrders;

          const index = currentOpenOrders.findIndex(
            (x) => x.orderId === order.orderId,
          );
          if (index === -1) {
            throw new Error(
              "order not found in orderbook while reducing qty due to matchmaking",
            );
          }

          ORDERBOOKS.get(incomingOrder.market)!.asks.get(
            bestPrice,
          )!.availableQty -= matchedQuantity;
          incomingOrder.remainingQuantity -= matchedQuantity;

          if (incomingOrder.remainingQuantity === 0) {
            ORDERBOOKS.get(incomingOrder.market)!
              .asks.get(bestPrice)!
              .openOrders.splice(index, 1); // remove order from orderbook since qty is zero now
          } else {
            ORDERBOOKS.get(incomingOrder.market)!.asks.get(
              bestPrice,
            )!.openOrders[index]!.remainingQty -= matchedQuantity; // reduce order qty since its not fully filled
          }
        }

        // update order status as filled fully if it reached here
      } else if (incomingOrder.type === "market") {
        // cancel order as it didnt match
        PublishToPoller("ORDER_CANCELLED", {
          orderId: incomingOrder.orderId,
        });
      } else {
        PlaceIntoOrderbook({ incomingOrder, type: "bid" });
        break;
      }
    }
  }

  return {
    orderId,
    status: "open",
    filledQty: 0,
    averagePrice: 0,
  };
}
