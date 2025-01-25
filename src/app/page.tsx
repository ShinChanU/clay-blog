import { PostCard } from '@/app/posts/ui/index';
import { Footer, Navbar } from '@/app/shared/index';
import { getSortedPostsData } from '@/app/shared/utils/posts';

export default async function PostsPage() {
  const posts = await getSortedPostsData();

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        <ul className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
