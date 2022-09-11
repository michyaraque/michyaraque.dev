import React from 'react'
import Link from 'next/link';

import { getAllFilesMetadata, getCoursesPath } from '@lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import { cleanSlug, groupBy, readingTimeToSpanish } from 'utils';
import { BsQuestion } from 'react-icons/bs';
import { AiOutlineRead } from 'react-icons/ai';

type IClassCard = {
  moduleNumber: number;
  index: number;
  slug: string;
  title: string;
  readingTime: string;
  classSlug: string;
}

const ClassBox = (props: IClassCard) => {
  const { moduleNumber, title, index, classSlug, readingTime, slug } = props;
  return (
    <Link key={index} href={`/courses/${slug}/class/${classSlug}`}>
      <a className="hover:bg-slate-100 rounded-md">

        <article key={moduleNumber - index} className="p-2 flex flex-row gap-2 ">
          <div className="w-24 h-12 rounded-md bg-slate-200 flex items-center justify-center">
            <BsQuestion color="#f3f3f3" className="" fontSize="40px" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="my-auto font-bold text-base">{title}</h4>
            <span className="text-sm text-slate-800 font-medium flex gap-1">
              <AiOutlineRead className="my-auto" />
              <span className=" px-1 py-[2px] rounded-md">
                {readingTime.replace(' read', '')}
              </span>
            </span>
          </div>
        </article>
      </a>
    </Link>
  )
}

const ClassCard = (props: any) => {
  const { data, moduleNumber, slug } = props;
  return (
    <div className="w-100 shadow-md min-h-[100px] rounded-md p-2 border-2 border-slate-100">
      <section className="flex flex-col gap-4">
        {data.map((data: { slug: string; frontmatter: any; classSummary: string }, index: number) => {
          return <ClassBox
            key={index}
            moduleNumber={moduleNumber}
            title={data.classSummary}
            readingTime={data.frontmatter.readingTime.text}
            index={index}
            slug={slug}
            classSlug={data.slug}
          />
        })}
      </section>
    </div>
  )
}
export default function CourseModules({ courseModules, slug }: any) {

  const groupedCoursesByModules = groupBy(courseModules, "modulo");

  return (
    <Wrapper
      meta={<Metadata title={cleanSlug(slug)} description="test" />}
    >
      <h3 className="mt-8 mb-4 text-center text-slate-600">{cleanSlug(slug)}</h3>
      <section className="grid grid-rows md:grid-cols-2 gap-7 md:gap-10">
        {Object.keys(groupedCoursesByModules).map((moduleNumber: any, index: number) => {
          return <>

            <div key={index} className="flex flex-col gap-3 my-auto mt-0">
              <div className="flex flex-row gap-2 my-auto">
                <div className="text-white w-10 h-10 rounded-md bg-[#ecc94b] text-center">
                  <span className="font-bold inline-block leading-normal align-middle my-0 mx-auto">{moduleNumber}</span>
                </div>
                <span className="h-auto my-auto font-bold text-slate-800">
                  {groupedCoursesByModules[index][0].moduloName}
                </span>
              </div>

              <ClassCard data={groupedCoursesByModules[moduleNumber]} moduleNumber={moduleNumber} slug={slug} />
            </div>
          </>
        })}
      </section>

    </Wrapper>
  )
}

export async function getStaticPaths() {
  const courses = getCoursesPath();
  const paths = courses.map(({ path_name }) => ({
    params: {
      slug: path_name.replace(/\.mdx/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { slug: string, class: string } }) {
  const courseModules = getAllFilesMetadata(`courses/${params.slug}`)
  return {
    props: {
      courseModules,
      slug: params.slug,

    }
  }
}
