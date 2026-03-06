import { useState } from 'react';
import { Metadata, Wrapper } from 'components/common/Layout';
import { FaSearch } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import { getCoursesPath } from '../../../lib/mdx';

export async function getStaticProps() {
  const courses = getCoursesPath();
  return {
    props: { courses }
  }
}

const Courses = ({ courses }: { courses: string[] }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Wrapper
      prose={false}
      meta={
        <Metadata
          title="Cursos"
          description="Rutas de aprendizaje técnico, desde fundamentos hasta implementación avanzada."
        />
      }
    >
      <div className="py-12 flex flex-col gap-16 font-mono">
        {/* Header */}
        <section className="flex flex-col gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary-100"></div>
              <p className="text-brand-primary-100 uppercase tracking-widest text-xs font-bold">sys.education // Paths</p>
           </div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
            Intelligence<span className="text-brand-primary-100 underline decoration-8">.</span>
          </h1>
          <p className="text-zinc-500 max-w-xl text-lg mt-4 uppercase tracking-tight">
            Structured learning modules for the modern stack developer.
          </p>
        </section>

        <div className="relative group max-w-2xl">
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-brand-primary-100">
              <FaSearch />
           </div>
           <input
            className="w-full bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 py-4 pl-12 pr-4 outline-hidden focus:border-brand-primary-100 dark:focus:border-brand-primary-100 transition-all uppercase tracking-widest text-xs font-bold placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
            type="text"
            aria-label="Search learning modules"
            placeholder="Search modules..."
            onChange={(e) => setSearchValue(e.target.value)}
           />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(({ path_name, beauty_path_name }: any, index: number) => (
            <div key={index} className="group relative fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <div className="absolute inset-0 bg-brand-primary-100 translate-y-2 translate-x-2 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Link href={`/courses/${path_name}`} aria-label={`Start course: ${beauty_path_name}`}>
                <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 p-8 h-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest">COURSE // 0{index + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tighter text-zinc-900 dark:text-white group-hover:text-brand-primary-100 transition-colors">
                      {beauty_path_name}
                    </h2>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-6">
                    <div className="flex flex-col gap-2">
                       <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Difficulty_Level</span>
                       <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className={`w-3 h-3 border border-zinc-900 dark:border-zinc-600 ${s <= 3 ? 'bg-brand-primary-100' : 'bg-transparent'}`}></div>
                          ))}
                       </div>
                    </div>
                    <div className="text-brand-primary-100 flex items-center gap-2 font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Enter Path <BsArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </Wrapper>
  );
};

export default Courses;
