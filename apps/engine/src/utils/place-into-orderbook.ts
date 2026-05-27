import type { IncomingOrderType } from "../store/exchange-store";
import { getOrCreateOrderbook } from "../helpers/get-or-create";

export function PlaceIntoOrderbook({
  incomingOrder,
  type,
}: {
  incomingOrder: IncomingOrderType;
  type: "bid" | "ask";
}) {
  // put order in orderbook
  const book = getOrCreateOrderbook(incomingOrder.market);
  if (type === "bid") {
    if (!book.bids.has(incomingOrder.price)) {
      insertSorted({
        priceArray: book.bidPrices,
        price: incomingOrder.price,
        descending: true,
      });
    }

    const bidAvailableQty =
      book.bids.get(incomingOrder.price)?.availableQty ?? 0;

    const bidCurrentQty = book.bids.get(incomingOrder.price)?.openOrders ?? [];

    bidCurrentQty.push({
      userId: incomingOrder.userId,
      qty: incomingOrder.remainingQuantity,
      remainingQty: incomingOrder.remainingQuantity,
      orderId: incomingOrder.orderId,
      createdAt: Date.now(),
    });

    book.bids.set(incomingOrder.price, {
      availableQty: bidAvailableQty + incomingOrder.remainingQuantity,
      openOrders: bidCurrentQty,
    });
  } else {
    if (!book.asks.has(incomingOrder.price)) {
      insertSorted({
        priceArray: book.askPrices,
        price: incomingOrder.price,
        descending: false,
      });
    }

    const askAvailableQty =
      book.asks.get(incomingOrder.price)?.availableQty ?? 0;

    const askCurrentQty = book.asks.get(incomingOrder.price)?.openOrders ?? [];

    askCurrentQty.push({
      userId: incomingOrder.userId,
      qty: incomingOrder.remainingQuantity,
      remainingQty: incomingOrder.remainingQuantity,
      orderId: incomingOrder.orderId,
      createdAt: Date.now(),
    });

    book.asks.set(incomingOrder.price, {
      availableQty: askAvailableQty + incomingOrder.remainingQuantity,
      openOrders: askCurrentQty,
    });
  }
}

function insertSorted({
  priceArray,
  price,
  descending,
}: {
  priceArray: number[];
  price: number;
  descending: boolean;
}) {
  priceArray.push(price);

  priceArray.sort((a, b) => (descending ? b - a : a - b));
}
