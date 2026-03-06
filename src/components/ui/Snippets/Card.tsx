import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

interface SnippetCardProps {
  title: string
  slug: string
  icon: string
  index?: number
}

const Card = ({ title, slug, icon, index }: SnippetCardProps) => {
  const path = `../tech/technologies/${icon}.svg`;

  return (
    <Link href={`/snippets/${slug}`} className="group relative block w-full h-full font-mono no-underline" aria-label={`View snippet: ${title}`}>
        {/* Hard Shadow Offset (Dark) */}
        <div className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 translate-y-2 translate-x-2 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        <div className="h-full bg-zinc-50 dark:bg-zinc-800/80 border-2 border-zinc-200 dark:border-zinc-700 p-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold">
                    {index !== undefined ? `FRAG // ${String(index + 1).padStart(2, '0')}` : 'SNIPPET // CODE'}
                </span>
                <div className="relative block w-8 h-8 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <img
                      src={path ?? './tech/technologies/unknown.svg'}
                      className="w-full h-full object-contain"
                      alt={`${icon} technology logo`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/tech/technologies/unknown.svg'
                      }}
                    />
                </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold font-display uppercase tracking-tight text-zinc-900 dark:text-zinc-200 leading-tight no-underline decoration-transparent">
                {title}
            </h2>

            <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-200/50 dark:border-zinc-700/50">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Run Snippet
                </span>
                <span className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all">
                    <BsArrowRight />
                </span>
            </div>
        </div>
    </Link>
  )
}

export default Card
