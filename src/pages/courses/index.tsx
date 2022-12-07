import { useState } from 'react';
import { Metadata, Wrapper } from 'components/common/Layout';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

import { getCoursesPath } from '../../../lib/mdx';

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
      <h1 className="text-4xl font-bold dark:text-zinc-200 text-zinc-700">
        Cursos
      </h1>

      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 dark:text-zinc-700">
          <FaSearch />
        </span>
        <input
          className="placeholder:italic placeholder:text-zinc-400 block bg-zinc-50 hover:bg-white w-full border border-zinc-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 sm:text-sm dark:bg-zinc-300 dark:placeholder:text-zinc-600"
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>

      <div className="mt-4 grid">
        <h3 className="mb-4 dark:text-zinc-300 text-zinc-700">Todos los cursos</h3>
        <section className="grid grid-rows md:grid-cols-2">

          {courses.map(({ path_name, beauty_path_name }: any, index: number) => (
            <div key={index}>

              <Link href={`/courses/${path_name}`}>
                <a>
                  <div className={`block border-brand-primary-100 border-t-8 p-4 min-h-[150px] w-full bg-white rounded-lg border shadow-md hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 relative`}>

                    <p className="font-normal text-zinc-700 dark:text-zinc-400">
                      {beauty_path_name}
                    </p>
                    <div className="flex items-center text-base bottom-2 left-4 absolute">
                      <span>Dificultad: </span>
                      <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={true}/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>
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
