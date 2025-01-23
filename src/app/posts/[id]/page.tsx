import { PostHead } from '@/app/posts/ui/index';
import { Markdown } from '@/app/posts/ui/Markdown/index';
import { getPostData, Navbar } from '@/app/shared/index';

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

  // TODO container 클래스 변경 max-width가 너무 넒음
  return (
    <>
      <Navbar />
      <header className="mx-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <PostHead post={post} />
        </div>
      </header>
      <section className={`container mx-auto flex-1 px-4 py-8`}>
        <Markdown content={post.content} />
      </section>
    </>
  );
};

export default PostPage;
