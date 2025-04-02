import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { PostMetaData } from '@/types/PostData';
import { PostData } from '@/types/PostData';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getSortedPostsData(): PostMetaData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const contentHtml = marked(matterResult.content) as string;;

  return {
    slug,
    contentHtml,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
  };
}


