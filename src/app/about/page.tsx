import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: 'About 페이지를 준비 중입니다.',
  robots: { follow: true, index: false },
  title: 'About (준비중)',
};

export default function AboutComingSoonPage() {
  return (
    <section className="flex flex-1 flex-col justify-center text-center sm:text-left">
      <p className="mb-4 text-sm tracking-widest text-muted-foreground">ABOUT</p>
      <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        준비 중입니다
      </h1>
      <p className="mb-8 break-keep text-sm leading-relaxed text-muted-foreground">
        프로필과 커리어 타임라인을 정리하고 있어요. 조금만 기다려 주세요.
      </p>
      <div className="flex justify-center gap-4 sm:justify-start">
        <Link
          className="border-b-2 border-foreground pb-1 text-sm font-medium no-underline transition-colors hover:border-primary hover:text-primary"
          href="/"
        >
          블로그로 가기
        </Link>
      </div>
    </section>
  );
}
