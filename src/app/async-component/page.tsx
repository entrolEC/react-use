import { Suspense } from 'react';
import { ProductsContainer } from '@/app/async-component/products-container';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <div>
      <h1>Async Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsContainer />
      </Suspense>
    </div>
  );
}
