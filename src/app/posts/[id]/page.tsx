import { getPostData, getSortedPostsData } from '@/shared/index';
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
  const imageUrl = post.mainImageSrc
    ? `https://claychanwoo.com/content/${post.mainImageSrc}`
    : 'https://claychanwoo.com/open-graph-default.webp';
  const canonicalUrl = `https://claychanwoo.com/posts/${id}`;

  return {
    alternates: {
      canonical: canonicalUrl,
    },
    description: post.description, // 게시글 설명
    keywords: [...post.tags, '기술 블로그', '프론트엔드', '개발'],
    openGraph: {
      description: post.description,
      images: {
        alt: title,
        height: 630,
        url: imageUrl,
        width: 1200,
      },
      title: title,
      type: 'article',
      url: canonicalUrl,
    },
    robots: {
      follow: true,
      googleBot: {
        follow: true,
        index: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      index: true,
    },
    title: title, // 게시글 제목
    twitter: {
      card: 'summary_large_image',
      description: post.description,
      images: [imageUrl],
      title: title,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map(({ id }) => ({ id }));
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
