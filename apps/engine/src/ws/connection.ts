import WebSocket from "ws";
import { MARKET_PRICES, ORDERBOOKS } from "../store/exchange-store";
import LiquidationChecker from "../utils/liquidation-checker";

type BINANCE_RAW_DATA = {
  E: number; // timestamp
  s: string; // symbol
  p: string; // price
};

export default function LiveDataFetch() {
  const url = "wss://fstream.binance.com/market/ws";
  const connection = new WebSocket(url);

  connection.on("open", () => {
    connection.send(
      JSON.stringify({
        method: "SUBSCRIBE",
        // params: ["btcusdt@markPrice", "ethusdt@markPrice", "solusdt@markPrice"], // only subscribe to a few coins
        params: ["!markPrice@arr"], // to subscribe to all coins
        id: 1,
      }),
    );
  });

  // connection.on("message", (rawMessage) => { // process the subscribed only few coins
  //   const messageString = rawMessage.toString("utf-8");
  //   if (
  //     messageString ===
  //     JSON.stringify({
  //       result: null,
  //       id: 1,
  //     })
  //   ) {
  //     return;
  //   }

  //   const parsedData: BINANCE_RAW_DATA = JSON.parse(messageString);
  //   MARKET_PRICES.set(parsedData.s, parseFloat(parsedData.p));
  // });

  connection.on("message", (rawMessage) => {
    // process all coins
    const messageString = rawMessage.toString("utf-8");
    if (
      messageString ===
      JSON.stringify({
        result: null,
        id: 1,
      })
    ) {
      return;
    }

    const parsedData: BINANCE_RAW_DATA[] = JSON.parse(messageString);
    parsedData.map((data) => {
      const price = parseFloat(data.p);
      MARKET_PRICES.set(data.s, price);
      // Strip USDT suffix to get market slug for orderbook index price
      const slug = data.s.replace(/USDT$/i, "");
      LiquidationChecker({ market: data.s, marketPrice: price });
      const book = ORDERBOOKS.get(slug);
      if (book) book.indexPrice = price;
    });
  });

  connection.on("error", (error) => {
    console.error(`WebSocket error: ${error.message}`);
  });

  connection.on("close", () => {
    console.log("Disconnected from server");
  });
}
