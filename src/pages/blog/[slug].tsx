import React, { useEffect } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from '../../../lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import MDXComponents from 'components/MDXComponents';

export default function Post({ source, frontmatter }: any) {

  useEffect(() => {
    (async () => {
      try {
        await fetch(`https://michyaraque.dev/easy-backend/views/${frontmatter.slug}`, {
          method: 'POST',
        });
      } catch(error) {
        console.log(error)
      }
    })();

  }, [])

  return (
    <Wrapper
      meta={<Metadata title={frontmatter.slug} description="test" />}
    >
      <h1 className="text-5xl text-black font-bold">{frontmatter.title}</h1>
      <small>{frontmatter.publishedAt}</small>
      <MDXRemote {...source} components={MDXComponents}/>
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
        ...frontmatter
      }
    }
  }
}
