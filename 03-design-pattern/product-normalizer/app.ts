import { CsvAdapter } from './CsvAdapter';
import { XmlAdapter } from './XmlAdapter';
import { JsonAdapter } from './JsonAdapter';
import { IProductProvider } from './IProductProvider.js';
import { Product } from './Product.js';

const args = process.argv.slice(2);
let input = '';
let format = '';
args.forEach(arg => {
  if (arg.startsWith('--input')) input = arg.split('=')[1] || args[args.indexOf(arg)+1];
  if (arg.startsWith('--format')) format = arg.split('=')[1] || args[args.indexOf(arg)+1];
});

const providers: Record<string, new (filePath: string) => IProductProvider> = {
  csv: CsvAdapter,
  xml: XmlAdapter,
  json: JsonAdapter
};

if (!input || !format || !providers[format]) {
  console.error('Uso: node app.js --input <arquivo> --format=<csv|xml|json>');
  process.exit(1);
}

const provider = new providers[format](input);
const products: Product[] = provider.load();
console.log(JSON.stringify(products, null, 2));
