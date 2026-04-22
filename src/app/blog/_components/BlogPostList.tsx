'use client';

import type { TPostData } from '@/shared/index';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type Props = {
  allTags: string[];
  posts: TPostData[];
};

export function BlogPostList({ posts, allTags }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = useMemo(
    () => (activeTag ? posts.filter((post) => post.tags.includes(activeTag)) : posts),
    [posts, activeTag],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          className={`rounded-full px-3 py-1 text-xs transition-colors ${
            activeTag === null
              ? 'bg-foreground text-background'
              : 'bg-secondary text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTag(null)}
          type="button"
        >
          전체
        </button>
        {allTags.map((tag) => (
          <button
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              activeTag === tag
                ? 'bg-foreground text-background'
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="py-20 text-muted-foreground">해당 태그의 글이 없습니다.</p>
      ) : (
        <ul className="flex flex-col">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link className="group no-underline" href={`/blog/${post.id}`}>
                <article className="grid gap-2 border-b border-border py-8 first:border-t sm:grid-cols-[1fr_120px] sm:items-baseline sm:gap-6">
                  <div className="min-w-0">
                    <h2 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary sm:text-xl">
                      {post.title}
                    </h2>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span className="text-xs text-muted-foreground" key={tag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <time className="text-sm tabular-nums text-muted-foreground sm:text-right">
                    {dayjs(post.date).format('YYYY.MM.DD')}
                  </time>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
