import { createClient } from "redis";
import { env } from "env";
import type {
  EngineCommandType,
  EngineRequest,
  EngineResponse,
} from "../types/engine";

import {
  resolveEngineResponse,
  waitForEngineResponse,
} from "../store/pending-responses";
import type { RedisStreamResponse } from "types";

const publisher = createClient({ url: env.redisUrl }).on("error", (error) => {
  console.error("Redis Publisher client error - " + error);
});

const subscriber = createClient({ url: env.redisUrl }).on("error", (error) => {
  console.error("Redis Subsciber client error - " + error);
});

export async function connectRedis(): Promise<void> {
  await Promise.all([publisher.connect(), subscriber.connect()]);
}

export async function pingRedis(): Promise<string> {
  return publisher.ping();
}

const GROUP_NAME = "backend-group";
const CONSUMER_NAME = "backend-" + process.pid;

export async function setupRedis(): Promise<void> {
  try {
    await publisher.xGroupCreate(env.responseQueue, GROUP_NAME, "0", {
      MKSTREAM: true,
    });
  } catch (e: any) {
    if (!e.message.includes("BUSYGROUP")) {
      throw e;
    }
  }
}

export async function sendToEngine(
  type: EngineCommandType,
  payload: Record<string, unknown>,
): Promise<EngineResponse> {
  const correlationId = crypto.randomUUID();
  const responsePromise = waitForEngineResponse(
    correlationId,
    env.engineTimeoutMs,
  );

  const message: EngineRequest = {
    correlationId,
    responseQueue: env.responseQueue,
    type,
    payload,
  };

  await publisher.xAdd(
    env.incomingQueue,
    "*",
    {
      payload: JSON.stringify(message),
      correlationId: message.correlationId,
    },
    {
      TRIM: {
        strategy: "MAXLEN",
        strategyModifier: "~",
        threshold: 10000,
      },
    },
  );
  return responsePromise;
}

export async function listenForEngineResponse(): Promise<void> {
  console.log(`Listening for engine response: ${env.responseQueue}`);
  for (;;) {
    try {
      const response = (await subscriber.xReadGroup(
        GROUP_NAME,
        CONSUMER_NAME,
        { key: env.responseQueue, id: ">" },
        { COUNT: 10, BLOCK: 5000 },
      )) as unknown as RedisStreamResponse[] | null;
      if (!response) continue;
      const streamData = response[0];
      if (
        !streamData ||
        !streamData.messages ||
        streamData.messages.length === 0
      )
        continue;

      for (const streamMessage of streamData.messages) {
        const { payload } = streamMessage.message;

        const parsedResponse = JSON.parse(payload) as EngineResponse;
        resolveEngineResponse(parsedResponse);
        await subscriber.xAck(env.responseQueue, GROUP_NAME, streamMessage.id);
      }
    } catch (error) {
      console.error("Invalid engine response", error);
    }
  }
}
