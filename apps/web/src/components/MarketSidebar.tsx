"use client";

import type { Market, Ticker } from "@/lib/api";
import { formatPrice, pctChange } from "@/lib/format";

interface Props {
  markets: Market[];
  tickers: Record<string, Ticker | undefined>;
  selected: string;
  onSelect: (slug: string) => void;
}

export function MarketSidebar({
  markets,
  tickers,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-3 py-3">
        <h1 className="text-sm font-bold tracking-tight">
          Perps<span className="text-accent">.</span>
        </h1>
        <p className="text-[10px] text-muted">Perpetual Futures</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {markets.map((m) => {
          const t = tickers[m.marketSlug];
          const active = m.marketSlug === selected;
          const up = (t?.priceChangePercent ?? 0) >= 0;

          return (
            <button
              key={m.id}
              onClick={() => onSelect(m.marketSlug)}
              className={`flex w-full items-center justify-between px-3 py-2.5 text-left transition-colors hover:bg-surface-2 ${
                active ? "bg-surface-2 border-l-2 border-accent" : ""
              }`}
            >
              <div>
                <div className="text-sm font-medium">{m.marketSlug}</div>
                <div className="text-[10px] text-muted">PERP</div>
              </div>
              <div className="text-right">
                <div className="text-sm">
                  {t ? formatPrice(t.lastPrice) : "—"}
                </div>
                <div
                  className={`text-[10px] ${up ? "text-long" : "text-short"}`}
                >
                  {t ? pctChange(t.priceChangePercent) : ""}
                </div>
              </div>
            </button>
          );
        })}
        {markets.length === 0 && (
          <p className="p-4 text-center text-xs text-muted">No markets yet</p>
        )}
      </div>
    </div>
  );
}
