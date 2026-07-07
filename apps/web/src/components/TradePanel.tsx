"use client";

import { useState } from "react";
import type { Equity } from "@/lib/api";
import { formatUsd } from "@/lib/format";

interface Props {
  symbol: string;
  equity?: Equity;
  markPrice?: number;
  onSubmit: (order: {
    orderType: "limit" | "market";
    positionType: "long" | "short";
    equity: number;
    qty: number;
    price?: number;
    slippage?: number;
  }) => Promise<void>;
  onDeposit: (amount: number) => Promise<void>;
  loading?: boolean;
}

export function TradePanel({
  symbol,
  equity,
  markPrice,
  onSubmit,
  onDeposit,
  loading,
}: Props) {
  const [side, setSide] = useState<"long" | "short">("long");
  const [orderType, setOrderType] = useState<"limit" | "market">("limit");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [margin, setMargin] = useState("");
  const [slippage, setSlippage] = useState("1");
  const [depositAmt, setDepositAmt] = useState("");
  const [showDeposit, setShowDeposit] = useState(false);

  const isLong = side === "long";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = {
      orderType,
      positionType: side,
      equity: parseFloat(margin),
      qty: parseFloat(qty),
      ...(orderType === "limit"
        ? { price: parseFloat(price) }
        : { slippage: parseFloat(slippage) }),
    };
    await onSubmit(body);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-3 py-2.5 font-medium">
        Trade {symbol}-PERP
      </div>

      <div className="border-b border-border px-3 py-2 text-xs text-muted">
        Available:{" "}
        <span className="text-text">
          {equity ? formatUsd(equity.available) : "—"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1 p-2">
        <button
          onClick={() => setSide("long")}
          className={`rounded py-2 text-sm font-semibold transition-colors ${
            isLong ? "bg-long text-black" : "bg-surface-2 text-muted"
          }`}
        >
          Long
        </button>
        <button
          onClick={() => setSide("short")}
          className={`rounded py-2 text-sm font-semibold transition-colors ${
            !isLong ? "bg-short text-white" : "bg-surface-2 text-muted"
          }`}
        >
          Short
        </button>
      </div>

      <div className="flex gap-1 px-2 pb-2">
        {(["limit", "market"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setOrderType(t)}
            className={`rounded px-3 py-1 text-xs capitalize ${
              orderType === t
                ? "bg-surface-2 text-text"
                : "text-muted hover:text-text"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 px-3">
        {orderType === "limit" && (
          <Field
            label="Price"
            value={price}
            onChange={setPrice}
            placeholder={markPrice ? String(markPrice) : "0"}
            suffix="USDT"
          />
        )}
        {orderType === "market" && (
          <Field
            label="Slippage"
            value={slippage}
            onChange={setSlippage}
            placeholder="1"
            suffix="%"
          />
        )}
        <Field
          label="Quantity"
          value={qty}
          onChange={setQty}
          placeholder="0.00"
          suffix={symbol}
        />
        <Field
          label="Margin"
          value={margin}
          onChange={setMargin}
          placeholder="0.00"
          suffix="USDT"
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-auto rounded py-3 text-sm font-bold transition-opacity disabled:opacity-50 ${
            isLong ? "bg-long text-black" : "bg-short text-white"
          }`}
        >
          {loading ? "Placing…" : `${isLong ? "Buy" : "Sell"} ${symbol}`}
        </button>
      </form>

      <div className="border-t border-border p-3">
        <button
          onClick={() => setShowDeposit(!showDeposit)}
          className="text-xs text-accent hover:underline"
        >
          {showDeposit ? "Hide deposit" : "Deposit collateral"}
        </button>
        {showDeposit && (
          <div className="mt-2 flex gap-2">
            <input
              type="number"
              value={depositAmt}
              onChange={(e) => setDepositAmt(e.target.value)}
              placeholder="Amount USDT"
              className="flex-1 rounded border border-border bg-surface px-2 py-1.5 text-sm outline-none focus:border-accent"
            />
            <button
              onClick={() => onDeposit(parseFloat(depositAmt))}
              className="rounded bg-accent px-3 py-1.5 text-xs font-medium text-white"
            >
              Deposit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-muted">{label}</span>
      <div className="flex items-center rounded border border-border bg-surface">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2 text-sm outline-none"
        />
        {suffix && (
          <span className="pr-3 text-xs text-muted">{suffix}</span>
        )}
      </div>
    </label>
  );
}
