import { getSortedPostsData } from '@/shared/index';
import { PostHome } from '@/widgets/index';

export default async function Page() {
  const posts = await getSortedPostsData();

  return <PostHome posts={posts} />;
}
