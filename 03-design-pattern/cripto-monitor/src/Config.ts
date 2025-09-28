import fs from 'fs';

export interface ThresholdConfig {
  compra: number;
  venda: number;
}

export interface VariationConfig {
  percentual: number;
  minutos: number;
}

export interface AppConfig {
  defaultCoin: string;
  threshold: ThresholdConfig;
  variation: VariationConfig;
  secundsToFetch?: number;
}

export class Config {
  private static instance: Config;
  public readonly data: AppConfig;

  private constructor() {
    const raw = fs.readFileSync('config.json', 'utf-8');
    this.data = JSON.parse(raw);
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}
