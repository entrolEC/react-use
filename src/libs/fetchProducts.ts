import { Product, User } from '@/libs/types/types';

export const fetchProducts = (): Promise<Product[]> => {
  console.log('fetchProducts');
  return fetch('https://fakestoreapi.com/products').then((response) => response.json());
};

export const fetchUsers = (): Promise<User[]> => {
  console.log('fetchUsers');
  return fetch('https://fakestoreapi.com/users').then((response) => response.json());
};
