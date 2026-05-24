import "dotenv/config";
import { env } from "env";
import {
  persistFill,
  persistOrder,
  persistOrderStatus,
} from "./helper/persists";
import { CONSUMER_NAME, GROUP_NAME, redis } from "./helper/initialize-redis";
import type { StreamMessageType, RedisStreamResponse } from "./types/streams";

async function processMessage(streamMessage: StreamMessageType) {
  const message = streamMessage.message;
  let parsedPayload;

  try {
    parsedPayload = JSON.parse(message.payload);
  } catch {
    throw new Error("Invalid payload JSON");
  }

  const event = {
    eventId: message.eventId,
    type: message.type,
    timestamp: Number(message.timestamp),
    payload: parsedPayload,
  };

  switch (event.type) {
    case "ORDER_CREATED":
      await persistOrder(event);
      break;

    case "CREATE_FILL":
      await persistFill(event);
      break;

    case "ORDER_FILLED":
      await persistOrderStatus(event, "Filled");
      break;

    case "ORDER_CANCELLED":
      await persistOrderStatus(event, "Cancelled");
      break;

    case "ORDER_PARTIALLY_FILLED":
      await persistOrderStatus(event, "PartiallyFilled");
      break;

    default:
      throw new Error(`Unknow event type: ${event.type}`);
  }
}

for (;;) {
  const response = (await redis.xReadGroup(
    GROUP_NAME,
    CONSUMER_NAME,
    {
      key: env.engineEventStream,
      id: ">",
    },
    {
      COUNT: 100,
      BLOCK: 5000,
    },
  )) as unknown as RedisStreamResponse[] | null;
  if (!response || response.length === 0) continue;

  const stream = response[0];
  if (!stream?.messages?.length) continue;

  for (const message of stream.messages) {
    try {
      await processMessage(message);
      await redis.xAck(env.engineEventStream, GROUP_NAME, message.id);
    } catch (error) {
      console.error("Failed processing stream message", message.id, error);
    }
  }
}
