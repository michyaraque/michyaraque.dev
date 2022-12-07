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
        const response = await fetch(`https://michyaraque.dev/easy-backend/views/${frontmatter.slug}`, {
          method: 'POST',
        });
        await response.json();
      } catch (error) {
        console.log(error)
      }
    })();

  }, []);

  return (
    <Wrapper
      meta={<Metadata title={frontmatter.title} description="test" />}
    >
      <div className="text-sm breadcrumbs">
        <ul>
          <li><Link href={`/courses/${slug}`}><a>{cleanSlug(slug)}</a></Link></li>
          <li className="text-slate-400 cursor-not-allowed">{frontmatter.classSummary}</li>
        </ul>
      </div>

      <div className="w-full h-full rounded-lg px-4 md:px-10 py-6 relative" style={{
        backgroundColor: slugToHex(frontmatter.slug),
      }}>
        <h1 className="text-2xl md:text-5xl text-white font-bold text-center">{frontmatter.title}</h1>
        <h2 className="text-center text-slate-200 mt-3">{frontmatter.classSummary}</h2>
      </div>
      <MDXRemote {...source} components={MDXComponents} />
    </Wrapper>
  )
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
