import { IProductProvider } from './IProductProvider';
import { Product } from './Product';
import * as fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

export class XmlAdapter implements IProductProvider {
  private filePath: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }
  load(): Product[] {
  const data = fs.readFileSync(this.filePath, 'utf-8');
  const parser = new XMLParser();
  const obj = parser.parse(data);
    // Supondo estrutura <products><product><id>...</id><name>...</name><price>...</price></product>...</products>
    const arr = obj.products.product instanceof Array ? obj.products.product : [obj.products.product];
    return arr.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price)
    }));
  }
}
