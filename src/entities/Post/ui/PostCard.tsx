import { PostCardLink } from '@/entities/Post/ui/PostCardLink';
import { type TPostData } from '@/shared/index';
import dayjs from 'dayjs';
import Image from 'next/image';

type TProps = {
  post: TPostData;
};

export const PostCard = ({ post }: TProps) => {
  return (
    <PostCardLink post={post}>
      <div className="overflow-hidden rounded-lg bg-muted p-6 text-card-foreground shadow-md transition hover:shadow-xl">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-sm text-secondary-foreground">{dayjs(post.date).format('YY.MM.DD')}</p>
        </div>
        <p className="mb-4 break-keep text-secondary-foreground">{post.description}</p>
        <Image
          alt="thumbnail"
          className="mb-4 h-[150px] object-contain lg:h-[300px]"
          height={0}
          src={post.mainImageSrc ? `/content/${post.mainImageSrc}` : ''}
          width={1200}
        />
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span className="rounded-lg bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </PostCardLink>
  );
};
