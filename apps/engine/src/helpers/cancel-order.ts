import {
  ORDERBOOKS,
  USERS,
  type CancelOrderInput,
} from "../store/exchange-store";

export default function CancelOrder(data: CancelOrderInput) {
  const existingUser = USERS.find((x) => x.userId === data.userId);
  if (!existingUser) {
    throw new Error("user not found");
  }

  const orderInfo = existingUser.orders.find((x) => x.orderId === data.orderId);
  if (!orderInfo) {
    throw new Error("order not found");
  }

  if (orderInfo.status !== "open") {
    throw new Error(
      orderInfo.status === "cancelled"
        ? "this order is already cancelled"
        : "this order is already filled partially or completely, so it can't be rejected",
    );
  }

  const existingBidOrAsk =
    orderInfo.type === "long"
      ? ORDERBOOKS[orderInfo.market]?.bids
      : ORDERBOOKS[orderInfo.market]?.asks;
  if (!existingBidOrAsk) {
    throw new Error("no bids or asks found for this market");
  }

  const priceBucket = existingBidOrAsk[parseFloat(orderInfo.price.toFixed(2))];
  if (!priceBucket) {
    throw new Error("no existing price bucket for this market");
  }

  const index = priceBucket.openOrders.findIndex(
    (x) => x.orderId === orderInfo.orderId,
  );
  if (index < 0) {
    throw new Error("no order found with such order id");
  }
  priceBucket.openOrders.splice(index, 1);
  priceBucket.availableQty -= orderInfo.qty;

  if (priceBucket.availableQty <= 0) {
    delete existingBidOrAsk[parseFloat(orderInfo.price.toFixed(2))];
  }

  existingUser.collateral.locked -= orderInfo.margin;
  existingUser.collateral.available += orderInfo.margin;
  orderInfo.status = "cancelled";

  return {
    status: "ok",
    message: "order cancelled successfully",
  };
}
