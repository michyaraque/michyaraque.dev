import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from 'react-icons/go'

const Technologies: Record<string, Record<string, string>> = {
  hardhat: {
    link: 'https://hardhat.org',
  },
  chai: {
    link: 'https://www.chaijs.com/'
  },
  waffle: {
    link: 'https://ethereum-waffle.readthedocs.io/'
  },
  solidity: {
    link: 'https://solidity.readthedocs.io/'
  }
}

const Technology = ({ name, useLink = true, version, ...props }: { name: string, useLink?: boolean, version: string }) => {
  return (
    <>
      <div className="flex flex-row mb-1">
        <img src={`/tech/technologies/${name}.svg`} alt={name} className="w-8 h-8 pointer-events-none" />
        <Link passHref href={Technologies[name].link}>
          <a target="_blank">
            <p className="hover:border-b-2 hover:text-gray-500 ml-2 first-letter:uppercase lowecase">
              {name}
              {version !== undefined &&
              <span className="ml-2 text-base">{`[v${version}]`}</span>}
              <GoLinkExternal className="text-base ml-2 inline-block" />
            </p>
          </a>
        </Link>
        {/* <span className="text-gray-400 text-base ml-4">¿Para que sirve?</span> */}
      </div>
    </>
  )
}

export default Technology
