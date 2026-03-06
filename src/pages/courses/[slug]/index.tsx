import React from "react";
import Link from "next/link";

import {
  getAllFilesMetadata,
  getCourseMetadata,
  getCoursesPath,
} from "@lib/mdx";
import { Metadata, Wrapper } from "components/common/Layout";
import { groupBy } from "utils";
import { BsQuestion } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import MDXComponents from "components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";

type IClassBox = {
  moduleNumber: number;
  index: number;
  slug: string;
  title: string;
  readingTime: string;
  classSlug: string;
};

type IClassCard = {
  data: Record<string, any>;
  moduleNumber: number;
  slug: string;
};

const ClassBox = (props: IClassBox) => {
  const { moduleNumber, title, index, classSlug, readingTime, slug } = props;
  return (
    <Link
      key={index}
      href={`/courses/${slug}/class/${classSlug}`}
      className="group block"
    >
      <article
        className="p-4 flex flex-row gap-4 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-200"
      >
        <div className="w-16 h-10 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors">
          <span className="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-600 group-hover:text-white transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-display font-bold text-sm uppercase tracking-tight group-hover:text-brand-primary transition-colors">
            {title}
          </h4>
          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
            <AiOutlineRead className="scale-125" />
            <span>Execution_Time // {readingTime.replace(" read", "").toUpperCase()}</span>
          </span>
        </div>
      </article>
    </Link>
  );
};

const ClassCard = (props: IClassCard) => {
  const { data, moduleNumber, slug } = props;
  return (
    <section className="flex flex-col border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
      {data.map(
        (
          data: { slug: string; frontmatter: any; classSummary: string },
          index: number
        ) => (
          <div key={index} className={index !== 0 ? 'border-t border-zinc-100 dark:border-zinc-900' : ''}>
            <ClassBox
              moduleNumber={moduleNumber}
              title={data.classSummary}
              readingTime={data.frontmatter.readingTime.text}
              index={index}
              slug={slug}
              classSlug={data.slug}
            />
          </div>
        )
      )}
    </section>
  );
};

export default function CourseModules({
  courseModules,
  courseDescription,
  courseName,
  slug
}: { courseModules: Array<any>, courseDescription: any, courseName: string, slug: string }) {
  const groupedCoursesByModules = groupBy(courseModules, "modulo");

  return (
    <Wrapper
      prose={false}
      meta={<Metadata title={courseName} description={`Aprende ${courseName} con este curso práctico.`} />}
    >
      <div className="py-12 flex flex-col gap-20">
        {/* Course Header */}
        <header className="flex flex-col gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <p className="text-brand-primary font-mono uppercase tracking-widest text-xs font-bold">sys.course // Protocol</p>
           </div>

           <div className="flex flex-col gap-4">
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white font-display leading-[0.9]">
               {courseName}<span className="text-brand-primary">.</span>
             </h1>
             <div className="max-w-2xl font-mono text-sm uppercase tracking-tight text-zinc-500">
                <MDXRemote {...courseDescription} components={MDXComponents} />
             </div>
           </div>
        </header>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.keys(groupedCoursesByModules).map(
            (moduleNumber: any, index: number) => (
              <div key={index} className="flex flex-col gap-6 fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-12 h-12 border-2 border-brand-primary text-brand-primary font-mono font-black text-xl">
                    {String(moduleNumber).padStart(2, '0')}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-zinc-400 font-bold">Module_Block</span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tighter text-zinc-900 dark:text-white">
                      {groupedCoursesByModules[moduleNumber][0].moduloName}
                    </h3>
                  </div>
                </div>

                <ClassCard
                  data={groupedCoursesByModules[moduleNumber]}
                  moduleNumber={moduleNumber}
                  slug={slug}
                />
              </div>
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const courses = getCoursesPath();
  const paths = courses.map(({ path_name }) => ({
    params: {
      slug: path_name.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}) {
  const courseModules = getAllFilesMetadata(`courses/${params.slug}`);
  const { source, frontmatter }: any = await getCourseMetadata(params.slug);

  return {
    props: {
      courseModules,
      courseName: frontmatter.courseName,
      slug: params.slug,
      courseDescription: source,
      frontmatter: {
        ...frontmatter,
      },
    },
  };
}
