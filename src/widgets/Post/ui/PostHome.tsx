import { PostCard } from '@/entities/index';
import { TPostData } from '@/shared/index';

type TProps = {
  posts: TPostData[];
};

export const PostHome = ({ posts }: TProps) => {
  return (
    <ul className="grid grid-cols-1 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};
