import { getSortedPostsData } from '@/app/shared/utils/posts';
import Link from 'next/link';

export default async function PostsPage() {
  const posts = await getSortedPostsData();

  return (
    <main>
      <h1>블로그 목록</h1>
      <ul>
        {posts.map(({ date, id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              {title} - <small>{date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
