import { fetchProducts, fetchUsers } from '@/libs/fetchProducts';
import { Suspense } from 'react';
import { Users } from '@/app/use-component/users';
import { Products } from '@/app/use-component/products';

export const dynamic = 'force-dynamic';

export default function Page() {
  const productsPromise = fetchProducts();
  const usersPromise = fetchUsers();

  return (
    <div>
      <h1>Use</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products productsPromise={productsPromise} />
        <Users usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
}
