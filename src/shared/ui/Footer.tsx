import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-start gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} clay.log
        </p>
        <nav className="flex items-center gap-5">
          <Link
            className="text-sm no-underline transition-colors hover:text-foreground"
            href="https://github.com/ShinChanU"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="text-sm no-underline transition-colors hover:text-foreground"
            href="mailto:scw0310@naver.com"
          >
            Email
          </Link>
          <Link
            className="text-sm no-underline transition-colors hover:text-foreground"
            href="/feed.xml"
            rel="alternate"
            type="application/rss+xml"
          >
            RSS
          </Link>
        </nav>
      </div>
    </footer>
  );
};
