export type PositionSide = "long" | "short";
export type OrderType = "market" | "limit";
export type OrderStatus = "open" | "partially_filled" | "filled" | "cancelled";

export type EngineEventType =
  | "ORDER_CREATED"
  | "ORDER_FILLED"
  | "ORDER_CANCELLED"
  | "POSITION_UPDATED"
  | "CREATE_FILL"
  | "USER_LIQUIDATED";

export interface User {
  collateral: Collateral;
  positions: Position[];
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

export type Bid = {
  availableQty: number;
  openOrders: {
    userId: string;
    qty: number;
    remainingQty: number;
    orderId: string;
    createdAt: number;
  }[];
};

export interface Orderbook {
  bids: Map<number, Bid>;
  asks: Map<number, Bid>;

  bidPrices: number[];
  askPrices: number[];

  lastTradedPrice: number;
  indexPrice: number;
}

type Orderbooks = Map<string, Orderbook>;

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

/** In-memory order books keyed by market slug (e.g. "BTC"). */
export const ORDERBOOKS: Orderbooks = new Map();
/** In-memory user state: collateral + open positions. Not persisted — rebuilt via onramp. */
export let USERS = new Map<string, User>();

/** Live mark prices from Binance Futures WS, keyed by symbol (e.g. "BTCUSDT"). */
export const MARKET_PRICES: Map<string, number> = new Map();
export const MARKET_WITH_IDS: Map<string, string> = new Map();
/** DB UUID → market slug (e.g. "SOL") */
export const MARKET_ID_TO_SLUG: Map<string, string> = new Map();
/** market slug → DB UUID */
export const MARKET_SLUG_TO_ID: Map<string, string> = new Map();

export interface IncomingOrderType {
  orderId: string;
  userId: string;
  market: string;
  side: "buy" | "sell";
  positionType: PositionSide;
  orderType: OrderType;
  price: number;
  qty: number;
  equity: number;
  remainingQuantity: number;
  createdAt: number;
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
