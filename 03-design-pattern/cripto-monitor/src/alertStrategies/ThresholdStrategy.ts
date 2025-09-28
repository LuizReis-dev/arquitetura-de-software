import { AlertStrategy } from './AlertStrategy';
import { Config } from '../Config';

export class ThresholdAlertStrategy implements AlertStrategy {
  private buy: number;
  private sell: number;

  constructor() {
    const config = Config.getInstance().data.threshold;
    this.buy = config.compra;
    this.sell = config.venda;
  }

  checkAlert(currentPrice: number, _priceHistory: number[]): string | null {
    if (currentPrice <= this.buy) {
      return `Alert: Price dropped to $${currentPrice} (<= $${this.buy})!`;
    }
    if (currentPrice >= this.sell) {
      return `Alert: Price rose to $${currentPrice} (>= $${this.sell})!`;
    }
    return null;
  }
}
