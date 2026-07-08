/**
 * Seed default markets. Run once after migrations:
 *   bun apps/backend/scripts/seed-markets.ts
 */
import { env } from "env";
import { prisma } from "db";

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
    console.error(`   DATABASE_URL: ${env.databaseUrl}\n`);
  } else {
    console.error(e);
  }
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
