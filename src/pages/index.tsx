import { BsArrowRight } from 'react-icons/bs';

import { Metadata, Wrapper } from 'components/common/Layout';
import { PostCard } from 'components/ui/Posts';
import { SnippetCard } from 'components/ui/Snippets';

import { getAllFilesMetadata } from '../../lib/mdx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Index = ({ posts, snippets }: any) => {

  return (
    <Wrapper
      meta={
        <Metadata
          title="Michael Araque"
          description="Crear, innovar y compartir ideas"
        />
      }
    >
      <div className="flex flex-col justify-center items-center my-8">
        <img src="me.jpg" alt="Test" className="w-1/6 blob" />
        <h1 className="text-[40px] font-bold mt-2">
          Michael Araque
        </h1>
        <h2 className="text-[18px] font-regular mt-2">
          CTO & Blockchain developer at <b>Foxtrot Command</b>
        </h2>
      </div>

      <>
        <h3>
          Publicaciones destacadas
        </h3>
        <p className="mt-4 mb-2 text-gray-600 text-base font-medium dark:text-gray-400">
          Normalmente aquí verás las publicaciones destacadas o las que me apetezca destacar 😎.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.slice(0, 3).map(({ title, slug }: any, index: number) => (
            <PostCard key={index} title={title} slug={slug} />
          ))}
        </div>
        <Link href="/blog">
          <a className="flex text-[18px] mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Ver todos los posts
            <div className="ml-3 mt-1">
              <BsArrowRight />
            </div>
          </a>
        </Link>
      </>

      <section className="mt-10">
        <h3>
          Snippets destacadas
        </h3>
        <p className="mt-4 mb-2 text-gray-600 text-base font-medium dark:text-gray-400">
          Los snippets suelen ser trozos de código funcional que ayudan a mejorar mi experiencia en el desarrollo y por eso me apetecería destacar algunos y esperar que te sirvan tanto como a mi
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {snippets.slice(0, 3).map(({ title, slug, icon }: any, index: number) => (
            <SnippetCard key={index} title={title} slug={slug} icon={icon} />
          ))}
        </div>
        <Link href="/snippets">
        <a className="flex text-[18px] mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
          Ver todos los snippets
          <div className="ml-3 mt-1">
            <BsArrowRight />
          </div>
        </a>
        </Link>
      </section>

    </Wrapper>
  );
};

export default Index;

export async function getStaticProps() {

  const posts = await getAllFilesMetadata("blog");
  const snippets = await getAllFilesMetadata("snippets").sort((a: any, b: any): any => {
    Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  });

  return {
    props: { posts, snippets }
  }
}
