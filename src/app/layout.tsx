import type { Metadata } from 'next';

import { Footer, HeadLinks, Navbar } from '@/shared/index';
import '@/shared/styles/globals.css';
import '@/shared/styles/reset.css';
import ProgressBar from '@/shared/ui/ProgressBar';
import 'highlight.js/styles/github-dark.css';
import { GoogleAnalytics } from '@next/third-parties/google';
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
  metadataBase: new URL('https://claychanwoo.com'),
  openGraph: {
    description: '프론트엔드 개발자 Clay의 기술 블로그입니다.',
    images: {
      alt: 'clay.log',
      height: 630,
      url: 'https://claychanwoo.com/open-graph-default.webp',
      width: 1200,
    },
    title: 'clay.log',
    type: 'website',
    url: 'https://claychanwoo.com',
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    index: true,
  },
  title: 'clay.log',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="ko">
      <HeadLinks />
      <body className={`font-sans antialiased`}>
        <ProgressBar />
        <Navbar />
        <main className="container mx-auto flex min-h-screen flex-1 flex-col bg-background px-4 py-8">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
      </body>
    </html>
  );
}
