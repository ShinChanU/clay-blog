import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content');

console.log({ postsDirectory, t: process.cwd() });

// 포스트 데이터 타입 정의
export interface PostData {
  content: string;
  date: string;
  description: string;
  id: string;
  title: string;
}

// 단일 포스트 데이터 가져오는 함수
export function getPostData(id: string): null | PostData {
  // return;
  try {
    const filePath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
      content,
      date: data.date as string,
      description: data.description as string,
      id,
      title: data.title as string,
    };
  } catch {
    return null;
  }
}

// 모든 포스트 데이터 가져오는 함수
export function getSortedPostsData(): PostData[] {
  // return;

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content, data } = matter(fileContents);

      return {
        content,
        date: data.date as string,
        description: data.description as string,
        id: fileName.replace(/\.md$/, ''), // 파일 이름을 id로 사용
        title: data.title as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // 날짜별 정렬
}
