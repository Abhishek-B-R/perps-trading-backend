import { ORDERBOOKS } from "../store/exchange-store";

export function RemoveFromOrderbook({
  price,
  market,
  type,
}: {
  price: number;
  market: string;
  type: "bid" | "ask";
}) {
  // so there are no entries of bids/asks in this orderbook price point in this market
  const marketData = ORDERBOOKS.get(market);
  if (type === "ask") {
    if (!marketData) {
      throw new Error("no such book found for this market " + market);
    }
    marketData.asks.delete(price);
    marketData.askPrices = marketData.askPrices.filter((x) => x !== price);
  } else {
    if (!marketData || !marketData === undefined) {
      throw new Error("no such book found for this market " + market);
    }
    marketData.bids.delete(price);
    marketData.bidPrices = marketData.bidPrices.filter((x) => x !== price);
  }
}
