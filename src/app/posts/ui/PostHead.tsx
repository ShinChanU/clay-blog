import { MarkdownComponents } from '@/app/posts/ui/Markdown';
import { type TPostData } from '@/app/shared/index';
import dayjs from 'dayjs';

type TProps = {
  post: TPostData;
};

export const PostHead = ({ post }: TProps) => {
  return (
    <div className="break-keep">
      <MarkdownComponents.h1 className="text-center">{post.title}</MarkdownComponents.h1>
      {/* <MarkdownComponents.p className="w-full text-end">{'by. clay chanwoo'}</MarkdownComponents.p> */}
      <MarkdownComponents.p className="w-full text-end text-muted-foreground">
        작성일: {dayjs(post.date).format('YY.MM.DD')}
      </MarkdownComponents.p>
    </div>
  );
};
