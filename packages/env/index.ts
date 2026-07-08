import "./load.js";

const nodeEnv = process.env.NODE_ENV?.trim() || "development";
const isProd = nodeEnv === "production";

function readRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required env variable: ${name}`);
  return value;
}

/** Required in prod; devDefault used locally when unset or empty. */
function readEnv(name: string, devDefault: string): string {
  const value = process.env[name]?.trim();
  if (value) return value;
  if (!isProd) return devDefault;
  throw new Error(`Missing required env variable: ${name}`);
}

const port = Number(process.env.PORT?.trim() || "3000");
const backendQueueId = readEnv(
  "BACKEND_QUEUE_ID",
  "00000000-0000-4000-8000-dev00000001",
);

export const env = {
  // ponytail: defaults match docker-compose.yml for local dev
  databaseUrl: readEnv(
    "DATABASE_URL",
    "postgresql://postgres:postgres@localhost:5433/cex",
  ),
  redisUrl: readEnv("REDIS_URL", "redis://localhost:6379"),
  jwtSecret: readEnv("JWT_SECRET", "dev-jwt-secret"),
  adminSecret: readEnv("ADMIN_SECRET", "dev-admin-secret"),
  port,
  backendQueueId,
  incomingQueue: readEnv("INCOMING_QUEUE", "backend-to-engine-broker"),
  engineTimeoutMs: Number(process.env.ENGINE_TIMEOUT_MS?.trim() || "30000"),
  engineEventStream:
    process.env.ENGINE_EVENTS_STREAM?.trim() || "engine-events",
  nodeEnv,
  nextPublicApiUrl:
    process.env.NEXT_PUBLIC_API_URL?.trim() ??
    (isProd ? "" : "http://localhost:3000"),
  responseQueue: `response-queue-${backendQueueId}`,
};

export const BACKEND =
  process.env.BACKEND_URL?.trim() || `http://localhost:${port}`;
