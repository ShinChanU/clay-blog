import { getSortedPostsData } from '@/shared/index';
import { BlogPostList } from './blog/_components/BlogPostList';

export default async function HomePage() {
  const posts = await getSortedPostsData();
  const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort();

  return (
    <>
      <header className="pb-16 pt-4">
        <p className="animate-fade-up stagger-1 mb-4 text-sm tracking-widest text-muted-foreground">
          CLAY.LOG
        </p>
        <h1 className="animate-fade-up stagger-2 mb-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          기술 선택의 &lsquo;왜&rsquo;를 기록합니다
        </h1>
        <p className="animate-fade-up stagger-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          비효율을 시스템으로 바꾸는 프론트엔드 개발자 Clay의 기술 블로그입니다.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="py-20 text-muted-foreground">아직 작성된 글이 없습니다.</p>
      ) : (
        <BlogPostList allTags={allTags} posts={posts} />
      )}
    </>
  );
}
