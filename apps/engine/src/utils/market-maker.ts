// this will be a infinite loop which keep checking if any order in ORDERBOOK is valid now as per new market pricing

import { ORDERBOOKS, USERS } from "../store/exchange-store";
import { PositionUpdation } from "./position-updation";

export default function ProcessMarketUpdate({
  market,
  marketPrice,
}: {
  market: string;
  marketPrice: number;
}) {
  const asks = ORDERBOOKS[market]?.asks;
  const bids = ORDERBOOKS[market]?.bids;

  if (asks) {
    for (const [priceStr, bid] of Object.entries(asks)) {
      const price = parseFloat(priceStr);
      if (parseFloat(priceStr) <= marketPrice) {
        const openOrders = [...bid.openOrders];
        openOrders.forEach((x) => {
          const userInfo = USERS.find((user) => user.userId === x.userId);
          if (!userInfo) {
            console.error("user not found");
            return;
          }

          const orderInfo = userInfo.orders.find(
            (y) => y.orderId === x.orderId,
          );

          if (!orderInfo) {
            console.error("order not found");
            return;
          }

          if (orderInfo.status !== "open") {
            console.error("order already processed or cancelled");
            return;
          }

          PositionUpdation(
            {
              userId: x.userId,
              orderType: orderInfo.orderType,
              positionType: orderInfo.type,
              equity: orderInfo.margin,
              market: orderInfo.market,
              price: orderInfo.price,
              qty: orderInfo.qty,
              slippage: 0, // TODO: fix this, dont use zero
            },
            price,
            x.orderId,
          );

          const index = asks[parseFloat(priceStr)]?.openOrders.findIndex(
            (y) => y.orderId === orderInfo.orderId,
          );
          if (index === undefined || index < 0 || asks[price] === undefined)
            return;
          asks[price].openOrders.splice(index, 1);
          asks[price].availableQty -= orderInfo.qty;

          if (asks[price].openOrders.length === 0)
            delete asks[parseFloat(priceStr)];
        });
      }
    }
  }

  if (bids) {
    for (const [priceStr, bid] of Object.entries(bids)) {
      const price = parseFloat(priceStr);
      if (parseFloat(priceStr) >= marketPrice) {
        const openOrders = [...bid.openOrders];
        openOrders.forEach((x) => {
          const userInfo = USERS.find((user) => user.userId === x.userId);
          if (!userInfo) {
            console.error("user not found");
            return;
          }

          const orderInfo = userInfo.orders.find(
            (y) => y.orderId === x.orderId,
          );
          if (!orderInfo) {
            console.error("order not found");
            return;
          }

          if (orderInfo.status !== "open") {
            console.error("order already processed or cancelled");
            return;
          }

          PositionUpdation(
            {
              userId: x.userId,
              orderType: orderInfo.orderType,
              positionType: orderInfo.type,
              equity: orderInfo.margin,
              market: orderInfo.market,
              price: orderInfo.price,
              qty: orderInfo.qty,
            },
            price,
            x.orderId,
          );

          const index = bids[parseFloat(priceStr)]?.openOrders.findIndex(
            (y) => y.orderId === orderInfo.orderId,
          );
          if (index === undefined || index < 0 || bids[price] === undefined)
            return;
          bids[price].openOrders.splice(index, 1);
          bids[price].availableQty -= orderInfo.qty;

          if (bids[price].openOrders.length === 0)
            delete bids[parseFloat(priceStr)];
        });
      }
    }
  }
}
