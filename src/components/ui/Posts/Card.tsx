import Link from 'next/link'
import React from 'react'
import { slugToHex } from 'utils'

const Card = ({ title, slug }: { title: string, slug: string }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className={`block border-t-8 border-t-[${slugToHex(slug)}] p-4 min-h-[150px] w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {title}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Card
