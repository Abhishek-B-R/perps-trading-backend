import {
  MARKET_PRICES,
  ORDERBOOKS,
  type CreateOrderInput,
  type Fill,
  type IncomingOrderType,
  type OrderStatus,
} from "../store/exchange-store";
import { PublishToPoller } from "../utils/publish-to-poller";
import { RemoveFromOrderbook } from "../utils/remove-from-orderbook";
import { getOrCreateOrderbook, getOrCreateUser } from "./get-or-create";
import { PlaceIntoOrderbook } from "../utils/place-into-orderbook";
import { LockFunds, UnlockFunds } from "../utils/lock-unlock-funds";
import { applyFillPositions } from "./get-endpoints";

export default async function CreateOrder(data: CreateOrderInput) {
  if (!MARKET_PRICES.has(data.market.toUpperCase() + "USDT")) {
    throw new Error("Invalid market data");
  }
  const fills: Fill[] = [];
  let returnStatus: OrderStatus = "open";

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
    orderType: data.orderType,
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
    userId: data.userId,
    market: data.market,
    positionType: data.positionType,
    qty: data.qty,
    margin: data.equity,
    orderType: data.orderType,
    price: data.price ?? 0,
    slippage: data.slippage ?? 0,
    status: "open",
    createdAt: Date.now(),
  });

  // lock user equity
  LockFunds(userData, incomingOrder.equity);

  const book = getOrCreateOrderbook(incomingOrder.market);

  while (incomingOrder.remainingQuantity > 0) {
    const bestPrice =
      incomingOrder.positionType === "long"
        ? book.askPrices[0]
        : book.bidPrices[0];
    if (bestPrice === undefined) {
      if (incomingOrder.orderType === "market") {
        UnlockFunds(userData, incomingOrder.equity);
        break;
      }

      PlaceIntoOrderbook({
        incomingOrder,
        type: incomingOrder.side === "buy" ? "bid" : "ask",
      });
      break;
    }

    if (incomingOrder.positionType === "long") {
      if (bestPrice <= incomingOrder.price) {
        const totalQty = book.asks.get(bestPrice)?.availableQty;
        const ask = book.asks.get(bestPrice)?.openOrders;
        if (!ask || !totalQty || totalQty <= 0) {
          RemoveFromOrderbook({
            price: bestPrice,
            market: incomingOrder.market,
            type: "ask",
          });
          continue;
        }

        const orders = [...ask];
        for (const order of orders) {
          if (incomingOrder.remainingQuantity === 0) break;
          const matchedQuantity = Math.min(
            order.remainingQty,
            incomingOrder.remainingQuantity,
          );

          const fill = {
            maker: order.userId,
            taker: incomingOrder.userId,
            market: incomingOrder.market,
            qty: matchedQuantity,
            price: bestPrice,
            makerOrderId: order.orderId,
            takerOrderId: incomingOrder.orderId,
            createdAt: Date.now(),
          };

          await PublishToPoller("CREATE_FILL", fill);
          fills.push(fill);
          book.lastTradedPrice = bestPrice;

          const takerMargin =
            (incomingOrder.equity * matchedQuantity) / incomingOrder.qty;
          const makerMargin =
            (order.remainingQty > 0 ? order.qty : matchedQuantity) > 0
              ? takerMargin
              : takerMargin;
          applyFillPositions(
            fill,
            incomingOrder.positionType,
            takerMargin,
            "short",
            makerMargin,
          );

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
          order.remainingQty -= matchedQuantity;

          if (currentOpenOrders[index]!.remainingQty <= 0) {
            ORDERBOOKS.get(incomingOrder.market)!
              .asks.get(bestPrice)!
              .openOrders.splice(index, 1); // remove order from orderbook since qty is zero now
          }

          const level = ORDERBOOKS.get(incomingOrder.market)!.asks.get(
            bestPrice,
          );
          if (level && level.availableQty <= 0) {
            RemoveFromOrderbook({
              price: bestPrice,
              market: incomingOrder.market,
              type: "ask",
            });
          } // remove that price point's object entirely since its of no use if no orders in it
        }

        if (incomingOrder.remainingQuantity === 0) {
          returnStatus = "filled";
        } else {
          returnStatus = "partially_filled";
        }
        // update order status as filled fully if it reached here
      } else if (incomingOrder.orderType === "market") {
        // cancel order as it didnt match
        PublishToPoller("ORDER_CANCELLED", {
          orderId: incomingOrder.orderId,
        });

        // refund unused collateral
        const filledQty = incomingOrder.qty - incomingOrder.remainingQuantity;
        const usedMargin =
          (incomingOrder.equity * filledQty) / incomingOrder.qty;
        const refund = incomingOrder.equity - usedMargin;

        UnlockFunds(userData, refund);

        if (fills.length > 0) {
          returnStatus = "partially_filled";
        } else {
          returnStatus = "cancelled";
        }

        break;
      } else {
        PlaceIntoOrderbook({
          incomingOrder,
          type: incomingOrder.side === "buy" ? "bid" : "ask",
        });

        if (fills.length > 0) {
          returnStatus = "partially_filled";
        } else {
          returnStatus = "open";
        }

        break;
      }
    } else {
      if (bestPrice >= incomingOrder.price) {
        const totalQty = book.bids.get(bestPrice)?.availableQty;
        const bid = book.bids.get(bestPrice)?.openOrders;
        if (!bid || !totalQty || totalQty <= 0) {
          RemoveFromOrderbook({
            price: bestPrice,
            market: incomingOrder.market,
            type: "bid",
          });
          continue;
        }

        const orders = [...bid];
        for (const order of orders) {
          if (incomingOrder.remainingQuantity === 0) break;
          const matchedQuantity = Math.min(
            order.remainingQty,
            incomingOrder.remainingQuantity,
          );

          const fill = {
            maker: incomingOrder.userId,
            taker: order.userId,
            market: incomingOrder.market,
            qty: matchedQuantity,
            price: bestPrice,
            makerOrderId: incomingOrder.orderId,
            takerOrderId: order.orderId,
            createdAt: Date.now(),
          };

          await PublishToPoller("CREATE_FILL", fill);
          fills.push(fill);
          book.lastTradedPrice = bestPrice;

          const takerMargin =
            (incomingOrder.equity * matchedQuantity) / incomingOrder.qty;
          const makerMargin =
            (order.remainingQty > 0 ? order.qty : matchedQuantity) > 0
              ? takerMargin
              : takerMargin;
          applyFillPositions(
            fill,
            incomingOrder.positionType,
            takerMargin,
            "long",
            makerMargin,
          );

          const currentOpenOrders = ORDERBOOKS.get(
            incomingOrder.market,
          )!.bids.get(bestPrice)!.openOrders;

          const index = currentOpenOrders.findIndex(
            (x) => x.orderId === order.orderId,
          );
          if (index === -1) {
            throw new Error(
              "order not found in orderbook while reducing qty due to matchmaking",
            );
          }

          ORDERBOOKS.get(incomingOrder.market)!.bids.get(
            bestPrice,
          )!.availableQty -= matchedQuantity;
          incomingOrder.remainingQuantity -= matchedQuantity;
          order.remainingQty -= matchedQuantity;

          if (currentOpenOrders[index]!.remainingQty <= 0) {
            ORDERBOOKS.get(incomingOrder.market)!
              .bids.get(bestPrice)!
              .openOrders.splice(index, 1); // remove order from orderbook since qty is zero now
          }

          const level = ORDERBOOKS.get(incomingOrder.market)!.bids.get(
            bestPrice,
          );
          if (level && level.availableQty <= 0) {
            RemoveFromOrderbook({
              price: bestPrice,
              market: incomingOrder.market,
              type: "bid",
            });
          } // remove that price point's object entirely since its of no use if no orders in it
        }

        if (incomingOrder.remainingQuantity === 0) {
          returnStatus = "filled";
        } else {
          returnStatus = "partially_filled";
        }
        // update order status as filled fully if it reached here
      } else if (incomingOrder.orderType === "market") {
        // cancel order as it didnt match
        PublishToPoller("ORDER_CANCELLED", {
          orderId: incomingOrder.orderId,
        });

        // refund unused collateral
        const filledQty = incomingOrder.qty - incomingOrder.remainingQuantity;
        const usedMargin =
          (incomingOrder.equity * filledQty) / incomingOrder.qty;
        const refund = incomingOrder.equity - usedMargin;

        UnlockFunds(userData, refund);

        if (fills.length > 0) {
          returnStatus = "partially_filled";
        } else {
          returnStatus = "cancelled";
        }

        break;
      } else {
        PlaceIntoOrderbook({
          incomingOrder,
          type: incomingOrder.side === "buy" ? "bid" : "ask",
        });

        if (fills.length > 0) {
          returnStatus = "partially_filled";
        } else {
          returnStatus = "open";
        }

        break;
      }
    }
  }

  let totalPrice: number = 0;
  let totalQty: number = 0;
  fills.forEach((x) => {
    totalPrice += x.price * x.qty;
    totalQty += x.qty;
  });
  const averagePrice = totalPrice / totalQty;
  return {
    orderId,
    status: returnStatus,
    filledQty: incomingOrder.qty - incomingOrder.remainingQuantity,
    averagePrice: totalPrice > 0 ? averagePrice : 0,
    fills,
  };
}
