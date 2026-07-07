import { ORDERBOOKS, USERS, type Position } from "../store/exchange-store";

function fundingRateDispersal() {
  const positions: Position[] = [];
  USERS.forEach(x => x.positions.forEach(y => positions.push(y)));

  positions.forEach((userPositions, userId) => {
    const orderBook = ORDERBOOKS.get(userPositions.market);
    if (!orderBook) {
      return;
    }

    const inflationRate = (orderBook.lastTradedPrice - orderBook.indexPrice / orderBook.indexPrice);
    if (userPositions.type === "long") {
      const notionalValue = userPositions.qty * orderBook.lastTradedPrice;
      userPositions.margin = userPositions.margin - (notionalValue * inflationRate);
    } else {
      const notionalValue = userPositions.qty * orderBook.lastTradedPrice;
      userPositions.margin = userPositions.margin + (notionalValue * inflationRate);
    }
  })
}


