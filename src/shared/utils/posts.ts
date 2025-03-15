import fs from 'fs/promises'; // 비동기 함수로 변경
import matter from 'gray-matter';
import path from 'path';

// 포스트 데이터 타입 정의
export type TPostData = {
  content: string;
  date: string;
  description: string;
  id: string;
  mainImageSrc?: string;
  tags: string[];
  title: string;
};

const postsDirectory = path.join(process.cwd(), '/public/content');

// 단일 포스트 데이터 가져오는 함수
export async function getPostData(id: string): Promise<null | TPostData> {
  try {
    const filePath = path.join(postsDirectory, `${id}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8'); // 비동기 readFile
    const { content, data } = matter(fileContents);

    // 날짜 유효성 검증 추가
    if (!isValidDate(data.date)) {
      throw new Error(`Invalid date format for post with id: ${id}`);
    }

    return {
      content,
      date: data.date as string,
      description: data.description as string,
      id,
      mainImageSrc: data.mainImageSrc as string,
      tags: data.tags as string[],
      title: data.title as string,
    };
  } catch (error) {
    console.error(`Failed to load post with id ${id}:`, error);
    return null;
  }
}

// 모든 포스트 데이터 가져오는 함수
export async function getSortedPostsData(): Promise<TPostData[]> {
  try {
    const fileNames = await fs.readdir(postsDirectory); // 비동기 readdir
    const filteredMarkdownFiles = fileNames.filter((name) => name.endsWith('.md')); // md 파일만 추출

    const posts = await Promise.all(
      filteredMarkdownFiles.map(async (fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(filePath, 'utf8'); // 비동기 readFile
        const { content, data } = matter(fileContents);

        if (!isValidDate(data.date)) {
          throw new Error(`Invalid date format in post: ${fileName}`);
        }

        return {
          content,
          date: data.date as string,
          description: data.description as string,
          id: fileName.replace(/\.md$/, ''), // 파일 이름을 id로 사용
          mainImageSrc: data.mainImageSrc as string,
          tags: data.tags as string[],
          title: data.title as string,
        };
      })
    );

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1)); // 날짜별 정렬
  } catch (error) {
    console.error('Failed to load posts:', error);
    return [];
  }
}

// 날짜 유효성 검증 함수
function isValidDate(date: unknown): boolean {
  return typeof date === 'string' && !isNaN(new Date(date).getTime());
}
