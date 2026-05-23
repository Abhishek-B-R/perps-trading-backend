export type PositionSide = "long" | "short";
export type OrderType = "market" | "limit";
export type OrderStatus = "open" | "partially_filled" | "filled" | "cancelled";

export interface Users {
  userId: string;
  // username: string;
  // password: number; //uncomment if needed
  collateral: Collateral;
  positions: Position[];
  orders: Orders[];
}

export interface Collateral {
  available: number;
  locked: number;
}

export interface Position {
  market: string;
  type: PositionSide;
  qty: number;
  margin: number;
  liquidationPrice: number;
  averagePrice: number;
  createdAt: number;
}

export interface Orders {
  orderId: string;
  market: string;
  type: PositionSide;
  qty: number;
  margin: number;
  orderType: OrderType;
  price: number;
  slippage: number;
  status: OrderStatus;
  createdAt: number;
}

export type Bid = {
  availableQty: number;
  openOrders: {
    userId: string;
    qty: number;
    filledQty: number;
    orderId: string;
    createdAt: number;
  }[];
};

export interface Orderbook {
  bids: Record<number, Bid>;
  asks: Record<number, Bid>;
  lastTradedPrice: number;
  indexPrice: number;
}

type Orderbooks = Record<string, Orderbook>;

export interface CreateOrderInput {
  userId: string;
  orderType: OrderType;
  positionType: PositionSide;
  equity: number;
  market: string;
  price: number | null;
  qty: number;
  slippage: number | null;
}

export interface GetPositionInput {
  userId: string;
  marketId: string;
}

export interface GetOrderInput {
  userId: string;
  marketId: string;
}

export interface CancelOrderInput {
  userId: string;
  orderId: string;
}

export interface DepthLevel {
  price: number;
  qty: number;
}

export interface DepthResponse {
  symbol: string;
  bids: DepthLevel[];
  asks: DepthLevel[];
}

export interface Fill {
  maker: string;
  taker: string;
  market: string;
  qty: number;
  price: number;
  makerOrderId: string;
  takerOrderId: string;
  createdAt: number;
}

export const ORDERBOOKS: Orderbooks = {};
export let USERS: Users[] = [];
export const FILLS: Fill[] = [];

export const MARKET_PRICES: Map<string, number> = new Map();
