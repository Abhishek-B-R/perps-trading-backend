import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";

const rootEnv = resolve(import.meta.dir, "../../.env");
if (existsSync(rootEnv)) {
  config({ path: rootEnv });
}

const base =
  process.env.BACKEND_URL ??
  `http://localhost:${process.env.PORT ?? "3000"}`;

let ready = false;
try {
  const res = await fetch(`${base}/health`);
  ready = res.ok;
} catch {
  ready = false;
}

(globalThis as { __PERPS_TEST_READY__?: boolean }).__PERPS_TEST_READY__ = ready;

if (!ready) {
  console.warn(
    `\n⚠  Skipping integration tests — backend not reachable at ${base}\n` +
      `   Start: backend + engine + redis + postgres, then rerun bun test\n`,
  );
}
