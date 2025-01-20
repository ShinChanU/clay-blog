import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link className="text-2xl font-bold text-white no-underline" href={'/'}>
          clay.log
        </Link>
      </div>
    </header>
  );
}
