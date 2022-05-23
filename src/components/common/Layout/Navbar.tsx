import Link from 'next/link'
import React from 'react'
import NavItem from '../NavItem'
import { GrUserAdmin } from 'react-icons/gr';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between text-xl gap-4">
      <Link href="/">
        <a>
          <span className="font-bold text-3xl">michyaraque</span>
        </a>
      </Link>
      <div className="flex gap-4">
        <NavItem href="/" text="Inicio" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/snippets" text="Snippets" />
        <NavItem href="/my-projects" text="Mis Proyectos" />
        <div className="flex items-center justify-center pt-1 -ml-1 rounded-lg hover:bg-gray-200 w-[40px]">
          <GrUserAdmin/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
