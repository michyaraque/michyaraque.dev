import { useState } from 'react';
import { Metadata, Wrapper } from 'components/common/Layout';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

import { getAllFilesMetadata, getCoursesPath } from '../../../lib/mdx';
import ShowViews from 'components/ShowViews';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';

const Courses = ({ courses }: { courses: string[] }) => {
  const [searchValue, setSearchValue] = useState<string>('');

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
        <section className="grid grid-cols-2">

          {courses.map(({ path_name, beauty_path_name }: any, index: number) => (
            <div key={index}>

              <Link href={`/courses/${path_name}`}>
                <a>
                  <div className={`block border-t-8 p-4 min-h-[150px] w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative`}>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {beauty_path_name}
                    </p>
                    <div className="flex items-center text-base bottom-2 right-4 absolute">

                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </section>

      </div>

    </Wrapper>
  );
};

export default Courses;

export async function getStaticProps() {
  const courses = getCoursesPath();
  return {
    props: { courses }
  }
}
