import type { Request, Response } from "express";
import { prisma } from "db";
import { sendToEngine } from "../utils/redis-client.js";

function routeSymbol(req: Request): string {
  const raw = req.params.symbol;
  const value = Array.isArray(raw) ? raw[0] : raw;
  return (value ?? "").toUpperCase();
}

interface BinanceTicker24hr {
  symbol: string;
  lastPrice: string;
  priceChange: string;
  priceChangePercent: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
}

/** List all tradeable markets from the database. */
export async function listMarkets(_req: Request, res: Response): Promise<void> {
  const markets = await prisma.markets.findMany({
    orderBy: { marketSlug: "asc" },
  });
  res.json(markets);
}

/**
 * Proxy Binance Futures kline/candlestick data for charting.
 * Avoids CORS issues from the browser.
 */
export async function getCandles(req: Request, res: Response): Promise<void> {
  const symbol = routeSymbol(req);
  const interval = (req.query.interval as string) ?? "15m";
  const limit = Math.min(Number(req.query.limit) || 200, 500);

  if (!symbol) {
    res.status(400).json({ error: "symbol required" });
    return;
  }

  const pair = symbol.endsWith("USDT") ? symbol : `${symbol}USDT`;
  const url = `https://fapi.binance.com/fapi/v1/klines?symbol=${pair}&interval=${interval}&limit=${limit}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.status(response.status).json({ error: "binance fetch failed" });
      return;
    }
    const raw = (await response.json()) as number[][];
    const candles = raw.map((k) => ({
      time: Math.floor(k[0]! / 1000),
      open: parseFloat(String(k[1])),
      high: parseFloat(String(k[2])),
      low: parseFloat(String(k[3])),
      close: parseFloat(String(k[4])),
      volume: parseFloat(String(k[5])),
    }));
    res.json(candles);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}

/** Proxy Binance 24h ticker stats for market overview. */
export async function getTicker(req: Request, res: Response): Promise<void> {
  const symbol = routeSymbol(req);
  if (!symbol) {
    res.status(400).json({ error: "symbol required" });
    return;
  }

  const pair = symbol.endsWith("USDT") ? symbol : `${symbol}USDT`;
  const url = `https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=${pair}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.status(response.status).json({ error: "binance fetch failed" });
      return;
    }
    const data = (await response.json()) as BinanceTicker24hr;
    res.json({
      symbol: data.symbol,
      lastPrice: parseFloat(data.lastPrice),
      priceChange: parseFloat(data.priceChange),
      priceChangePercent: parseFloat(data.priceChangePercent),
      highPrice: parseFloat(data.highPrice),
      lowPrice: parseFloat(data.lowPrice),
      volume: parseFloat(data.volume),
      quoteVolume: parseFloat(data.quoteVolume),
    });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}

/** Return order book depth by market slug (public). */
export async function getDepthBySymbol(
  req: Request,
  res: Response,
): Promise<void> {
  const symbol = routeSymbol(req);
  if (!symbol) {
    res.status(400).json({ error: "symbol required" });
    return;
  }

  const market = await prisma.markets.findFirst({
    where: { marketSlug: symbol },
  });
  if (!market) {
    res.status(404).json({ error: "market not found" });
    return;
  }

  const engineResponse = await sendToEngine("get_depth", {
    marketId: market.id,
  });
  res
    .status(engineResponse.ok ? 200 : 400)
    .json(
      engineResponse.ok ? engineResponse.data : { error: engineResponse.error },
    );
}

/** Return mark price by market slug (public). */
export async function getMarkPriceBySymbol(
  req: Request,
  res: Response,
): Promise<void> {
  const symbol = routeSymbol(req);
  if (!symbol) {
    res.status(400).json({ error: "symbol required" });
    return;
  }

  const market = await prisma.markets.findFirst({
    where: { marketSlug: symbol },
  });
  if (!market) {
    res.status(404).json({ error: "market not found" });
    return;
  }

  const engineResponse = await sendToEngine("get_mark_price", {
    marketId: market.id,
  });
  res
    .status(engineResponse.ok ? 200 : 400)
    .json(
      engineResponse.ok ? engineResponse.data : { error: engineResponse.error },
    );
}
