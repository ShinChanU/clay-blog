import { Navbar } from '@/app/shared/ui';
import { getPostData } from '@/app/shared/utils/posts';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const PostPage = async ({ params }: Props) => {
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
      <header className="mx-auto mb-8 w-full border-b border-gray-300 bg-blue-200 pb-8 pt-4">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="text-sm text-gray-600">{post.date}</p>
        </div>
      </header>
      <div className="container mx-auto flex-1 px-4 py-8">
        <ReactMarkdown rehypePlugins={[rehypeSanitize, rehypeHighlight]}>{post.content}</ReactMarkdown>
      </div>
    </>
  );
};

export default PostPage;
