import { fetchProducts } from '@/libs/fetchProducts';
import { Suspense, use } from 'react';

export default function Page() {
  return (
    <div>
      <h1>Use</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}

function Products() {
  const products = use(fetchProducts());

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
