import { getPostData } from '@/shared/index';
import { PostDetail } from '@/widgets/index';
import { Metadata } from 'next';

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
      description: '프론트엔드 개발자 Clay의 기술 블로그입니다.',
      title: 'clay.log',
    };
  }

  const title = post.title;

  return {
    description: post.description, // 게시글 설명
    openGraph: {
      description: post.description,
      images: {
        alt: title,
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

  return <PostDetail post={post} />;
};

export default PostPage;
