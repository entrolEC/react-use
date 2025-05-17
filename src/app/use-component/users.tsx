'use client';

import { User } from '@/libs/types/types';
import { use } from 'react';

export function Users({ usersPromise }: { usersPromise: Promise<User[]> }) {
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
