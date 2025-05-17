'use client';

import { User } from '@/libs/types/types';

export function Users({ users }: { users: User[] }) {
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
