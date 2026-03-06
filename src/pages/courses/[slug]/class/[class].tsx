import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote'

import { getCoursesPath, getFileBySlug, getFiles } from '@lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import MDXComponents from 'components/MDXComponents';
import { cleanSlug, slugToHex } from 'utils';

export default function Post({ slug, source, frontmatter }: any) {

  useEffect(() => {
    (async () => {
      try {
        await fetch(`https://michyaraque.dev/easy-backend/views/${frontmatter.slug}`, {
          method: 'POST',
        });
      } catch (error) {
        console.log(error)
      }
    })();
  }, [frontmatter.slug]);

  return (
    <Wrapper
      prose={true}
      meta={<Metadata title={`${frontmatter.title} | ${cleanSlug(slug)}`} description={frontmatter.classSummary || "Clase técnica detallada."} />}
    >
      <div className="py-20 flex flex-col gap-12">
        {/* Navigation / Header Area */}
        <header className="flex flex-col gap-10">
          <nav className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Link href="/courses" className="text-zinc-400 hover:text-brand-primary transition-colors">Courses</Link>
            <span className="text-zinc-200 dark:text-zinc-800">//</span>
            <Link href={`/courses/${slug}`} className="text-zinc-400 hover:text-brand-primary transition-colors">{cleanSlug(slug)}</Link>
            <span className="text-zinc-200 dark:text-zinc-800">//</span>
            <span className="text-brand-primary">Module_Class</span>
          </nav>

          <div className="flex flex-col gap-6 border-b-2 border-zinc-100 dark:border-zinc-800 pb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <p className="text-brand-primary font-mono uppercase tracking-widest text-[10px] font-bold">
                reading.protocol // {frontmatter.classSummary || 'Class'}
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white font-display leading-[0.95]">
              {frontmatter.title}
            </h1>

            <div className="flex flex-wrap gap-8 items-center font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <div className="flex flex-col gap-1">
                 <span className="text-zinc-300 dark:text-zinc-600">Class_ID</span>
                 <span className="text-zinc-900 dark:text-zinc-300">#{frontmatter.slug?.substring(0, 8) || 'TECHNICAL'}</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-zinc-300 dark:text-zinc-600">Estimated_Time</span>
                 <span className="text-zinc-900 dark:text-zinc-300 text-brand-primary">{frontmatter.readingTime?.text || '5 MIN'} READ</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-zinc-300 dark:text-zinc-600">Knowledge_Domain</span>
                 <span className="text-zinc-900 dark:text-zinc-300 italic">{cleanSlug(slug)}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="max-w-none">
          {/* @ts-expect-error Types version mismatch */}
          <MDXRemote {...source} components={MDXComponents} />
        </main>
      </div>
    </Wrapper>
  );
}

export async function getStaticPaths() {

  const courses = getCoursesPath();

  const coursePaths = courses.map(({ path_name }) => ({
    path_name
  }))

  const allPaths: Array<{ params: { class: string, slug: string } }> = [];

  coursePaths.forEach((relativePath: { path_name: string }) => {
    const post = getFiles(`courses/${relativePath.path_name}`)
    post.forEach((file: string) => {
      allPaths.push(
        {
          params: {
            class: file.replace(/\.mdx/, ''),
            slug: relativePath.path_name
          }
        })

    })
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const { source, frontmatter }: any = await getFileBySlug(params.class, `courses/${params.slug}`)
  return {
    props: {
      slug: params.slug,
      source,
      frontmatter: {
        class: params.class,
        readingTime: frontmatter.readingTime,
        ...frontmatter
      }
    }
  }
}
