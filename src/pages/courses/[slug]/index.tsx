import React, { useEffect, useState } from 'react'

import { getAllFilesMetadata, getCoursesPath } from '../../../../lib/mdx'
import { Metadata, Wrapper } from 'components/common/Layout';
import Link from 'next/link';
import { cleanSlug } from 'utils';

const groupBy = (data: any, filter: any) => {
  let objectGrouped: any = []
  //Recorremos el arreglo
  data.forEach((x: any) => {
    if (!objectGrouped.hasOwnProperty(x[filter])) {
      objectGrouped[x[filter]] = []
    }

    objectGrouped[x[filter]].push({ ...x })

  })
  return objectGrouped;
}

export default function Post({ courseModules, slug, frontmatter }: any) {

  const groupedCoursesByModules = groupBy(courseModules, "modulo");

  return (
    <Wrapper
      meta={<Metadata title={cleanSlug(slug)} description="test" />}
    >
      <h3 className="mt-8 mb-4 text-center text-slate-600">{cleanSlug(slug)}</h3>
      <section className="grid grid-cols-2 gap-10 mt-0">
        {Object.keys(groupedCoursesByModules).map((moduleNumber: any, index: number) => {
          return <>

            <div key={index} className="flex flex-col gap-3 my-auto mt-0">
              <div className="flex flex-row gap-2 my-auto">
                <div className="text-white w-10 h-10 rounded-md bg-slate-400 text-center">
                    <span className="font-bold inline-block leading-normal align-middle my-0 mx-auto">{moduleNumber}</span>
                </div>
                <span className="h-auto my-auto">
                  {groupedCoursesByModules[index][0].moduloName}
                </span>
              </div>

              <div className="shadow-md w-100 min-h-[100px] rounded-md p-2">

                <div className="flex flex-col gap-4">
                  {groupedCoursesByModules[moduleNumber].map((data: any, index: number) => {
                    return <Link key={index} href={`/courses/${slug}/class/${data.slug}`}>
                      <a className="hover:bg-slate-100">

                        <section key={moduleNumber - index} className="p-2 flex flex-row gap-2">
                          <div className="w-24 h-12 bg-slate-200 rounded-md"></div>
                          <h4 className="my-auto">{data.classSummary}</h4>
                        </section>
                      </a>
                    </Link>
                  })}
                </div>


              </div>
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

export async function getStaticProps({ params }: any) {
  const courseModules = getAllFilesMetadata(`courses/${params.slug}`)

  return {
    props: { courseModules, slug: params.slug }
  }
}
