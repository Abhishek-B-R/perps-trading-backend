// Production: relative URLs → same origin (nginx proxies /markets etc. to backend).
// Dev: localhost backend. Override with NEXT_PUBLIC_API_URL if needed.
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  (process.env.NODE_ENV === "production" ? "" : "http://localhost:3000");

export interface Market {
  id: string;
  marketSlug: string;
  imageUrl: string;
}

export interface Candle {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Ticker {
  symbol: string;
  lastPrice: number;
  priceChange: number;
  priceChangePercent: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
  quoteVolume: number;
}

export interface DepthLevel {
  price: number;
  qty: number;
}

export interface Depth {
  symbol: string;
  bids: DepthLevel[];
  asks: DepthLevel[];
}

export interface Equity {
  available: number;
  locked: number;
  total: number;
}

export interface Position {
  market: string;
  type: "long" | "short";
  qty: number;
  margin: number;
  liquidationPrice: number;
  averagePrice: number;
  createdAt: number;
}

export interface Order {
  id: string;
  type: "LONG" | "SHORT";
  orderType: "MARKET" | "LIMIT";
  price: string;
  qty: string;
  equity: string;
  status: string;
  marketId: string;
  createdAt: string;
}

export interface Fill {
  id: string;
  price: string;
  qty: string;
  marketId: string;
  createdAt: string;
}

async function apiFetch<T>(
  path: string,
  options: RequestInit & { token?: string } = {},
): Promise<T> {
  const { token, ...init } = options;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init.headers as Record<string, string>),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, { ...init, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "request failed");
  return data as T;
}

export const api = {
  signup: (username: string, password: string) =>
    apiFetch<{ token: string }>("/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),

  signin: (username: string, password: string) =>
    apiFetch<{ token: string }>("/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),

  markets: () => apiFetch<Market[]>("/markets"),

  candles: (symbol: string, interval = "15m", limit = 300) =>
    apiFetch<Candle[]>(
      `/markets/${symbol}/candles?interval=${interval}&limit=${limit}`,
    ),

  ticker: (symbol: string) => apiFetch<Ticker>(`/markets/${symbol}/ticker`),

  depth: (symbol: string) => apiFetch<Depth>(`/markets/${symbol}/depth`),

  markPrice: (symbol: string) =>
    apiFetch<{ markPrice: number; lastTradedPrice: number }>(
      `/markets/${symbol}/price`,
    ),

  equity: (token: string) =>
    apiFetch<Equity>("/equity/available", { token }),

  onramp: (token: string, price: number) =>
    apiFetch("/onramp", {
      method: "POST",
      token,
      body: JSON.stringify({ price }),
    }),

  placeOrder: (
    token: string,
    body: {
      orderType: "limit" | "market";
      positionType: "long" | "short";
      equity: number;
      market: string;
      qty: number;
      price?: number;
      slippage?: number;
    },
  ) =>
    apiFetch("/order", { method: "POST", token, body: JSON.stringify(body) }),

  cancelOrder: (token: string, orderId: string) =>
    apiFetch(`/order/${orderId}`, { method: "DELETE", token }),

  openPositions: (token: string, marketId: string) =>
    apiFetch<{ positions: Position[] }>(`/positions/open/${marketId}`, {
      token,
    }),

  openOrders: (token: string, marketId: string) =>
    apiFetch<Order[]>(`/orders/open/${marketId}`, { token }),

  fills: (token: string) => apiFetch<Fill[]>("/fills", { token }),
};
