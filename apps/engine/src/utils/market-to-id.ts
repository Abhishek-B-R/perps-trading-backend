import { prisma } from "db";
import {
  MARKET_ID_TO_SLUG,
  MARKET_SLUG_TO_ID,
  MARKET_WITH_IDS,
} from "../store/exchange-store";
import type { Markets } from "db";

/** Syncs DB market UUIDs ↔ slugs into in-memory maps every 5s. */
export function ExportToIds() {
  const sync = async () => {
    const marketsData: Markets[] = await prisma.markets.findMany();
    for (const m of marketsData) {
      MARKET_WITH_IDS.set(m.id, m.marketSlug + "USDT");
      MARKET_ID_TO_SLUG.set(m.id, m.marketSlug);
      MARKET_SLUG_TO_ID.set(m.marketSlug, m.id);
    }
  };
  void sync();
  setInterval(sync, 5000);
}

export function resolveMarketSlug(marketId: string): string {
  const slug = MARKET_ID_TO_SLUG.get(marketId);
  if (!slug) throw new Error("unknown market");
  return slug;
}
