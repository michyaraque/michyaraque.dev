import { useState } from 'react';
import { Metadata, Wrapper } from 'components/common/Layout';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

import { getAllFilesMetadata } from '../../../lib/mdx';
import ShowViews from 'components/ShowViews';

const Blog = ({ posts }: any) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Wrapper
      meta={
        <Metadata
          title="Blog"
          description="Crear, innovar y compartir ideas"
        />
      }
    >

      <h1 className="text-4xl font-bold dark:text-zinc-200 text-zinc-700">
        Blog
      </h1>

      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 dark:text-zinc-700">
          <FaSearch />
        </span>
        <input
          className="placeholder:italic placeholder:text-zinc-400 block bg-zinc-50 hover:bg-white w-full border border-zinc-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 sm:text-sm dark:bg-zinc-300 dark:placeholder:text-zinc-600"
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>

      <div className="mt-4 grid">
        <h3 className="mb-4 dark:text-zinc-200 text-zinc-700">Todos los posts</h3>
        {filteredBlogPosts.map(({ title, slug, summary }: { [key: string]: string }, index: number) => (
          <div key={index} className="hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:rounded-md p-4">
            <Link href={`/blog/${slug}`}>
              <a className="relative">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg dark:text-zinc-300 text-zinc-700">{summary}</p>
                <div className="flex items-center text-base top-0 right-4 absolute">

                  <ShowViews slug={slug} />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

    </Wrapper>
  );
};

export default Blog;

export async function getStaticProps() {

  const posts = getAllFilesMetadata("blog").sort(function (a, b) {
    var dateA = new Date(a.publishedAt).getTime();
    var dateB = new Date(b.publishedAt).getTime();
    return dateA > dateB ? -1 : 1;
  });

  return {
    props: { posts }
  }
}
