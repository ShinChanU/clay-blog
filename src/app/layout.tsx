import type { Metadata } from 'next';

import { Footer, Navbar } from '@/shared/index';
import '@/shared/styles/globals.css';
import '@/shared/styles/reset.css';
import ProgressBar from '@/shared/ui/ProgressBar';
import 'highlight.js/styles/github-dark.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Karla, Noto_Sans_KR, Young_Serif } from 'next/font/google';

const youngSerif = Young_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-sans',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-kr',
  weight: ['400', '700', '900'],
});

const THEME_SCRIPT = `
(function(){
  var t=localStorage.getItem('theme');
  var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches);
  if(d)document.documentElement.classList.add('dark');
})();
`;

export const metadata: Metadata = {
  authors: { name: '신찬우' },
  description: '비효율을 시스템으로 바꾸는 프론트엔드 개발자 Clay의 포트폴리오 & 기술 블로그',
  icons: {
    apple: '/apple-icon-180x180.png',
    icon: '/favicon.ico',
  },
  keywords: ['프론트엔드', '포트폴리오', '기술 블로그', 'clay', 'clay.log', '신찬우', 'frontend', 'React', 'Next.js'],
  manifest: '/manifest.json',
  alternates: {
    types: { 'application/rss+xml': 'https://claychanwoo.com/feed.xml' },
  },
  metadataBase: new URL('https://claychanwoo.com'),
  openGraph: {
    description: '비효율을 시스템으로 바꾸는 프론트엔드 개발자 Clay의 포트폴리오 & 기술 블로그',
    images: {
      alt: 'clay.log',
      height: 630,
      url: 'https://claychanwoo.com/open-graph-default.webp',
      width: 1200,
    },
    locale: 'ko_KR',
    siteName: 'clay.log',
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
  title: {
    default: 'clay.log',
    template: '%s | clay.log',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${youngSerif.variable} ${karla.variable} ${notoSansKR.variable}`} lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ProgressBar />
        <Navbar />
        <main className="container mx-auto flex w-full flex-1 flex-col px-4 py-8">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
      </body>
    </html>
  );
}
