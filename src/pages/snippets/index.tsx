import { Metadata, Wrapper } from 'components/common/Layout';
import { SnippetCard } from 'components/ui/Snippets';
import {getAllFilesMetadata} from '@lib/mdx';


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

      <h1 className="text-4xl font-bold">
        Snippets
      </h1>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {snippets.map(({ title, slug, icon }: any, index: number) => (
          <SnippetCard key={index} title={title} slug={slug} icon={icon} />
        ))}
      </div>

    </Wrapper>
  );
};

export default Snippets;

export async function getStaticProps() {

  const snippets = await getAllFilesMetadata("snippets");

  return {
    props: { snippets }
  }
}
