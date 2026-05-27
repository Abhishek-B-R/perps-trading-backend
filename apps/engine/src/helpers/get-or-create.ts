import {
  ORDERBOOKS,
  USERS,
  type Orderbook,
  type User,
} from "../store/exchange-store";

export function getOrCreateUser(userId: string): User {
  let userData = USERS.get(userId);
  if (!userData) {
    const newuser: User = {
      // create user if doesnt exist
      collateral: { available: 0, locked: 0 },
      positions: [],
    };
    USERS.set(userId, newuser);
    userData = newuser;
  }

  return userData;
}

export function getOrCreateOrderbook(market: string): Orderbook {
  if (!ORDERBOOKS.has(market)) {
    ORDERBOOKS.set(market, {
      bids: new Map(),
      asks: new Map(),
      bidPrices: [],
      askPrices: [],
      lastTradedPrice: 0,
      indexPrice: 0,
    });
  }

  return ORDERBOOKS.get(market)!;
}
