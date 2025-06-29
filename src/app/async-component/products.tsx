'use client';

import { Product } from '@/libs/types/types';

export function Products({ products }: { products: Product[] }) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li key={product.id} className="border border-green-400">
            <strong>{product.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
