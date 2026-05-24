import "dotenv/config";
import { createClient } from "redis";
import { env } from "./src/utils/env.js";
import type {
  CancelOrderInput,
  CreateOrderInput,
  GetPositionInput,
} from "./src/store/exchange-store.js";
import CreateOrder from "./src/helpers/create-order.js";
import CancelOrder from "./src/helpers/cancel-order.js";
import LiveDataFetch from "./src/ws/connection.js";
import {
  GetClosedPositions,
  GetEquity,
  GetFills,
  GetOpenOrder,
  GetOpenPositions,
  GetOrder,
} from "./src/helpers/get-endpoints.js";
import CreateOnRamp from "./src/helpers/create-onramp.js";
import type { RedisStreamResponse } from "./src/types/redis-stream.js";

const GROUP_NAME = "engine-group";
const CONSUMER_NAME = "engine-" + process.pid;

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

LiveDataFetch();

const brokerClient = createClient({ url: env.redisUrl }).on(
  "error",
  (error) => {
    console.error("Redis broker client error", error);
  },
);

export const responseClient = createClient({ url: env.redisUrl }).on(
  "error",
  (error) => {
    console.error("Redis response client error", error);
  },
);

await Promise.all([brokerClient.connect(), responseClient.connect()]);

try {
  await brokerClient.xGroupCreate(env.incomingQueue, GROUP_NAME, "0", {
    MKSTREAM: true,
  });
} catch (e: any) {
  if (!e.message.includes("BUSYGROUP")) {
    throw e;
  }
}

async function sendResponse(
  responseQueue: string,
  response: EngineResponse,
): Promise<void> {
  await responseClient.xAdd(responseQueue, "*", {
    payload: JSON.stringify(response),
    correlationId: response.correlationId,
  });
}

function handleEngineRequest(message: EngineRequest): unknown {
  switch (message.type) {
    case "create_onramp":
      return CreateOnRamp(
        message.payload as unknown as { userId: string; price: number },
      );

    case "create_order":
      return CreateOrder(message.payload as unknown as CreateOrderInput);

    case "cancel_order":
      return CancelOrder(message.payload as unknown as CancelOrderInput);

    case "get_equity":
      return GetEquity(message.payload as unknown as { userId: string });

    case "get_open_positions":
      return GetOpenPositions(message.payload as unknown as GetPositionInput);

    case "get_closed_positions":
      return GetClosedPositions(message.payload as unknown as GetPositionInput);

    case "get_open_order":
      return GetOpenOrder(message.payload as unknown as GetPositionInput);

    case "get_order":
      return GetOrder(message.payload as unknown as GetPositionInput);

    case "get_fills":
      return GetFills(message.payload as unknown as { userId: string });

    default:
      throw new Error("Invalid request sent");
  }
}

console.log(`Engine listening on Redis queue: ${env.incomingQueue}`);

for (;;) {
  const response = (await brokerClient.xReadGroup(
    GROUP_NAME,
    CONSUMER_NAME,
    { key: env.incomingQueue, id: ">" },
    { COUNT: 10, BLOCK: 5000 },
  )) as unknown as RedisStreamResponse[] | null;
  if (!response || response.length === 0) continue;

  const streamData = response[0];
  if (!streamData || !streamData.messages || streamData.messages.length === 0)
    continue;

  for (const streamMessage of streamData.messages) {
    const { payload: rawMessage } = streamMessage.message;
    if (!rawMessage) {
      await brokerClient.xAck(env.incomingQueue, GROUP_NAME, streamMessage.id);
      continue;
    }

    let message: EngineRequest;
    try {
      message = JSON.parse(rawMessage) as EngineRequest;
    } catch {
      console.error("Skipping invalid broker message");
      await brokerClient.xAck(env.incomingQueue, GROUP_NAME, streamMessage.id);
      continue;
    }

    try {
      const data = await handleEngineRequest(message);
      await sendResponse(message.responseQueue, {
        correlationId: message.correlationId,
        ok: true,
        data,
      });
    } catch (error) {
      await sendResponse(message.responseQueue, {
        correlationId: message.correlationId,
        ok: false,
        error: error instanceof Error ? error.message : "engine_error",
      });
    } finally {
      await brokerClient.xAck(env.incomingQueue, GROUP_NAME, streamMessage.id);
    }
  }
}
