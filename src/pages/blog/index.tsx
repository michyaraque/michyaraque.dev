import { useState } from 'react';
import { Metadata, Wrapper } from 'components/common/Layout';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import { getAllFilesMetadata } from '../../../lib/mdx';
import ShowViews from 'components/ShowViews';

const Blog = ({ posts }: any) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Wrapper
      prose={false}
      meta={
        <Metadata
          title="Blog"
          description="Crear, innovar y compartir ideas"
        />
      }
    >
      <div className="py-12 flex flex-col gap-12 font-mono">
        <section className="flex flex-col gap-4">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary-100"></div>
              <p className="text-brand-primary-100 uppercase tracking-widest text-xs font-bold">sys.log // List</p>
           </div>
           <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
            Writing<span className="text-brand-primary-100 underline decoration-4">.</span>
          </h1>
          <p className="text-zinc-500 max-w-xl text-lg mt-4">
            A linear collection of thoughts, technical explorations, and architectural logs.
          </p>
        </section>

        <div className="relative group max-w-2xl">
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-brand-primary-100">
              <FaSearch />
           </div>
           <input
            className="w-full bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 py-4 pl-12 pr-4 outline-hidden focus:border-brand-primary-100 dark:focus:border-brand-primary-100 transition-all uppercase tracking-widest text-xs font-bold placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
            type="text"
            aria-label="Search blog entries"
            placeholder="Search entries..."
            onChange={(e) => setSearchValue(e.target.value)}
           />
        </div>

        <div className="flex flex-col border-t-2 border-zinc-200 dark:border-zinc-800 mt-8">
           {filteredBlogPosts.length > 0 ? (
             filteredBlogPosts.map(({ title, slug, summary }: { [key: string]: string }, index: number) => (
              <Link
                key={index}
                href={`/blog/${slug}`}
                aria-label={`Read log: ${title}`}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b-2 border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 px-4 transition-all -mx-4"
              >
                  <div className="flex flex-col gap-2 max-w-3xl">
                     <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-bold">
                        <span>ENTRY // {String(index + 1).padStart(2, '0')}</span>
                        <div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                        <ShowViews slug={slug} />
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-brand-primary-100 transition-colors">
                        {title}
                     </h2>
                     <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-2">
                        {summary}
                     </p>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-brand-primary group-hover:translate-x-2 transition-all">
                     Read Log <BsArrowRight />
                  </div>
              </Link>
            ))
           ) : (
             <div className="py-20 text-center text-zinc-500 uppercase tracking-widest text-sm italic">
                No entries found matching your query.
             </div>
           )}
        </div>
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
