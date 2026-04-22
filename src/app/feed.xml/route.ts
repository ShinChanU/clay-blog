import { getSortedPostsData } from '@/shared/index';

const BASE_URL = 'https://claychanwoo.com';

export async function GET() {
  const posts = await getSortedPostsData();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.id}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.id}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>clay.log</title>
    <link>${BASE_URL}</link>
    <description>비효율을 시스템으로 바꾸는 프론트엔드 개발자 Clay의 기술 블로그</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
