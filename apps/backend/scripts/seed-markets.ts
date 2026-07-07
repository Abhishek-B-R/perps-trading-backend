/**
 * Seed default markets. Run once after migrations:
 *   bun apps/backend/scripts/seed-markets.ts
 *
 * Requires Postgres — start with: docker compose up -d
 */
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";

const root = resolve(import.meta.dir, "../../..");

// Load env BEFORE prisma — import is hoisted otherwise
for (const file of [".env", "packages/db/.env", "apps/backend/.env"]) {
  const path = resolve(root, file);
  if (existsSync(path)) config({ path, override: true });
}

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL not set. Check .env files in repo root or packages/db/");
  process.exit(1);
}

const { prisma } = await import("db");

const MARKETS = [
  { marketSlug: "BTC", imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
  { marketSlug: "ETH", imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  { marketSlug: "SOL", imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.png" },
  { marketSlug: "BNB", imageUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
  { marketSlug: "DOGE", imageUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png" },
];

try {
  for (const m of MARKETS) {
    await prisma.markets.upsert({
      where: { marketSlug: m.marketSlug },
      create: m,
      update: { imageUrl: m.imageUrl },
    });
    console.log(`✓ ${m.marketSlug}`);
  }
  console.log("Markets seeded.");
} catch (e: unknown) {
  const msg = e instanceof Error ? e.message : String(e);
  if (msg.includes("ECONNREFUSED") || msg.includes("connect")) {
    console.error("\n❌ Cannot reach Postgres.");
    console.error("   Start infra:   docker compose up -d");
    console.error("   Migrate:       cd packages/db && bunx prisma migrate deploy");
    console.error(`   DATABASE_URL:  ${process.env.DATABASE_URL}`);
    console.error("   (Docker maps Postgres to host port 5433 — see docker-compose.yml)\n");
  } else {
    console.error(e);
  }
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
