"use client";

import { useEffect, useRef } from "react";
import {
  CandlestickSeries,
  ColorType,
  createChart,
  type IChartApi,
  type ISeriesApi,
  type CandlestickData,
  type Time,
} from "lightweight-charts";
import type { Candle } from "@/lib/api";

const INTERVALS = ["1m", "5m", "15m", "1h", "4h", "1d"] as const;

interface Props {
  candles: Candle[];
  interval: string;
  onIntervalChange: (i: string) => void;
  loading?: boolean;
}

export function CandleChart({
  candles,
  interval,
  onIntervalChange,
  loading,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#8b95a8",
      },
      grid: {
        vertLines: { color: "#1e2433" },
        horzLines: { color: "#1e2433" },
      },
      crosshair: { mode: 1 },
      rightPriceScale: { borderColor: "#1e2433" },
      timeScale: { borderColor: "#1e2433", timeVisible: true },
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#00c076",
      downColor: "#ff4d6a",
      borderUpColor: "#00c076",
      borderDownColor: "#ff4d6a",
      wickUpColor: "#00c076",
      wickDownColor: "#ff4d6a",
    });

    chartRef.current = chart;
    seriesRef.current = series;

    const ro = new ResizeObserver(() => {
      if (containerRef.current)
        chart.applyOptions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (!seriesRef.current || candles.length === 0) return;
    const data: CandlestickData<Time>[] = candles.map((c) => ({
      time: c.time as Time,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));
    seriesRef.current.setData(data);
    chartRef.current?.timeScale().fitContent();
  }, [candles]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-1 border-b border-border px-3 py-2">
        {INTERVALS.map((i) => (
          <button
            key={i}
            onClick={() => onIntervalChange(i)}
            className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              interval === i
                ? "bg-surface-2 text-text"
                : "text-muted hover:text-text"
            }`}
          >
            {i}
          </button>
        ))}
        {loading && (
          <span className="ml-auto text-xs text-muted">Updating…</span>
        )}
      </div>
      <div ref={containerRef} className="min-h-0 flex-1" />
    </div>
  );
}
