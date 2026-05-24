import { createClient } from "redis";
import { env } from "env";

export const GROUP_NAME = "db-poller-group";
export const CONSUMER_NAME = "db-poller-" + process.pid;

export const redis = createClient({
  url: env.redisUrl,
});

await redis.connect();

try {
  await redis.xGroupCreate(env.engineEventStream, GROUP_NAME, "0", {
    MKSTREAM: true,
  });
} catch (e: any) {
  if (!e.message.includes("BUSYGROUP")) {
    throw e;
  }
}
