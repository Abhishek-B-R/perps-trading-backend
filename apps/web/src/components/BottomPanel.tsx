"use client";

import type { Fill, Order, Position } from "@/lib/api";
import { formatPrice, formatUsd } from "@/lib/format";

type Tab = "positions" | "orders" | "fills";

interface Props {
  tab: Tab;
  onTabChange: (t: Tab) => void;
  positions: Position[];
  orders: Order[];
  fills: Fill[];
  onCancel: (id: string) => void;
}

export function BottomPanel({
  tab,
  onTabChange,
  positions,
  orders,
  fills,
  onCancel,
}: Props) {
  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "positions", label: "Positions", count: positions.length },
    { id: "orders", label: "Open Orders", count: orders.length },
    { id: "fills", label: "Trade History", count: fills.length },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="flex border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onTabChange(t.id)}
            className={`px-4 py-2 text-xs font-medium transition-colors ${
              tab === t.id
                ? "border-b-2 border-accent text-text"
                : "text-muted hover:text-text"
            }`}
          >
            {t.label}
            {t.count !== undefined && t.count > 0 && (
              <span className="ml-1.5 rounded-full bg-surface-2 px-1.5 py-0.5 text-[10px]">
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-auto text-xs">
        {tab === "positions" && <PositionsTable positions={positions} />}
        {tab === "orders" && (
          <OrdersTable orders={orders} onCancel={onCancel} />
        )}
        {tab === "fills" && <FillsTable fills={fills} />}
      </div>
    </div>
  );
}

function PositionsTable({ positions }: { positions: Position[] }) {
  if (positions.length === 0)
    return <Empty msg="No open positions" />;
  return (
    <table className="w-full">
      <thead>
        <tr className="text-muted">
          <Th>Market</Th>
          <Th>Side</Th>
          <Th>Size</Th>
          <Th>Entry</Th>
          <Th>Margin</Th>
          <Th>Liq. Price</Th>
        </tr>
      </thead>
      <tbody>
        {positions.map((p, i) => (
          <tr key={i} className="border-t border-border/50">
            <Td>{p.market}</Td>
            <Td className={p.type === "long" ? "text-long" : "text-short"}>
              {p.type.toUpperCase()}
            </Td>
            <Td>{p.qty}</Td>
            <Td>{formatPrice(p.averagePrice)}</Td>
            <Td>{formatUsd(p.margin)}</Td>
            <Td>{formatPrice(p.liquidationPrice)}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function OrdersTable({
  orders,
  onCancel,
}: {
  orders: Order[];
  onCancel: (id: string) => void;
}) {
  if (orders.length === 0) return <Empty msg="No open orders" />;
  return (
    <table className="w-full">
      <thead>
        <tr className="text-muted">
          <Th>Side</Th>
          <Th>Type</Th>
          <Th>Price</Th>
          <Th>Qty</Th>
          <Th>Margin</Th>
          <th className="px-3 py-2" />
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o.id} className="border-t border-border/50">
            <Td className={o.type === "LONG" ? "text-long" : "text-short"}>
              {o.type}
            </Td>
            <Td>{o.orderType}</Td>
            <Td>{formatPrice(parseFloat(o.price))}</Td>
            <Td>{o.qty}</Td>
            <Td>{formatUsd(parseFloat(o.equity))}</Td>
            <Td>
              <button
                onClick={() => onCancel(o.id)}
                className="text-short hover:underline"
              >
                Cancel
              </button>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function FillsTable({ fills }: { fills: Fill[] }) {
  if (fills.length === 0) return <Empty msg="No trades yet" />;
  return (
    <table className="w-full">
      <thead>
        <tr className="text-muted">
          <Th>Price</Th>
          <Th>Qty</Th>
          <Th>Time</Th>
        </tr>
      </thead>
      <tbody>
        {fills.map((f) => (
          <tr key={f.id} className="border-t border-border/50">
            <Td>{formatPrice(parseFloat(f.price))}</Td>
            <Td>{f.qty}</Td>
            <Td>{new Date(f.createdAt).toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-2 text-left font-medium">{children}</th>;
}
function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
}
function Empty({ msg }: { msg: string }) {
  return <p className="p-6 text-center text-muted">{msg}</p>;
}
