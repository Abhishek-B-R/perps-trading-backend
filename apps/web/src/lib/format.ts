export function formatPrice(n: number, decimals = 2): string {
  if (n >= 1000)
    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  if (n >= 1) return n.toFixed(decimals);
  return n.toFixed(Math.min(6, decimals + 2));
}

export function formatQty(n: number): string {
  if (n >= 1) return n.toFixed(4);
  return n.toFixed(6);
}

export function formatUsd(n: number): string {
  return `$${formatPrice(n)}`;
}

export function pctChange(n: number): string {
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}
