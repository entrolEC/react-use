import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-sky-100 p-8">
      <h1 className="text-4xl font-bold">React Use</h1>
      <Link href="/client-component">1. Client Component</Link>
      <Link href="/async-component">2. Async Component</Link>
      <Link href="/use-component">3. Use Component</Link>
    </div>
  );
}
