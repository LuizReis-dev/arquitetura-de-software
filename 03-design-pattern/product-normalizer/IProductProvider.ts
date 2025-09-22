import { Product } from './Product';

export interface IProductProvider {
  load(): Product[];
}
