import { PostHead } from '@/app/posts/ui/index';
import { Markdown } from '@/app/posts/ui/Markdown/index';
import { getPostData, Navbar } from '@/app/shared/index';
import Image from 'next/image';

type TProps = {
  params: Promise<{
    id: string;
  }>;
};

const PostPage = async ({ params }: TProps) => {
  const id = (await params).id;

  if (!id) {
    return <p>유효하지 않은 경로입니다.</p>;
  }

  const post = await getPostData(id);

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

  console.log(post.content);

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
          className="object-cover pb-8"
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
