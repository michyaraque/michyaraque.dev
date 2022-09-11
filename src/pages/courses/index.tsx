import { useState } from 'react';
import { Metadata, Wrapper } from 'components/common/Layout';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

import { getAllFilesMetadata, getCoursesPath } from '../../../lib/mdx';
import ShowViews from 'components/ShowViews';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';

const Courses = ({ posts }: any) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredCoursesPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Wrapper
      meta={
        <Metadata
          title="Cursos"
          description="Crear, innovar y compartir ideas"
        />
      }
    >

      <h1 className="text-4xl font-bold">
        Cursos
      </h1>

      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaSearch />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-slate-50 hover:bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>

      <div className="mt-4 grid">
        <h3 className="mb-4">Todos los cursos</h3>
        {filteredCoursesPosts.map(({ title, slug, summary }: any, index: number) => (
          <div key={index} className="hover:bg-slate-100 hover:rounded-md p-4">
            <Link href={`/courses/${slug}`}>
              <a className="relative">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-slate-500 text-lg">{summary}</p>
                  <div className="flex items-center text-base top-0 right-4 absolute">

                    <ShowViews slug={slug} />
                  </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

    </Wrapper>
  );
};

export default Courses;

export async function getStaticProps() {

  const posts = await getAllFilesMetadata("courses/aprende-solidity-desde-0");
  console.log(await getCoursesPath('aprende-solidity-desde-0'));
  return {
    props: { posts }
  }
}
