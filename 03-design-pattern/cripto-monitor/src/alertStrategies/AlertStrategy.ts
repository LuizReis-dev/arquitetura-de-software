export interface AlertStrategy {
  checkAlert(currentPrice: number, priceHistory: number[]): string | null;
}