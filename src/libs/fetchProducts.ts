import { Product } from '@/libs/types/types';

export const fetchProducts = (): Promise<Product[]> => {
  return fetch('https://fakestoreapi.com/products').then((response) => response.json());
};
