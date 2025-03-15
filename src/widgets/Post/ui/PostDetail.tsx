import { GiscusComment, Markdown, PostHead } from '@/entities/index';
import { TPostData } from '@/shared/index';
import Image from 'next/image';

type TProps = {
  post: TPostData;
};

export const PostDetail = ({ post }: TProps) => {
  return (
    <>
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
        <GiscusComment />

        {/* TODO 목차 개발 */}
        <aside className="fixed right-[calc((100vw-64rem)/2-230px)] top-[64px] hidden w-[230px] 2xl:block"></aside>
      </section>
    </>
  );
};
