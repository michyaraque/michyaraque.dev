import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from '../../../lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import MDXComponents from 'components/MDXComponents';

export default function Post({ source, frontmatter }: any) {
  return (
    <Wrapper
      meta={<Metadata title={frontmatter.slug} description="test" />}
    >
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>

      <MDXRemote {...source} components={MDXComponents}/>
    </Wrapper>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles("snippets");
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
  const { source, frontmatter }: any = await getFileBySlug(params.slug, "snippets")
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
