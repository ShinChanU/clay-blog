import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

const baseUrl = 'https://claychanwoo.com';
const postsDirectory = path.join(process.cwd(), 'public/content');

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls = getMarkdownUrls(postsDirectory, '/blog');

  return [
    { changeFrequency: 'daily', lastModified: new Date(), priority: 1, url: baseUrl },
    ...postUrls,
  ];
}

function getMarkdownUrls(directory: string, prefix: string): MetadataRoute.Sitemap {
  try {
    const files = fs.readdirSync(directory);
    return files
      .filter((name) => name.endsWith('.md'))
      .map((file) => {
        const id = file.replace(/\.md$/, '');
        const stats = fs.statSync(path.join(directory, file));
        return {
          changeFrequency: 'weekly' as const,
          lastModified: stats.mtime,
          priority: 0.7,
          url: `${baseUrl}${prefix}/${id}`,
        };
      });
  } catch {
    return [];
  }
}
