import { fetchProducts } from '@/libs/fetchProducts';
import { Suspense, use } from 'react';
import { Product } from '@/libs/types/types';

export const dynamic = 'force-dynamic';

export default function Page() {
  const productsPromise = fetchProducts();

  return (
    <div>
      <h1>Use</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products productsPromise={productsPromise} />
      </Suspense>
    </div>
  );
}

function Products({ productsPromise }: { productsPromise: Promise<Product[]> }) {
  const products = use(productsPromise);

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
