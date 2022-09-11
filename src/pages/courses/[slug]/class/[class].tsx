import React, { useEffect, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'

import { getCoursesPath, getFileBySlug, getFiles } from '../../../../../lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import MDXComponents from 'components/MDXComponents';
import { readingTimeToSpanish, slugToHex, styledDate } from 'utils';

export default function Post({ source, frontmatter }: any) {
  const [views, setViews] = useState<string | number>('----');

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://michyaraque.dev/easy-backend/views/${frontmatter.slug}`, {
          method: 'POST',
        });
        const data = await response.json();
        setViews(data.total);
      } catch (error) {
        console.log(error)
      }
    })();

  }, []);

  return (
    <Wrapper
      meta={<Metadata title={frontmatter.title} description="test" />}
    >
      <div className="w-full h-full rounded-lg px-4 md:px-10 pb-6 pt-40 " style={{
        backgroundColor: slugToHex(frontmatter.slug),
      }}>
        <h1 className="text-2xl md:text-5xl text-white font-bold">{frontmatter.title}</h1>

        <div className="text-white flex justify-between mt-4">

          <div className="flex items-center">
            <img src="/me.jpg" alt="Michael Araque's face" className="w-[36px] rounded-full border-2 p-0.5" />
            <div className="text-base ml-2 flex flex-col md:flex-row md:gap-2">
              <p>Michael Araque</p>
              <span className="hidden md:inline"> | </span>
              <p>{styledDate(frontmatter.publishedAt)}</p>
            </div>
          </div>
          <div className="text-base flex flex-col items-end md:items-end">

            <p className="ml-1">
              {views && views} visitas
            </p>
            <p>
              {readingTimeToSpanish(frontmatter.readingTime.text)}
            </p>
          </div>
        </div>
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

  const allPaths: Array<{params: {class: string, slug: string}}> = [];

  coursePaths.forEach((relativePath: {path_name: string}) => {
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
      source,
      frontmatter: {
        class: params.class,
        readingTime: frontmatter.readingTime,
        ...frontmatter
      }
    }
  }
}
