'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { comingSoon: false, href: '/', label: 'Blog' },
  { comingSoon: true, href: '/projects', label: 'Projects' },
  { comingSoon: true, href: '/about', label: 'About' },
] as const;

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link className="font-display text-lg font-bold tracking-tight no-underline" href="/">
          clay.log
        </Link>
        <nav className="flex items-center">
          {NAV_ITEMS.map(({ comingSoon, href, label }) => {
            const isActive =
              href === '/'
                ? pathname === '/' || pathname.startsWith('/blog')
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                aria-label={comingSoon ? `${label} (준비중)` : label}
                className={`flex items-center gap-1.5 px-2 py-1.5 text-sm no-underline transition-colors sm:px-3 ${
                  isActive
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                href={href}
                key={href}
              >
                {label}
                {comingSoon && (
                  <>
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50 sm:hidden"
                    />
                    <span className="hidden rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-medium tracking-wider text-muted-foreground sm:inline">
                      준비중
                    </span>
                  </>
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
