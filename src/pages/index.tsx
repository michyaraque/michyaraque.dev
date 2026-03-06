import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import { Metadata, Wrapper } from 'components/common/Layout';
import { PostCard } from 'components/ui/Posts';
import { SnippetCard } from 'components/ui/Snippets';
import LanguageLogo from 'components/LanguageLogo';
import { getAllFilesMetadata } from '../../lib/mdx';

type InitialProps = {
  posts: Record<string, any>
  snippets: Record<string, any>
}

function Index({ posts, snippets }: InitialProps) {
  return (
    <Wrapper
      prose={false}
      meta={
        <Metadata
          title=" "
          titleTemplate='Michael Araque - Arquitecto de ideas y futuro difusor de conocimiento'
          description="Desarrollador Blockend Full Stack, and blockchain enthusiast."
        />
      }
    >
      <div className="relative min-h-[85vh] flex flex-col justify-center items-start pt-16 pb-16">
        {/* Background Decorative */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10 mask-[linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
        <div className="absolute top-[10%] -right-20 w-160 h-160 bg-brand-primary-100 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse dark:opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[20%] -left-32 w-120 h-120 bg-zinc-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none dark:bg-zinc-700"></div>

        <div className="flex flex-col gap-6 fade-in-up w-full">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-brand-primary-100"></div>
            <p className="font-mono text-brand-primary-100 uppercase tracking-widest text-xs md:text-sm font-bold">
              <span className="opacity-50">sys.init() // </span>
              Welcome to my node
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.85] text-zinc-900 dark:text-white font-display">
            Michael<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-800 to-zinc-400 dark:from-white dark:to-zinc-500">Araque</span>
            <span className="text-brand-primary-100">.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:items-end mt-4">
            <p className="text-lg md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed fade-in-up delay-100 font-mono">
              I architect <strong className="font-semibold text-zinc-900 dark:text-white">Blockend systems</strong> and build immersive digital experiences. Exploring the bleeding edge of Web3, backend engineering, and brutalist frontend aesthetics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-8 fade-in-up delay-200">
            <Link href="/blog" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-mono font-bold uppercase tracking-widest text-sm transition-all hover:bg-brand-primary-100 hover:text-zinc-900 dark:hover:bg-brand-primary-100 dark:hover:text-zinc-900 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Read Output <BsArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>

            <div className="flex items-center gap-4 px-6 py-4 border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md">
               <span className="font-mono text-xs uppercase text-zinc-500 font-bold tracking-widest">Stack.core</span>
               <div className="flex gap-4 items-center">
                 <LanguageLogo language="nodejs" className="w-5 h-5"/>
                 <LanguageLogo language="typescript" className="w-5 h-5"/>
                 <LanguageLogo language="solidity" className="w-5 h-5"/>
                 <LanguageLogo language="php" className="w-5 h-5"/>
                 <LanguageLogo language="reactjs" className="w-5 h-5"/>
                 <LanguageLogo language="nextjs" className="w-5 h-5"/>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <section className="py-24 border-t-2 border-zinc-200 dark:border-zinc-800 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
              Featured Logs
            </h2>
            <p className="mt-2 font-mono text-sm text-zinc-500 uppercase tracking-widest">Top executed entries</p>
          </div>
          <Link href="/blog" className="hidden md:flex font-mono font-bold text-sm uppercase tracking-widest text-zinc-900 dark:text-white hover:text-brand-primary-100 transition-colors items-center gap-2 border-b-2 border-transparent hover:border-brand-primary-100 pb-1">
            View All Logs <BsArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map(({ title, slug }: {title: string, slug: string}, index: number) => (
            <PostCard key={index} title={title} slug={slug} index={index} />
          ))}
        </div>
        <Link href="/blog" className="md:hidden flex mt-12 font-mono font-bold text-sm uppercase tracking-widest text-brand-primary-100 hover:text-zinc-900 dark:hover:text-white transition-colors items-center gap-2 w-max">
          View All Logs <BsArrowRight />
        </Link>
      </section>

      {/* Featured Snippets */}
      <section className="py-24 border-t-2 border-zinc-200 dark:border-zinc-800 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
           <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
              Code Fragments
            </h2>
            <p className="mt-2 font-mono text-sm text-zinc-500 uppercase tracking-widest">Reusable execution blocks</p>
          </div>
          <Link href="/snippets" className="hidden md:flex font-mono font-bold text-sm uppercase tracking-widest text-zinc-900 dark:text-white hover:text-brand-primary-100 transition-colors items-center gap-2 border-b-2 border-transparent hover:border-brand-primary-100 pb-1">
            All Fragments <BsArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snippets.slice(0, 3).map(({ title, slug, icon }: {[key:string]: string}, index: number) => (
            <SnippetCard key={index} title={title} slug={slug} icon={icon} index={index} />
          ))}
        </div>
        <Link href="/snippets" className="md:hidden flex mt-12 font-mono font-bold text-sm uppercase tracking-widest text-brand-primary-100 hover:text-zinc-900 dark:hover:text-white transition-colors items-center gap-2 w-max">
          All Fragments <BsArrowRight />
        </Link>
      </section>
    </Wrapper>
  );
}

export default Index;

export async function getStaticProps() {
  const posts = getAllFilesMetadata("blog").sort(function (a, b) {
    var dateA = new Date(a.publishedAt).getTime();
    var dateB = new Date(b.publishedAt).getTime();
    return dateA > dateB ? -1 : 1;
  });

  const snippets = getAllFilesMetadata("snippets").sort((a, b): number => {
    return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
  });

  return {
    props: { posts, snippets }
  }
}
