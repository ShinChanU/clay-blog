import { PostHead } from '@/app/posts/ui/index';
import { Markdown } from '@/app/posts/ui/Markdown/index';
import { getPostData, Navbar } from '@/app/shared/index';
import { Metadata } from 'next';
import Image from 'next/image';

type TProps = {
  params: Promise<{
    id: string;
  }>;
};

//`generateMetadata` 추가 (params 기반으로 동적 메타데이터 생성)
export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostData(id);

  if (!post) {
    return {
      description: '프론트엔드 개발자 Clay의 기술 블로그입니다.ㅎㅎ',
      title: 'clay.log',
    };
  }

  const title = `clay.log | ${post.title}`;

  return {
    description: post.description, // 게시글 설명
    openGraph: {
      description: post.description,
      images: {
        alt: post.title,
        height: 630,
        url: post.mainImageSrc ? `/content/${post.mainImageSrc}` : '/open-graph-default.webp',
        width: 1200,
      },
      title: title,
    },
    title: title, // 게시글 제목
  };
}

const PostPage = async ({ params }: TProps) => {
  const id = (await params).id;

  if (!id) {
    return <p>유효하지 않은 경로입니다.</p>;
  }

  const post = await getPostData(id);

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <Navbar />
      <header className="mx-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <PostHead post={post} />
        </div>
      </header>
      <section className={`container relative mx-auto flex-1 px-4 pb-8 pt-4`}>
        <div className="mb-4 break-keep rounded-lg bg-primary-foreground px-4 py-6 text-lg font-bold text-primary">
          {post.description}
        </div>
        <Image
          alt="thumbnail"
          className="h-[300px] object-contain pb-4"
          height={0}
          src={post.mainImageSrc ? `/content/${post.mainImageSrc}` : ''}
          width={1200}
        />
        <Markdown content={post.content} />

        {/* TODO 목차 개발 */}
        <aside className="fixed right-[calc((100vw-64rem)/2-230px)] top-[64px] hidden w-[230px] 2xl:block"></aside>
      </section>
    </>
  );
};

export default PostPage;
