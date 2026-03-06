import ShowViews from 'components/ShowViews'
import Link from 'next/link'
import React, { useState } from 'react'
import { slugToHex } from 'utils'
import { AiOutlineEye, AiFillEye } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

interface PostCardProps {
  title: string
  slug: string
  index?: number
}

const Card = ({ title, slug, index }: PostCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <Link href={`/blog/${slug}`} className="group relative block w-full h-full font-mono no-underline" aria-label={`Read post: ${title}`}>
      {/* Hard Shadow Offset (Cyber Style) */}
      <div className="absolute inset-0 bg-brand-primary translate-y-2 translate-x-2 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="h-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 p-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold">
              {index !== undefined ? `LOG_ENTRY // ${String(index + 1).padStart(2, '0')}` : 'SYS_LOG // READ'}
            </span>
            <div
              style={{ backgroundColor: slugToHex(slug) }}
              className="w-12 h-1 ml-auto opacity-80"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-white leading-[0.9] border-l-4 border-l-transparent group-hover:border-l-brand-primary pl-0 group-hover:pl-4 transition-all no-underline decoration-transparent">
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 flex items-center gap-2">
            {isHovering ? <AiFillEye className="text-sm text-brand-primary" /> : <AiOutlineEye className="text-sm" />}
            <ShowViews onlyNumber={true} slug={slug} />
            <span className="opacity-50">Views</span>
          </div>

          <span className="text-zinc-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all">
            <BsArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card
