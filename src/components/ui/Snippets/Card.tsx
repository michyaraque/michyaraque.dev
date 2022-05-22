import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

const Card = ({ title, slug, icon }: { title: string, slug: string, icon: string }) => {
  const path = `./tech/technologies/${icon}.svg`;

  return (
    <div className="block py-4 px-2 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">

      <Link href={`/snippets/${slug}`}>
        <section className="flex flex-row items-center gap-2 h-full">
          <div className="relative block w-[30px] max-w-[30px] max-h-[30px] h-[30px] bg-gray-200 rounded-md">
            <img src={path ?? './tech/technologies/unknown.svg'} className="w-full h-full absolute object-contain p-1" />
          </div>
          <p className="text-xs font-regular text-gray-700 dark:text-gray-400">
            {title}
          </p>
          <div className="min-w-[30px] m-auto relative">
            <BsArrowRight />
          </div>
        </section>
      </Link>
    </div>
  )
}

export default Card
