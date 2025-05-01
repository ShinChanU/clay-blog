'use client';

import { type TPostData } from '@/shared/index';
import { sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';

type TProps = {
  children: React.ReactNode;
  post: TPostData;
};

export const PostCardLink = ({ children, post }: TProps) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      onClick={() =>
        sendGAEvent('event', 'post_click', {
          post_id: post.id,
          post_title: post.title,
        })
      }
      prefetch
    >
      {children}
    </Link>
  );
};
