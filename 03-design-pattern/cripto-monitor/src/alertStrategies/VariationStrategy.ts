import { AlertStrategy } from './AlertStrategy';
import { Config } from '../Config';

export class VariationAlertStrategy implements AlertStrategy {
  private percent: number;
  private minutes: number;

  constructor() {
    const config = Config.getInstance().data.variation;
    this.percent = config.percentual;
    this.minutes = config.minutos;
  }

  checkAlert(currentPrice: number, priceHistory: number[]): string | null {
    if (priceHistory.length === 0) return null;
    const oldest = priceHistory[0];
    const variation = ((currentPrice - oldest) / oldest) * 100;
    if (Math.abs(variation) >= this.percent) {
      return `Alert: Variation of ${variation.toFixed(2)}% in ${this.minutes} minutes!`;
    }
    return null;
  }
}
