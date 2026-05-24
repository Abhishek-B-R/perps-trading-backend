import {
  MARKET_PRICES,
  ORDERBOOKS,
  USERS,
  type CreateOrderInput,
  type Users,
} from "../store/exchange-store";
import { PositionUpdation } from "../utils/position-updation";
import { PublishToEngine } from "../utils/publish-to-poller";

export default async function CreateOrder(data: CreateOrderInput) {
  if (
    !MARKET_PRICES.has(data.market) &&
    !MARKET_PRICES.has(data.market + "USDT")
  ) {
    throw new Error("Invalid market data");
  }

  let userData = USERS.find((x) => x.userId === data.userId);
  if (!userData) {
    const newuser: Users = {
      // create user if doesnt exist
      userId: data.userId,
      collateral: { available: 0, locked: 0 },
      positions: [],
    };
    USERS.push(newuser);
    userData = newuser;
  }
  const orderId = crypto.randomUUID();

  if (userData.collateral.available < data.equity) {
    throw new Error("insufficient balance to do this transaction");
  }

  await PublishToEngine("ORDER_CREATED", {
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

  userData.collateral.available -= data.equity;
  userData.collateral.locked += data.equity;

  // get current balance of that market
  let currentMarketPrice =
    MARKET_PRICES.get(data.market.toUpperCase()) ??
    MARKET_PRICES.get(data.market.toUpperCase() + "USDT");
  if (currentMarketPrice === undefined) {
    throw new Error("invalid market, plse check ur spelling again");
  }

  if (
    data.orderType === "market" ||
    (data.positionType === "long" && currentMarketPrice <= data.price!) ||
    (data.positionType === "short" && currentMarketPrice >= data.price!)
  ) {
    // update user position in his USERS array
    // if he already has some LONG and he is doing LONG again, merge them, if he is doing in reverse, then reject
    //
    // add a order record in USERS array
    // create a fills element and push it to FILLS
    // return success status with some data to caller
    //
    // also write that infinite check for orderbook matching logic

    const updates = await PositionUpdation(data, currentMarketPrice, orderId);
    return {
      orderId,
      status: updates.order_status,
      filledQty: data.qty,
      averagePrice: data.price,
      fills: updates.fills,
    };
  } else {
    let currentBook = ORDERBOOKS[data.market];
    if (!currentBook) {
      ORDERBOOKS[data.market] = {
        bids: {},
        asks: {},
        lastTradedPrice: 0,
        indexPrice: 0,
      };
      currentBook = ORDERBOOKS[data.market];
    }

    if (!currentBook) {
      throw new Error("no such market in orderbook");
    }

    const roundedPrice =
      data.price?.toFixed(2) ?? currentMarketPrice.toFixed(2);

    const existingBidsOrAsks =
      data.positionType === "long" ? currentBook.bids : currentBook.asks;
    let currentOpenOrders =
      existingBidsOrAsks[parseFloat(roundedPrice)]?.openOrders;
    let currentAvailableQty =
      existingBidsOrAsks[parseFloat(roundedPrice)]?.availableQty;
    if (currentOpenOrders === undefined) {
      currentOpenOrders = [];
    }

    currentOpenOrders.push({
      userId: data.userId,
      qty: data.qty,
      filledQty: 0,
      orderId: orderId,
      createdAt: Date.now(),
    });

    existingBidsOrAsks[parseFloat(roundedPrice)] = {
      availableQty:
        currentAvailableQty !== undefined
          ? currentAvailableQty + data.qty
          : data.qty,
      openOrders: currentOpenOrders,
    };
  }

  return {
    orderId,
    status: "open",
    filledQty: 0,
    averagePrice: 0,
  };
}
