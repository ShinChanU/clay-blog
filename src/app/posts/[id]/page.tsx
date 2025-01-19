import { getPostData } from '@/app/shared/utils/posts';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

export async function generateStaticParams() {
  return [{ id: '123' }, { id: '456' }];
}

const PostPage = ({ params }: { params: { id: string } }) => {
  const post = getPostData(params.id);

  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>

      <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{post.content}</ReactMarkdown>
    </main>
  );
};

export default PostPage;
