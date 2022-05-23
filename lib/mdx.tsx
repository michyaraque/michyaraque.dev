import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkCodeTitles from './remark-code-title'
import readingTime from 'reading-time';

const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
      rehypePrism
    ],
    remarkPlugins: [
      remarkCodeTitles
    ]
  },
};

const root = process.cwd();

export const getFiles = (securePath: string) => fs.readdirSync(path.join(root, `data/${securePath}`));

export const getFileBySlug = async ( slug: string, securePath: string ) => {
  const mdxSource = fs.readFileSync(path.join(root, `data/${securePath}`, `${slug}.mdx`), 'utf8');
  const {data, content} = await matter(mdxSource);
  const source = await serialize(content, options)

  return {
    source,
    frontmatter: {
      readingTime: readingTime(mdxSource),
      slug,
      ...data,
    }
  }
}

export const getAllFilesMetadata = (securePath: string) => {
  const files = getFiles(securePath);

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, `data/${securePath}`, postSlug), 'utf8');
    const { data } = matter(mdxSource);
    return [
      {...data, slug: postSlug.replace('.mdx', '')}, ...allPosts
    ]
  }, [] as Array<Record<string, string>>)
};
