import React, { useEffect, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'

import { getFileBySlug, getFiles } from '@lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import MDXComponents from 'components/MDXComponents';
import { readingTimeToSpanish, slugToHex, styledDate } from 'utils';
import useUpdateViews from 'hooks/useUpdateViews';

export default function Post({ source, frontmatter }: any) {
  const { views } = useUpdateViews(frontmatter.slug)

  return (
    <Wrapper
      prose={true}
      meta={<Metadata title={frontmatter.title} description={frontmatter.summary || "Technical deep dive."} />}
    >
      <article className="py-20 flex flex-col gap-12">
        {/* Technical Header */}
        <header className="flex flex-col gap-8 pb-12 border-b-2 border-zinc-100 dark:border-zinc-800">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <p className="text-brand-primary font-mono uppercase tracking-widest text-xs font-bold">
                sys.log // {frontmatter.category || 'Entry'}
              </p>
           </div>

           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white font-display leading-[0.9]">
             {frontmatter.title}<span className="text-brand-primary">.</span>
           </h1>

           <div className="flex flex-wrap gap-8 items-center font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <div className="flex flex-col gap-1">
                 <span className="text-zinc-300 dark:text-zinc-600">Timestamp</span>
                 <span className="text-zinc-900 dark:text-zinc-300">{styledDate(frontmatter.publishedAt)}</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-zinc-300 dark:text-zinc-600">Execution_Time</span>
                 <span className="text-zinc-900 dark:text-zinc-300">{readingTimeToSpanish(frontmatter.readingTime.text)}</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-zinc-300 dark:text-zinc-600">Traffic_Metris</span>
                 <span className="text-zinc-900 dark:text-zinc-300">{views || '000'} UNITS</span>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                 <img src="/me.webp" alt="Michael Araque" className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 p-1 bg-white dark:bg-zinc-900" />
                 <div className="flex flex-col">
                    <span className="text-zinc-300 dark:text-zinc-600">Operator</span>
                    <span className="text-zinc-900 dark:text-zinc-300 uppercase">Michy Araque</span>
                 </div>
              </div>
           </div>
        </header>

        {/* Feature Image if exists */}
        {frontmatter.cover && (
          <div className="w-full h-80 md:h-[500px] border-2 border-zinc-200 dark:border-zinc-800 p-2 bg-white dark:bg-zinc-900">
            <div
              className="w-full h-full bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url(/images/${frontmatter.slug}/${frontmatter.cover})` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-none">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </article>
    </Wrapper>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const { source, frontmatter }: any = await getFileBySlug(params.slug, "blog")

  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        readingTime: frontmatter.readingTime,
        ...frontmatter
      }
    }
  }
}
