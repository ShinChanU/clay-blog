import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link className="text-2xl font-bold no-underline" href={'/'}>
          clay.log
        </Link>
      </div>
    </header>
  );
};
