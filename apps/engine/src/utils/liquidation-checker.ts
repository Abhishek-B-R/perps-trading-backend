// this will be a infinite loop that keeps checking if a user hit liquidation limit, if yes liquidate him

import { USERS } from "../store/exchange-store";

export default function LiquidationChecker({
  market,
  marketPrice,
}: {
  market: string;
  marketPrice: number;
}) {
  USERS.forEach((user) => {
    const positionsCopy = [...user.positions];
    positionsCopy.forEach((x) => {
      if (
        (x.market === market &&
          x.type === "long" &&
          marketPrice <= x.liquidationPrice) ||
        (x.market === market &&
          x.type === "short" &&
          marketPrice >= x.liquidationPrice)
      ) {
        user.collateral.locked -= x.margin;
        const index = user.positions.findIndex((y) => y === x);
        user.positions.splice(index, 1);
      }
    });
  });
}
