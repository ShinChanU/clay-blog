import { PostCard } from '@/app/posts/ui/index';
import { Footer, Navbar } from '@/app/shared/ui/index';
import { getSortedPostsData } from '@/app/shared/utils/posts';

export default async function PostsPage() {
  const posts = await getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <main className="container mx-auto flex-1 px-4 py-8">
        {/* <h1 className="mb-6 text-4xl font-bold">Welcome to My Blog</h1> */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </main>
      <Footer />
    </main>
  );
}
