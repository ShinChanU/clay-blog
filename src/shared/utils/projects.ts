import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export type TProjectData = {
  category: 'career' | 'side';
  content: string;
  date: string;
  description: string;
  duration: string;
  featured: boolean;
  highlight: string;
  id: string;
  links: {
    github?: string;
    live?: string;
  };
  role: string;
  tags: string[];
  thumbnail?: string;
  title: string;
};

const projectsDirectory = path.join(process.cwd(), 'public/content/projects');

export async function getProjectData(id: string): Promise<TProjectData | null> {
  try {
    const filePath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
      category: (data.category as 'career' | 'side') ?? 'side',
      content,
      date: data.date as string,
      description: data.description as string,
      duration: data.duration as string,
      featured: (data.featured as boolean) ?? false,
      highlight: (data.highlight as string) ?? '',
      id,
      links: (data.links as { github?: string; live?: string }) ?? {},
      role: data.role as string,
      tags: (data.tags as string[]) ?? [],
      thumbnail: data.thumbnail as string | undefined,
      title: data.title as string,
    };
  } catch (error) {
    console.error(`Failed to load project with id ${id}:`, error);
    return null;
  }
}

export async function getSortedProjectsData(): Promise<TProjectData[]> {
  try {
    await fs.access(projectsDirectory);
  } catch {
    return [];
  }

  try {
    const fileNames = await fs.readdir(projectsDirectory);
    const markdownFiles = fileNames.filter((name) => name.endsWith('.md'));

    const projects = await Promise.all(
      markdownFiles.map(async (fileName) => {
        const filePath = path.join(projectsDirectory, fileName);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { content, data } = matter(fileContents);

        return {
          category: (data.category as 'career' | 'side') ?? 'side',
          content,
          date: data.date as string,
          description: data.description as string,
          duration: data.duration as string,
          featured: (data.featured as boolean) ?? false,
          highlight: (data.highlight as string) ?? '',
          id: fileName.replace(/\.md$/, ''),
          links: (data.links as { github?: string; live?: string }) ?? {},
          role: data.role as string,
          tags: (data.tags as string[]) ?? [],
          thumbnail: data.thumbnail as string | undefined,
          title: data.title as string,
        };
      }),
    );

    return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Failed to load projects:', error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<TProjectData[]> {
  const projects = await getSortedProjectsData();
  return projects.filter((p) => p.featured);
}
