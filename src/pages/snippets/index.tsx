import { Metadata, Wrapper } from 'components/common/Layout';
import { SnippetCard } from 'components/ui/Snippets';
import { getAllFilesMetadata } from '@lib/mdx';


const Snippets = ({ snippets }: any) => {

  return (
    <Wrapper
      meta={
        <Metadata
          title="Snippets"
          description="Crear, innovar y compartir ideas"
        />
      }
    >
      <section aria-label="Header Section">
        <h1 className="text-4xl font-bold dark:text-gray-300 text-gray-700">
          Snippets
        </h1>
        <p className="mt-2">
          Los snippets que comparto son pequeños extractos de código que te ayudan a mejorar tu entorno de programación. Encontrarás snippets de Solidity, Hardhat, NodeJs, PHP ó incluso CSS.
        </p>
      </section>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {snippets.map(({ title, slug, icon }: {[key: string]: string}, index: number) => (
          <SnippetCard key={index} title={title} slug={slug} icon={icon} />
        ))}
      </div>

    </Wrapper>
  );
};

export default Snippets;

export async function getStaticProps() {

  const snippets = getAllFilesMetadata("snippets");

  return {
    props: { snippets }
  }
}
