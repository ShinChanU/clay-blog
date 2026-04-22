import { GiscusComment, Markdown, PostHead } from '@/entities/index';
import { getPostData, getSortedPostsData, type TPostData } from '@/shared/index';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  const imageUrl = post.mainImageSrc
    ? `https://claychanwoo.com/content/${post.mainImageSrc}`
    : 'https://claychanwoo.com/open-graph-default.webp';

  return {
    alternates: { canonical: `https://claychanwoo.com/blog/${slug}` },
    description: post.description,
    keywords: [...post.tags, '기술 블로그', '프론트엔드', '개발'],
    openGraph: {
      description: post.description,
      images: { alt: post.title, height: 630, url: imageUrl, width: 1200 },
      title: post.title,
      type: 'article',
      url: `https://claychanwoo.com/blog/${slug}`,
    },
    title: post.title,
    twitter: {
      card: 'summary_large_image',
      description: post.description,
      images: [imageUrl],
      title: post.title,
    },
  };
}

function getRelatedPosts(currentPost: TPostData, allPosts: TPostData[], limit = 3): TPostData[] {
  return allPosts
    .filter((p) => p.id !== currentPost.id)
    .map((p) => ({
      ...p,
      score: p.tags.filter((tag) => currentPost.tags.includes(tag)).length,
    }))
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score || (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPostData(slug), getSortedPostsData()]);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post, allPosts);

  return (
    <>
      <header className="mx-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <PostHead post={post} />
        </div>
      </header>
      <section className="container relative mx-auto flex-1 px-4 pb-8 pt-4">
        <div className="mb-4 break-keep rounded-lg bg-primary-foreground px-4 py-6 text-lg font-bold text-primary">
          {post.description}
        </div>
        {post.mainImageSrc && (
          <Image
            alt="thumbnail"
            className="h-[300px] object-contain pb-4"
            height={0}
            priority
            src={`/content/${post.mainImageSrc}`}
            width={1200}
          />
        )}
        <Markdown content={post.content} />
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
        <GiscusComment />
      </section>
    </>
  );
}

function RelatedPosts({ posts }: { posts: TPostData[] }) {
  return (
    <aside className="mt-16 border-t border-border pt-10">
      <h2 className="mb-6 text-xl font-bold">관련 글</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link className="group no-underline" href={`/blog/${post.id}`} key={post.id}>
            <article className="flex items-baseline justify-between gap-4 py-2 transition-colors">
              <h3 className="text-sm font-medium transition-colors group-hover:text-primary sm:text-base">
                {post.title}
              </h3>
              <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                {new Date(post.date).toLocaleDateString('ko-KR', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </article>
          </Link>
        ))}
      </div>
    </aside>
  );
}
