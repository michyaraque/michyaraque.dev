import React, { useEffect, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'

import { getFileBySlug, getFiles } from '@lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import MDXComponents from 'components/MDXComponents';
import { readingTimeToSpanish, slugToHex, styledDate } from 'utils';

export default function Post({ source, frontmatter }: any) {
  const [views, setViews] = useState<string|number>('----');

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
      meta={<Metadata title={frontmatter.title} description="Blog de software y curiosidades." />}
    >
      <div className="w-full h-full rounded-lg px-4 md:px-10 pb-6 pt-40 relative" style={{
        backgroundColor: slugToHex(frontmatter.slug),
        backgroundImage: `${frontmatter.cover ? `url(/images/${frontmatter.slug}/${frontmatter.cover})` : ''}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="bg-black bg-opacity-50 absolute top-0 right-0 left-0 bottom-0 z-0 rounded-lg"/>

        <h1 className="text-2xl md:text-5xl text-white font-bold z-1 relative">{frontmatter.title}</h1>

        <div className="text-white flex justify-between mt-4 z-1 relative">

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
