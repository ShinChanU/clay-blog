import type { Metadata } from 'next';

import { Footer, Navbar } from '@/shared/index';
import '@/shared/styles/globals.css';
import '@/shared/styles/reset.css';
import ProgressBar from '@/shared/ui/ProgressBar';
import 'highlight.js/styles/github-dark.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  authors: { name: '신찬우' },
  description: '프론트엔드 개발자 Clay의 기술 블로그입니다.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['블로그', '기술 블로그', 'clay', 'clay.log', '신찬우', 'frontend', '프론트엔드'],
  openGraph: {
    description: '프론트엔드 개발자 Clay의 기술 블로그입니다.',
    images: {
      alt: 'clay.log',
      height: 630,
      url: 'https://www.blog.claychanwoo.com/open-graph-default.webp',
      width: 1200,
    },
    title: 'clay.log',
    type: 'website',
    url: 'https://www.blog.claychanwoo.com',
  },
  robots: { follow: true, index: true },
  title: 'clay.log',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="ko">
      <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
      <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
      <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
      <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
      <link href="/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
      <link href="/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
      <link href="/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
      <link href="/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
      <link href="/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
      <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
      <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/manifest.json" rel="manifest" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
      <meta content="#ffffff" name="theme-color" />
      <body className={`font-sans antialiased`}>
        <ProgressBar />
        <Navbar />
        <main className="container mx-auto flex min-h-screen flex-1 flex-col bg-background px-4 py-8">{children}</main>
        {/* <main className="flex min-h-screen flex-col bg-background">
          <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
        </main> */}
        <Footer />
      </body>
    </html>
  );
}
