import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { SiLua } from 'react-icons/si';

import { Metadata, Wrapper } from 'components/common/Layout';
import { PostCard } from 'components/ui/Posts';
import { SnippetCard } from 'components/ui/Snippets';
import MeCard from 'components/MeCard';

import { getAllFilesMetadata } from '../../lib/mdx';

const Index = ({ posts, snippets }: Record<string, any >) => {

  return (
    <Wrapper
      meta={
        <Metadata
          title=" "
          titleTemplate='Michael Araque - Arquitecto de ideas y futuro difusor de conocimiento'
          description="Crear, innovar y compartir ideas"
        />
      }
    >
      <div className="flex flex-row mb-8 pt-16">
        <div className="w-full">
          <div className="w-full md:w-5/6 h-full flex flex-col gap-2 text-lg">
            <div className="w-full text-5xl lg:text-7xl whitespace-nowrap font-bold
            bg-gradient-to-r bg-clip-text  text-transparent
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text
            transition-all duration-200 ease-in-out
            ">
              ¡Buenas friend!
            </div>

            <p className="mb-4 mt-10">
              Soy Michael Araque un desarrollador blockchain y backend con una leve pasión por el frontend (pequeña eh 😅)
            </p>

            <div className="flex flex-col gap-3 leading-[24px] text-gray-600">
              <p>Empecé a programar en el año 2009 con <SiLua className="inline-block text-languages-lua" /> (Lua) ya que en aquel entonces con 12 años me gustaban mucho los videojuegos y toquetear las entrañas de estos</p>
              <p>Todo mi aprendizaje ha sido de manera totalmente autodidacta y me he dedicado a estudiar y aprender nuevas tecnologías y herramientas con el paso del tiempo</p>
              <p>Por eso he decidido craftear este blog para aprender y mejorar mis habilidades frontend, espero el contenido y el blog te gusten 🦾</p>
            </div>

          </div>
        </div>
        <div className="h-full hidden md:inline">
          <MeCard />
        </div>
      </div>

      <hr className="my-10" />

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
