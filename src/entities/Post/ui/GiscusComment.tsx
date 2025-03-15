'use client';

import { useEffect, useRef } from 'react';

const NEXT_PUBLIC_REPO_ID = process.env.NEXT_PUBLIC_REPO_ID as string;
const NEXT_PUBLIC_CATEGORY_ID = process.env.NEXT_PUBLIC_CATEGORY_ID as string;

export const GiscusComment = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://giscus.app/client.js';
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';

    scriptElement.setAttribute('data-repo', 'ShinChanU/clay-blog');
    scriptElement.setAttribute('data-repo-id', NEXT_PUBLIC_REPO_ID);
    scriptElement.setAttribute('data-category', 'Comments');
    scriptElement.setAttribute('data-category-id', NEXT_PUBLIC_CATEGORY_ID);
    scriptElement.setAttribute('data-mapping', 'og:title');
    scriptElement.setAttribute('data-strict', '0');
    scriptElement.setAttribute('data-reactions-enabled', '1');
    scriptElement.setAttribute('data-emit-metadata', '0');
    scriptElement.setAttribute('data-input-position', 'bottom');
    scriptElement.setAttribute('data-theme', 'light');
    scriptElement.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElement);
  }, []);

  return (
    <div className={'py-5'}>
      <section ref={ref} />
    </div>
  );
};
