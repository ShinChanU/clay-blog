import { PostData } from '@/app/shared/utils/posts';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function PostCard({ post }: { post: PostData }) {
  return (
    <Link
      className="overflow-hidden rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
      href={`/posts/${post.id}`}
    >
      <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
      <p className="mb-4 text-sm text-gray-500">{dayjs(post.date).format('YY.MM.DD HH:mm')}</p>
      <p className="mb-4 text-gray-600">{post.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-500" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
