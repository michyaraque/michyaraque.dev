import { Metadata, Wrapper } from 'components/common/Layout';
import { SnippetCard } from 'components/ui/Snippets';
import { getAllFilesMetadata } from '@lib/mdx';


const Snippets = ({ snippets }: any) => {
  return (
    <Wrapper
      prose={false}
      meta={
        <Metadata
          title="Snippets"
          description="Pequeños fragmentos de código, grandes soluciones técnicas."
        />
      }
    >
      <div className="py-12 flex flex-col gap-16">
        {/* Header */}
        <section className="flex flex-col gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <p className="text-brand-primary font-mono uppercase tracking-widest text-xs font-bold">sys.fragments // Binary</p>
           </div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
            Fragments<span className="text-brand-primary underline decoration-8">.</span>
          </h1>
          <p className="text-zinc-500 max-w-xl text-lg font-mono uppercase tracking-tight">
            Reusable execution blocks across multiple stacks. Optimized for production speed.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snippets.map(({ title, slug, icon }: {[key: string]: string}, index: number) => (
            <SnippetCard key={index} title={title} slug={slug} icon={icon} index={index} />
          ))}
        </div>
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
