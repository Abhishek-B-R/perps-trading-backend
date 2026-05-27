import type { User } from "../store/exchange-store";

export function LockFunds(userData: User, equity: number) {
  userData.collateral.available -= equity;
  userData.collateral.locked += equity;
}

export function UnlockFunds(userData: User, equity: number) {
  userData.collateral.locked -= equity;
  userData.collateral.available += equity;
}
