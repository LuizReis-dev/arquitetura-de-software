import { IProductProvider } from './IProductProvider';
import { Product } from './Product';
import * as fs from 'fs';

export class JsonAdapter implements IProductProvider {
  private filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }
  load(): Product[] {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    const arr = JSON.parse(data);
    return arr.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price)
    }));
  }
}
