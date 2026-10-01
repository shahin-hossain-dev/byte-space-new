const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

export const formatPrice = (amount: number) => usd.format(amount);

/** "1" → "01", for numbered lists. */
export const padNumber = (n: number) => String(n).padStart(2, "0");

/** Shortens text to `max` characters at a word boundary, e.g. for meta descriptions. */
export function excerpt(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max - 1);
  return `${text.slice(0, cut > 0 ? cut : max - 1)}…`;
}
