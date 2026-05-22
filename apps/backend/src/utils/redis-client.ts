import { createClient } from "redis";
import { env } from "./env";
import type {
  EngineCommandType,
  EngineRequest,
  EngineResponse,
  RedisStreamResponse,
} from "../types/engine";
import {
  resolveEngineResponse,
  waitForEngineResponse,
} from "../store/pending-responses";

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

  await publisher.xAdd(env.incomingQueue, "*", {
    payload: JSON.stringify(message),
    correlationId: message.correlationId,
  });
  return responsePromise;
}

export async function listenForEngineResponse(): Promise<void> {
  console.log(`Listening for engine response: ${env.responseQueue}`);
  let lastResponseId = "0-0";

  for (;;) {
    try {
      const response = (await subscriber.xRead(
        { key: env.responseQueue, id: lastResponseId },
        { COUNT: 10, BLOCK: 0 },
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
        lastResponseId = streamMessage.id;
        const { payload } = streamMessage.message;

        const parsedResponse = JSON.parse(payload) as EngineResponse;
        resolveEngineResponse(parsedResponse);
        await subscriber.xDel(env.responseQueue, streamMessage.id);
      }
    } catch (error) {
      console.error("Invalid engine response", error);
    }
  }
}
