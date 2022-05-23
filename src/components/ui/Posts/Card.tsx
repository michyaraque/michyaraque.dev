import ShowViews from 'components/ShowViews'
import Link from 'next/link'
import React, { useState } from 'react'
import { slugToHex } from 'utils'
import { AiOutlineEye, AiFillEye } from 'react-icons/ai'

const Card = ({ title, slug }: { title: string, slug: string }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onEnter = () => {
    setIsHovering(true)
  }

  const onExit = () => {
    setIsHovering(false)
  }

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div onMouseEnter={onEnter} onMouseLeave={onExit} className={`block border-t-8 border-t-[${slugToHex(slug)}] p-4 min-h-[150px] w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative`}>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {title}
          </p>
          <div className="flex items-center text-base bottom-2 right-4 absolute">
            <div className="inline-block mr-1">
              {isHovering ? <AiFillEye /> : <AiOutlineEye />}

            </div>
            <ShowViews onlyNumber={true} slug={slug} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
