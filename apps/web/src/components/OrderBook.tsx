"use client";

import type { Depth } from "@/lib/api";
import { formatPrice, formatQty } from "@/lib/format";

interface Props {
  depth: Depth | undefined;
  markPrice?: number;
}

export function OrderBook({ depth, markPrice }: Props) {
  const asks = [...(depth?.asks ?? [])].reverse().slice(0, 12);
  const bids = (depth?.bids ?? []).slice(0, 12);
  const maxQty = Math.max(
    ...asks.map((a) => a.qty),
    ...bids.map((b) => b.qty),
    1,
  );

  return (
    <div className="flex h-full flex-col text-xs">
      <div className="border-b border-border px-3 py-2.5 font-medium">
        Order Book
      </div>
      <div className="grid grid-cols-3 gap-x-2 px-3 py-1.5 text-muted">
        <span>Price</span>
        <span className="text-right">Size</span>
        <span className="text-right">Total</span>
      </div>
      <div className="flex-1 overflow-y-auto px-1">
        {asks.map((level, i) => (
          <DepthRow
            key={`a-${i}`}
            price={level.price}
            qty={level.qty}
            maxQty={maxQty}
            side="ask"
          />
        ))}
        {markPrice !== undefined && (
          <div className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-accent">
            {formatPrice(markPrice)}
            <span className="text-[10px] font-normal text-muted">Mark</span>
          </div>
        )}
        {bids.map((level, i) => (
          <DepthRow
            key={`b-${i}`}
            price={level.price}
            qty={level.qty}
            maxQty={maxQty}
            side="bid"
          />
        ))}
        {!depth && (
          <p className="p-4 text-center text-muted">No depth data</p>
        )}
      </div>
    </div>
  );
}

function DepthRow({
  price,
  qty,
  maxQty,
  side,
}: {
  price: number;
  qty: number;
  maxQty: number;
  side: "bid" | "ask";
}) {
  const pct = (qty / maxQty) * 100;
  const color = side === "bid" ? "bg-long-dim" : "bg-short-dim";
  const textColor = side === "bid" ? "text-long" : "text-short";

  return (
    <div className="relative grid grid-cols-3 gap-x-2 py-0.5">
      <div
        className={`absolute inset-y-0 right-0 ${color}`}
        style={{ width: `${pct}%` }}
      />
      <span className={`relative ${textColor}`}>{formatPrice(price)}</span>
      <span className="relative text-right">{formatQty(qty)}</span>
      <span className="relative text-right text-muted">
        {formatPrice(price * qty, 0)}
      </span>
    </div>
  );
}
