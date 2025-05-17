import { fetchProducts } from '@/libs/fetchProducts';
import { Suspense } from 'react';
import { Products } from '@/app/use-component/products';

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
