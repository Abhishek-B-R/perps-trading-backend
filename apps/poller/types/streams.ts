export type StreamMessageType = {
  id: string;
  message: {
    eventId: string;
    type: string;
    payload: string;
    timestamp: string;
    correlationId?: string | undefined;
  };
};

export type EventType = {
  eventId: string;
  type: string;
  timestamp: number;
  payload: Record<string, unknown>;
};

export interface RedisStreamResponse {
  name: string;
  messages: {
    id: string;
    message: {
      eventId: string;
      type: string;
      payload: string;
      timestamp: string;
      correlationId?: string;
    };
  }[];
}

export interface CreateOrder {
  orderId: string;
  userId: string;
  market: string;
  positionType: "long" | "short";
  qty: number;
  margin: number;
  orderType: "limit" | "market";
  price: number;
  slippage: number;
  status: "open";
}

export interface CreateFill {
  maker: string;
  taker: string;
  market: string;
  qty: number;
  price: number;
  makerOrderId: string;
  takerOrderId: string;
}
