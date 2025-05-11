import { fetchProducts, fetchUsers } from '@/libs/fetchProducts';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

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

async function Products() {
  const products = await fetchProducts();

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li key={product.id} className="border border-green-400">
            <strong>{product.title}</strong>
          </li>
        ))}
      </ul>
      <Users />
    </div>
  );
}

async function Users() {
  const users = await fetchUsers();

  return (
    <ul className="flex flex-col gap-4">
      {users.map((user) => (
        <li key={user.id} className="border border-blue-400">
          <strong>{user.username}</strong>
        </li>
      ))}
    </ul>
  );
}
