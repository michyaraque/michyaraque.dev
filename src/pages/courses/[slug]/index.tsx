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
    <Link key={index} href={`/courses/${slug}/class/${classSlug}`}>
      <a className="hover:bg-slate-100 rounded-md">
        <article
          key={moduleNumber - index}
          className="p-2 flex flex-row gap-2 "
        >
          <div className="w-24 h-12 rounded-md bg-slate-200 flex items-center justify-center">
            <BsQuestion color="#f3f3f3" className="" fontSize="40px" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="my-auto font-bold text-base">{title}</h4>
            <span className="text-sm text-slate-800 font-medium flex gap-1">
              <AiOutlineRead className="my-auto" />
              <span className=" px-1 py-[2px] rounded-md">
                {readingTime.replace(" read", "")}
              </span>
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
};

const ClassCard = (props: IClassCard) => {
  const { data, moduleNumber, slug } = props;
  return (
    <section className="flex flex-col gap-4 w-100 shadow-md min-h-[100px] rounded-md p-2 border-2 border-slate-100">
      {data.map(
        (
          data: { slug: string; frontmatter: any; classSummary: string },
          index: number
        ) => {
          return (
            <ClassBox
              key={index}
              moduleNumber={moduleNumber}
              title={data.classSummary}
              readingTime={data.frontmatter.readingTime.text}
              index={index}
              slug={slug}
              classSlug={data.slug}
            />
          );
        }
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
      meta={<Metadata title={courseName} description="Course" />}
    >
      <header className="mb-10">
        <span className="inline-block mt-16 mb-8 text-5xl font-bold text-slate-600">
          {courseName}
        </span>
        <MDXRemote {...courseDescription} components={MDXComponents} />
      </header>

      <div className="grid grid-rows md:grid-cols-2 gap-7 md:gap-10">
        {Object.keys(groupedCoursesByModules).map(
          (moduleNumber: any, index: number) => {
            return (
              <>
                <div key={index} className="flex flex-col gap-3 my-auto mt-0">
                  <div className="flex flex-row flex-grow gap-2 my-auto">
                    <div className="text-white w-10 h-10 rounded-md bg-brand-primary-100 font-bold">
                      <span className="text-center w-full h-full flex items-center justify-center">{moduleNumber}</span>
                    </div>
                    <span className="h-auto my-auto font-bold text-slate-800">
                      {groupedCoursesByModules[index][0].moduloName}
                    </span>
                  </div>

                  <ClassCard
                    data={groupedCoursesByModules[moduleNumber]}
                    moduleNumber={moduleNumber}
                    slug={slug}
                  />
                </div>
              </>
            );
          }
        )}
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
