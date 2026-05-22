export type EngineCommandType =
  | "create_onramp"
  | "create_order"
  | "get_equity"
  | "get_open_positions"
  | "get_closed_positions"
  | "get_open_order"
  | "get_order"
  | "get_fills"
  | "cancel_order";

export interface EngineRequest {
  correlationId: string;
  responseQueue: string;
  type: EngineCommandType;
  payload: Record<string, unknown>;
}

export interface EngineResponse {
  correlationId: string;
  ok: boolean;
  data?: unknown;
  error?: string;
}

export interface RedisStreamResponse {
  name: string;
  messages: {
    id: string;
    message: {
      payload: string;
      correlationId?: string;
    };
  }[];
}
