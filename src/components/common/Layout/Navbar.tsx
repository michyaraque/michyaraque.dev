import Link from 'next/link'
import React from 'react'
import NavItem from '../NavItem'

const Navbar = () => {
  return (
    <nav className="flex flex-wrap text-xl gap-4">
      <NavItem href="/" text="Inicio" />
      <NavItem href="/blog" text="Blog" />
      <NavItem href="/snippets" text="Snippets" />
      <NavItem href="/my-projects" text="Mis Proyectos" />
    </nav>
  )
}

export default Navbar
