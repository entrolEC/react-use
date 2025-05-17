import { Product, User } from '@/libs/types/types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (): Promise<Product[]> => {
  console.log('fetchProducts');
  await delay(1000);
  return fetch('https://fakestoreapi.com/products').then((response) => response.json());
};

export const fetchUsers = async (): Promise<User[]> => {
  console.log('fetchUsers');
  await delay(1000);
  return fetch('https://fakestoreapi.com/users').then((response) => response.json());
};
