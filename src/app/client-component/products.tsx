'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/libs/types/types';
import { fetchProducts } from '@/libs/fetchProducts';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const result = await fetchProducts();
      setProducts(result);
    })();
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {products.map((product) => (
        <li key={product.id} className="border border-green-400">
          <strong>{product.title}</strong>
        </li>
      ))}
    </ul>
  );
}
