import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

// Single source of truth: repo-root .env only (never apps/*/.env)
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const rootEnv = resolve(root, ".env");
if (existsSync(rootEnv)) {
  config({ path: rootEnv });
}

function readRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env variable: ${name}`);
  return value;
}

function readOptionalEnv(name: string, fallback: string): string {
  return process.env[name] ?? fallback;
}

const port = Number(readOptionalEnv("PORT", "3000"));
const nodeEnv = readOptionalEnv("NODE_ENV", "development");
const backendQueueId = readRequiredEnv("BACKEND_QUEUE_ID");

export const env = {
  databaseUrl: readRequiredEnv("DATABASE_URL"),
  redisUrl: readRequiredEnv("REDIS_URL"),
  jwtSecret: readRequiredEnv("JWT_SECRET"),
  adminSecret: readRequiredEnv("ADMIN_SECRET"),
  port,
  backendQueueId,
  incomingQueue: readRequiredEnv("INCOMING_QUEUE"),
  engineTimeoutMs: Number(readOptionalEnv("ENGINE_TIMEOUT_MS", "30000")),
  engineEventStream: readOptionalEnv("ENGINE_EVENTS_STREAM", "engine-events"),
  nodeEnv,
  /** Empty string in production = same-origin relative API paths */
  nextPublicApiUrl: readOptionalEnv(
    "NEXT_PUBLIC_API_URL",
    nodeEnv === "production" ? "" : "http://localhost:3000",
  ),
  responseQueue: `response-queue-${backendQueueId}`,
};

export const BACKEND = readOptionalEnv("BACKEND_URL", `http://localhost:${port}`);
