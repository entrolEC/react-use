import { Suspense } from 'react';
import { Products } from '@/app/async-component/products';
import { Users } from '@/app/async-component/users';
import { fetchProducts, fetchUsers } from '@/libs/fetchProducts';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const [products, users] = await Promise.all([fetchProducts(), fetchUsers()]);

  return (
    <div>
      <h1>Async Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products} />
        <Users users={users} />
      </Suspense>
    </div>
  );
}
