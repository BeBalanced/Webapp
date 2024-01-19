export function formatCentsToDollars(cents: number): string {
  if (cents < 0) {
    return "Invalid input";
  }

  let dollars = Math.floor(cents / 100);
  let remainingCents = cents % 100;

  return `$${dollars}.${remainingCents.toString().padStart(2, "0")}`;
}
