import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center py-20">
      <p className="mb-4 text-7xl font-bold text-muted-foreground/20">404</p>
      <p className="mb-8 text-muted-foreground">페이지를 찾을 수 없습니다</p>
      <Link
        className="w-fit border-b-2 border-foreground pb-1 text-sm font-medium no-underline transition-colors hover:border-primary hover:text-primary"
        href="/"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
