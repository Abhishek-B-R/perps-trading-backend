export type EngineCommandType =
  | "create_onramp"
  | "create_order"
  | "get_equity"
  | "get_open_positions"
  | "get_closed_positions"
  | "get_open_order"
  | "get_order"
  | "get_fills"
  | "get_depth"
  | "get_mark_price"
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