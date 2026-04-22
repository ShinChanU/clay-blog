import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: '프로젝트 포트폴리오를 준비 중입니다.',
  robots: { follow: true, index: false },
  title: 'Projects (준비중)',
};

export default function ProjectsComingSoonPage() {
  return (
    <section className="flex flex-1 flex-col justify-center text-center sm:text-left">
      <p className="mb-4 text-sm tracking-widest text-muted-foreground">PROJECTS</p>
      <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        곧, 프로젝트가 채워집니다
      </h1>
      <p className="mb-8 break-keep text-sm leading-relaxed text-muted-foreground">
        각 프로젝트의 문제 정의부터 기술 결정까지, 케이스 스터디로 정리하고 있습니다.
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
