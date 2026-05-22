import { FILLS, USERS, type GetPositionInput } from "../store/exchange-store";

export function GetEquity(data: { userId: string }) {
  const userInfo = USERS.find((x) => x.userId === data.userId);
  if (!userInfo) {
    throw new Error("user not found");
  }
  const equity = userInfo.collateral.available + userInfo.collateral.locked;
  return {
    available: userInfo.collateral.available,
    locked: userInfo.collateral.locked,
    total: equity,
  };
}

export function GetOpenPositions(data: GetPositionInput) {
  const userInfo = USERS.find((x) => x.userId === data.userId);
  if (!userInfo) {
    throw new Error("user not found");
  }

  return {
    positions: userInfo.positions.filter((x) => x.market === data.marketId),
  };
}

export function GetClosedPositions(data: GetPositionInput) {
  return {
    status: "in progress",
  };
}

export function GetOpenOrder(data: GetPositionInput) {
  const userInfo = USERS.find((x) => x.userId === data.userId);
  if (!userInfo) {
    throw new Error("user not found");
  }

  const openOrders = userInfo.orders.filter(
    (x) => x.status === "open" && x.market === data.marketId,
  );
  return {
    orders: openOrders,
  };
}

export function GetOrder(data: GetPositionInput) {
  const userInfo = USERS.find((x) => x.userId === data.userId);
  if (!userInfo) {
    throw new Error("user not found");
  }

  return {
    orders: userInfo.orders.filter((x) => x.market === data.marketId),
  };
}

export function GetFills(data: { userId: string }) {
  return {
    fills: FILLS.filter(
      (x) => x.taker === data.userId || x.maker === data.userId,
    ),
  };
}
