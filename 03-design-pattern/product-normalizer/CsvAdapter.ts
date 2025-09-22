import { IProductProvider } from './IProductProvider';
import { Product } from './Product';
import * as fs from 'fs';

export class CsvAdapter implements IProductProvider {
  private filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }
  load(): Product[] {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    const lines = data.trim().split('\n');
    return lines.map(line => {
      const [id, name, price] = line.split(',');
      return { id, name, price: Number(price) };
    });
  }
}
