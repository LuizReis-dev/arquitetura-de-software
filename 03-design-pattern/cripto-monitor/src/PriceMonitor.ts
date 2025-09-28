import axios from 'axios';
import { AlertStrategy } from './alertStrategies/AlertStrategy';


export class PriceMonitor {
  private static instance: PriceMonitor;
  private priceHistory: number[] = [];
  private maxHistory: number = 10;
  private strategy!: AlertStrategy;
  private coin!: string;

  private constructor() {}

  public static getInstance(): PriceMonitor {
    if (!PriceMonitor.instance) {
      PriceMonitor.instance = new PriceMonitor();
    }
    return PriceMonitor.instance;
  }

  public configure(coin: string, strategy: AlertStrategy, maxHistory: number = 10) {
    this.coin = coin;
    this.strategy = strategy;
    this.maxHistory = maxHistory;
    this.priceHistory = [];
  }

  async fetchCurrentPrice(): Promise<number> {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${this.coin}&vs_currencies=usd`;
    const response = await axios.get(url);
    return response.data[this.coin].usd;
  }

  async checkPrice(): Promise<string | null> {
    const price = await this.fetchCurrentPrice();
    this.priceHistory.push(price);
    if (this.priceHistory.length > this.maxHistory) {
      this.priceHistory.shift();
    }
    return this.strategy.checkAlert(price, this.priceHistory);
  }

  setStrategy(strategy: AlertStrategy) {
    this.strategy = strategy;
  }

  setCoin(coin: string) {
    this.coin = coin;
    this.priceHistory = [];
  }
}
