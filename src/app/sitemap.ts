import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/content');

const HOST = 'https://blog.claychanwoo.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const postFiles = fs.readdirSync(postsDirectory);
  const filteredMarkdownFiles = postFiles.filter((name) => name.endsWith('.md')); // md 파일만 추출
  const postUrls = filteredMarkdownFiles.map((file) => {
    const id = file.replace(/\.md$/, '');
    return {
      changeFrequency: 'daily',
      lastModified: new Date(),
      priority: 0.8,
      url: `${HOST}/posts/${id}`,
    } satisfies MetadataRoute.Sitemap[number];
  });

  return [
    {
      lastModified: new Date(),
      url: HOST,
    },
    ...postUrls,
  ];
}
