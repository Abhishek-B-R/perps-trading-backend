import {
  MARKET_PRICES,
  ORDERBOOKS,
  USERS,
  type DepthResponse,
  type Fill,
  type GetPositionInput,
  type PositionSide,
} from "../store/exchange-store";
import { resolveMarketSlug } from "../utils/market-to-id";
import { getOrCreateUser } from "./get-or-create";

/** Returns collateral breakdown for a user. */
export function GetEquity(data: { userId: string }) {
  const userInfo = getOrCreateUser(data.userId);
  const equity = userInfo.collateral.available + userInfo.collateral.locked;
  return {
    available: userInfo.collateral.available,
    locked: userInfo.collateral.locked,
    total: equity,
  };
}

/** Returns open positions filtered by market slug (resolved from DB UUID). */
export function GetOpenPositions(data: GetPositionInput) {
  const userInfo = getOrCreateUser(data.userId);
  const slug = resolveMarketSlug(data.marketId);
  return {
    positions: userInfo.positions.filter((x) => x.market === slug),
  };
}

export function GetClosedPositions(_data: GetPositionInput) {
  return { positions: [] };
}

/** Returns aggregated bid/ask depth for a market. */
export function GetDepth(data: { marketId: string }): DepthResponse {
  const slug = resolveMarketSlug(data.marketId);
  const book = ORDERBOOKS.get(slug);
  if (!book) {
    return { symbol: slug, bids: [], asks: [] };
  }

  const bids = book.bidPrices.map((price) => ({
    price,
    qty: book.bids.get(price)?.availableQty ?? 0,
  }));
  const asks = book.askPrices.map((price) => ({
    price,
    qty: book.asks.get(price)?.availableQty ?? 0,
  }));

  return { symbol: slug, bids, asks };
}

/** Returns live mark price from Binance feed. */
export function GetMarkPrice(data: { marketId: string }) {
  const slug = resolveMarketSlug(data.marketId);
  const symbol = slug.toUpperCase() + "USDT";
  const price = MARKET_PRICES.get(symbol);
  if (price === undefined) {
    throw new Error("no price feed for market");
  }
  const book = ORDERBOOKS.get(slug);
  return {
    symbol: slug,
    markPrice: price,
    lastTradedPrice: book?.lastTradedPrice ?? price,
    indexPrice: book?.indexPrice || price,
  };
}

/**
 * Updates in-memory positions after a fill.
 * Taker opens/increases in their direction; maker is the opposite side.
 */
export function updatePositionFromFill(
  userId: string,
  market: string,
  side: PositionSide,
  qty: number,
  price: number,
  margin: number,
) {
  const user = getOrCreateUser(userId);
  const leverage = (price * qty) / margin || 10;
  const liqFactor = 1 / leverage;
  const liquidationPrice =
    side === "long" ? price * (1 - liqFactor) : price * (1 + liqFactor);

  const idx = user.positions.findIndex((p) => p.market === market);
  const existing = user.positions[idx];

  if (!existing) {
    user.positions.push({
      market,
      type: side,
      qty,
      margin,
      liquidationPrice,
      averagePrice: price,
      createdAt: Date.now(),
    });
    return;
  }

  if (existing.type === side) {
    const totalQty = existing.qty + qty;
    existing.averagePrice =
      (existing.averagePrice * existing.qty + price * qty) / totalQty;
    existing.qty = totalQty;
    existing.margin += margin;
    existing.liquidationPrice = liquidationPrice;
  } else {
    existing.qty -= qty;
    if (existing.qty <= 0) {
      if (existing.qty < 0) {
        existing.type = side;
        existing.qty = Math.abs(existing.qty);
        existing.averagePrice = price;
        existing.margin = margin;
        existing.liquidationPrice = liquidationPrice;
      } else {
        user.positions.splice(idx, 1);
      }
    }
  }
}

/** Apply position updates for both maker and taker after a fill. */
export function applyFillPositions(
  fill: Fill,
  takerSide: PositionSide,
  takerMargin: number,
  makerSide: PositionSide,
  makerMargin: number,
) {
  updatePositionFromFill(
    fill.taker,
    fill.market,
    takerSide,
    fill.qty,
    fill.price,
    takerMargin,
  );
  updatePositionFromFill(
    fill.maker,
    fill.market,
    makerSide,
    fill.qty,
    fill.price,
    makerMargin,
  );
}
