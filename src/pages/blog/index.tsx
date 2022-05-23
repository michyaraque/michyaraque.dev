import { Metadata, Wrapper } from 'components/common/Layout';
import { PostCard } from 'components/ui/Posts';
import Link from 'next/link';

import { getAllFilesMetadata } from '../../../lib/mdx';

const Blog = ({ posts }: any) => {

  return (
    <Wrapper
      meta={
        <Metadata
          title="Blog"
          description="Crear, innovar y compartir ideas"
        />
      }
    >

      <h1 className="text-4xl font-bold">
        Blog
      </h1>

      <div className="mt-4 grid">
        {posts.map(({ title, slug, summary }: any, index: number) => (
          <div key={index}>
            <Link href={`/blog/${slug}`}>
              <a>
                <h2 className="text-2xl ">{title}</h2>
                <p>{summary}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>

    </Wrapper>
  );
};

export default Blog;

export async function getStaticProps() {

  const posts = await getAllFilesMetadata("blog");

  return {
    props: { posts }
  }
}
