import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <ul className="flex flex-wrap text-xl">
        <li className="mr-6">
          <Link href="/">
            <a className="border-none text-gray-700 hover:text-gray-900">
              Home
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about/">
            <a className="border-none text-gray-700 hover:text-gray-900">
              About
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/blog/">
            <a className="border-none text-gray-700 hover:text-gray-900">
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar
