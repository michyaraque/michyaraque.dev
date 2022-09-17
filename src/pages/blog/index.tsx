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

      <h1 className="text-4xl font-bold">
        Blog
      </h1>

      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaSearch />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 hover:bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>

      <div className="mt-4 grid">
        <h3 className="mb-4">Todos los posts</h3>
        {filteredBlogPosts.map(({ title, slug, summary }: {[key: string]: string}, index: number) => (
          <div key={index} className="hover:bg-slate-100 hover:rounded-md p-4">
            <Link href={`/blog/${slug}`}>
              <a className="relative">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-slate-500 text-lg">{summary}</p>
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

  const posts = getAllFilesMetadata("blog");

  return {
    props: { posts }
  }
}
