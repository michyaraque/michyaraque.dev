import fs, { readdirSync } from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkCodeTitles from './remark-code-title'
import readingTime from 'reading-time';
import { cleanSlug } from 'utils';

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

export const getFileBySlug = async (slug: string, securePath: string) => {
  const mdxSource = fs.readFileSync(path.join(root, `data/${securePath}`, `${slug}.mdx`), 'utf8');
  const { data, content } = await matter(mdxSource);
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

/**
 * It takes a path to a directory, gets all the files in that directory, and then returns an array of
 * objects that contain the metadata from each file
 * @param {string} securePath - This is the path to the directory where the files are located.
 * @returns An array of objects with the following properties:
 *   - slug
 *   - title
 *   - publishedAt
 *   - summary
 */
export const getAllFilesMetadata = (securePath: string) => {
  const files = getFiles(securePath);

  return files.reduce((allPosts: Array<Record<string, string>>, postSlug: string) => {
    const mdxSource = fs.readFileSync(path.join(root, `data/${securePath}`, postSlug), 'utf8');
    const { data } = matter(mdxSource);
    return [
      { ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts
    ]
  }, [])
};

/**
 * It returns an array of objects that contain the real path and the beauty path name of each course
 * @returns An array of objects with two keys: path_name and beauty_path_name.
 */
export const getCoursesPath = () => {
  const coursePaths = fs.readdirSync(path.join(root, `data/courses`), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .reduce((arr: Array<Record<string, string>>, path: fs.Dirent) => {
      return [
        {
          path_name: path.name,
          beauty_path_name: cleanSlug(path.name)
        }, ...arr];
    }, [])

  return coursePaths;
}

export const getAllFilesMetadataByCourseModules = (securePath: string) => {
  const files = getFiles(securePath);

  return files.reduce((allPosts: Array<Record<string, string>>, postSlug: string) => {
    const mdxSource = fs.readFileSync(path.join(root, `data/${securePath}`, postSlug), 'utf8');
    const { data } = matter(mdxSource);
    return [
      { ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts
    ]
  }, [])
};

export const getCourseFiles = (securePath: string) => {
  return fs.readdirSync(path.join(root, `data/${securePath}`))
}
