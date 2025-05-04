import { fetchProducts } from '@/libs/fetchProducts';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <h1>Async Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}

async function Products() {
  const products = await fetchProducts();

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
