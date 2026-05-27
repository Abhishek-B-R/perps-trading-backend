import { prisma } from "db";
import { MARKET_WITH_IDS } from "../store/exchange-store";
import type { Markets } from "@prisma/client";

export function ExportToIds() {
  setInterval(async () => {
    const marketsData: Markets[] = await prisma.markets.findMany({
      where: {},
    });
    marketsData.forEach((x) => {
      MARKET_WITH_IDS.set(x.id, x.marketSlug + "USDT");
    });
  }, 5000);
}
