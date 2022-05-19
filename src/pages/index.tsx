import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';

import { Metadata, Wrapper } from 'components/common/Layout';

const Card = ({ title }: { title: string }) => {
  return (
    <div className="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {title}
      </p>
    </div>
  )
}

const SnippetCard = ({ title }: { title: string }) => {
  return (
    <div className="block py-4 px-2 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">

      <section className="flex flex-row items-center gap-2 h-full">
        <div className="block min-w-[30px] min-h-[30px] bg-gray-700 rounded-md"></div>
        <p className="text-xs font-regular text-gray-700 dark:text-gray-400">
          {title}
        </p>
        <div className="min-w-[30px] m-auto">
          <BsArrowRight />
        </div>
      </section>
    </div>
  )
}

const Index = () => {
  const router = useRouter();

  return (
    <Wrapper
      meta={
        <Metadata
          title="Michael Araque"
          description="Crear, innovar y compartir ideas"
        />
      }
    >


      <>
        <h1 className="text-2xl font-bold">
          Publicaciones destacadas
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card title="Noteworthy technology acquisitions 2021" />
          <Card title="Noteworthy technology acquisitions 2021" />
          <Card title="Noteworthy technology acquisitions 2021" />
        </div>
        <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6" href="/blog">
          Read all posts
          <div className="ml-3 mt-1">
            <BsArrowRight />
          </div>
        </a>
      </>

      <section className="mt-10">
        <h1 className="text-2xl font-bold">
          Snippets destacadas
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <SnippetCard title="Solidity advance Time to interact w/ future" />
          <SnippetCard title="Noteworthy technology" />
          <SnippetCard title="Noteworthy technology" />
        </div>
        <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6" href="/blog">
          Read all posts
          <div className="ml-3 mt-1">

            <BsArrowRight />
          </div>
        </a>
      </section>

    </Wrapper>
  );
};

export default Index;
