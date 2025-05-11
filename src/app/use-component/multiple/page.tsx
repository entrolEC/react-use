import { fetchProducts, fetchUsers } from '@/libs/fetchProducts';
import { Suspense, use } from 'react';
import { Product, User } from '@/libs/types/types';

export const dynamic = 'force-dynamic';

export default function Page() {
  const productsPromise = fetchProducts();
  const usersPromise = fetchUsers();

  return (
    <div>
      <h1>Use</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products productsPromise={productsPromise} usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
}

function Products({
  productsPromise,
  usersPromise,
}: {
  productsPromise: Promise<Product[]>;
  usersPromise: Promise<User[]>;
}) {
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
      <Users usersPromise={usersPromise} />
    </div>
  );
}

function Users({ usersPromise }: { usersPromise: Promise<User[]> }) {
  const users = use(usersPromise);

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
