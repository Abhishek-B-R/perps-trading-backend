"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { formatPrice, formatUsd, pctChange } from "@/lib/format";
import { AuthModal } from "@/components/AuthModal";
import { BottomPanel } from "@/components/BottomPanel";
import { CandleChart } from "@/components/CandleChart";
import { MarketSidebar } from "@/components/MarketSidebar";
import { OrderBook } from "@/components/OrderBook";
import { TradePanel } from "@/components/TradePanel";
import { LogOut, User } from "lucide-react";

export function TradingApp() {
  const { token, logout } = useAuth();
  const qc = useQueryClient();
  const [symbol, setSymbol] = useState("BTC");
  const [interval, setInterval] = useState("15m");
  const [bottomTab, setBottomTab] = useState<
    "positions" | "orders" | "fills"
  >("positions");
  const [authOpen, setAuthOpen] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  const { data: markets = [] } = useQuery({
    queryKey: ["markets"],
    queryFn: api.markets,
    refetchInterval: 30_000,
  });

  const currentMarket = useMemo(
    () => markets.find((m) => m.marketSlug === symbol),
    [markets, symbol],
  );

  const { data: candles = [], isFetching: candlesLoading } = useQuery({
    queryKey: ["candles", symbol, interval],
    queryFn: () => api.candles(symbol, interval),
    refetchInterval: 15_000,
  });

  const { data: ticker } = useQuery({
    queryKey: ["ticker", symbol],
    queryFn: () => api.ticker(symbol),
    refetchInterval: 3_000,
  });

  const { data: depth } = useQuery({
    queryKey: ["depth", symbol],
    queryFn: () => api.depth(symbol),
    refetchInterval: 2_000,
  });

  const { data: markData } = useQuery({
    queryKey: ["mark", symbol],
    queryFn: () => api.markPrice(symbol),
    refetchInterval: 2_000,
    retry: false,
  });

  const { data: equity } = useQuery({
    queryKey: ["equity", token],
    queryFn: () => api.equity(token!),
    enabled: !!token,
    refetchInterval: 5_000,
  });

  const { data: positionsData } = useQuery({
    queryKey: ["positions", token, currentMarket?.id],
    queryFn: () => api.openPositions(token!, currentMarket!.id),
    enabled: !!token && !!currentMarket,
    refetchInterval: 3_000,
  });

  const { data: openOrders = [] } = useQuery({
    queryKey: ["openOrders", token, currentMarket?.id],
    queryFn: () => api.openOrders(token!, currentMarket!.id),
    enabled: !!token && !!currentMarket,
    refetchInterval: 3_000,
  });

  const { data: fills = [] } = useQuery({
    queryKey: ["fills", token],
    queryFn: () => api.fills(token!),
    enabled: !!token,
    refetchInterval: 5_000,
  });

  const { data: tickers = {} } = useQuery({
    queryKey: ["tickers", markets.map((m) => m.marketSlug).join(",")],
    queryFn: async () => {
      const entries = await Promise.all(
        markets.map(async (m) => {
          try {
            const t = await api.ticker(m.marketSlug);
            return [m.marketSlug, t] as const;
          } catch {
            return [m.marketSlug, undefined] as const;
          }
        }),
      );
      return Object.fromEntries(entries);
    },
    enabled: markets.length > 0,
    refetchInterval: 10_000,
  });

  const tickerMap = tickers;

  const refreshTrading = useCallback(() => {
    void qc.invalidateQueries({ queryKey: ["equity"] });
    void qc.invalidateQueries({ queryKey: ["positions"] });
    void qc.invalidateQueries({ queryKey: ["openOrders"] });
    void qc.invalidateQueries({ queryKey: ["fills"] });
    void qc.invalidateQueries({ queryKey: ["depth"] });
  }, [qc]);

  const handleOrder = useCallback(
    async (order: {
      orderType: "limit" | "market";
      positionType: "long" | "short";
      equity: number;
      qty: number;
      price?: number;
      slippage?: number;
    }) => {
      if (!token) {
        setAuthOpen(true);
        return;
      }
      setOrderLoading(true);
      try {
        await api.placeOrder(token, { ...order, market: symbol });
        refreshTrading();
        setBottomTab("orders");
      } catch (e) {
        alert(e instanceof Error ? e.message : "order failed");
      } finally {
        setOrderLoading(false);
      }
    },
    [token, symbol, refreshTrading],
  );

  const handleDeposit = useCallback(
    async (amount: number) => {
      if (!token) {
        setAuthOpen(true);
        return;
      }
      await api.onramp(token, amount);
      void qc.invalidateQueries({ queryKey: ["equity"] });
    },
    [token, qc],
  );

  const handleCancel = useCallback(
    async (orderId: string) => {
      if (!token) return;
      await api.cancelOrder(token, orderId);
      refreshTrading();
    },
    [token, refreshTrading],
  );

  const up = (ticker?.priceChangePercent ?? 0) >= 0;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-bg">
      {/* Top bar */}
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold">{symbol}-PERP</span>
            {ticker && (
              <>
                <span className="text-lg font-semibold">
                  {formatPrice(ticker.lastPrice)}
                </span>
                <span
                  className={`text-sm ${up ? "text-long" : "text-short"}`}
                >
                  {pctChange(ticker.priceChangePercent)}
                </span>
              </>
            )}
          </div>
          {ticker && (
            <div className="hidden items-center gap-4 text-xs text-muted md:flex">
              <span>
                24h High{" "}
                <span className="text-text">
                  {formatPrice(ticker.highPrice)}
                </span>
              </span>
              <span>
                24h Low{" "}
                <span className="text-text">
                  {formatPrice(ticker.lowPrice)}
                </span>
              </span>
              <span>
                24h Vol{" "}
                <span className="text-text">
                  {ticker.volume.toLocaleString()}
                </span>
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          {token && equity && (
            <span className="text-xs text-muted">
              Balance{" "}
              <span className="font-medium text-text">
                {formatUsd(equity.total)}
              </span>
            </span>
          )}
          {token ? (
            <button
              onClick={logout}
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted hover:text-text"
            >
              <LogOut size={14} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-1.5 text-xs font-medium text-white"
            >
              <User size={14} />
              Sign In
            </button>
          )}
        </div>
      </header>

      {/* Main grid */}
      <div className="grid min-h-0 flex-1 grid-cols-[200px_1fr_280px_300px] grid-rows-[1fr_200px]">
        {/* Sidebar */}
        <aside className="row-span-2 border-r border-border bg-surface">
          <MarketSidebar
            markets={markets}
            tickers={tickerMap}
            selected={symbol}
            onSelect={setSymbol}
          />
        </aside>

        {/* Chart */}
        <main className="min-h-0 border-r border-border bg-surface">
          <CandleChart
            candles={candles}
            interval={interval}
            onIntervalChange={setInterval}
            loading={candlesLoading}
          />
        </main>

        {/* Order book */}
        <section className="min-h-0 border-r border-border bg-surface">
          <OrderBook
            depth={depth}
            markPrice={markData?.markPrice ?? ticker?.lastPrice}
          />
        </section>

        {/* Trade panel */}
        <section className="row-span-2 bg-surface">
          <TradePanel
            symbol={symbol}
            equity={equity}
            markPrice={markData?.markPrice ?? ticker?.lastPrice}
            onSubmit={handleOrder}
            onDeposit={handleDeposit}
            loading={orderLoading}
          />
        </section>

        {/* Bottom panel */}
        <div className="col-span-2 border-t border-border bg-surface">
          <BottomPanel
            tab={bottomTab}
            onTabChange={setBottomTab}
            positions={positionsData?.positions ?? []}
            orders={openOrders}
            fills={fills}
            onCancel={handleCancel}
          />
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
