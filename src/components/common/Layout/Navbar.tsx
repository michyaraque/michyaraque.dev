import Link from 'next/link'
import React from 'react'
import NavItem from '../NavItem'
import { GrUserAdmin } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive';
import { useBreakpoint } from 'hooks';
import { RiMenu4Line } from 'react-icons/ri';
import { FaQuestionCircle } from 'react-icons/fa';

const LoginOptionsModal = () => (
  <>
    <input type="checkbox" id="web3-auth" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Connect wallet</h3>
        <hr />
        <p className="py-4">Connect with one of our available wallet providers or create a new one.</p>
        <ul>
          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img src={'/tech/technologies/metamask.svg'} className="w-4 h-4"/>
              <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
            </a>
          </li>
        </ul>
        <div>
          <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400 gap-2">
            <FaQuestionCircle/>
            Why do I need to connect with my wallet?</a>
        </div>
        <div className="modal-action">
          <label htmlFor="web3-auth" className="btn">Ok</label>
        </div>
      </div>
    </div>
  </>
)

const Navbar = () => {
  const { isSm } = useBreakpoint('sm');
  const { isMd } = useBreakpoint('md');
  return (
    <nav className="flex flex-wrap justify-between text-xl gap-4">

      {isMd ? <DesktopNavbar /> : <MobileNavbar />}
      <LoginOptionsModal />
    </nav>
  )
}

const DesktopNavbar = () => (
  <>
    <Link href="/">
      <a>
        <span className="font-bold text-3xl">michyaraque</span>
      </a>
    </Link>

    <div className="flex gap-4">
      <NavItem href="/" text="Inicio" />
      <NavItem href="/blog" text="Blog" />
      <NavItem href="/courses" text="Cursos" />
      <NavItem href="/snippets" text="Snippets" />
      <NavItem href="/projects" text="Mis Proyectos" />
      <label className="flex items-center justify-center pt-1 -ml-1 rounded-lg hover:bg-gray-200 w-[40px] hover:cursor-pointer" htmlFor="web3-auth">
        <GrUserAdmin color="blue" />
      </label>
    </div>
  </>
)

const MobileNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <RiMenu4Line/>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52">
            <li><NavItem href="/" text="Inicio" /></li>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/blog"><a>blog</a></Link></li>
            <li><Link href="/courses"><a>Cursos</a></Link></li>
            <li><Link href="/snippets"><a>Snippets</a></Link></li>
            <li><Link href="/projects"><a>Mis Proyectos</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="normal-case font-bold text-2xl">michyaraque</a>
      </div>
      <div className="navbar-end">
        <div>
          <label className="btn btn-ghost" htmlFor="web3-auth">
            <GrUserAdmin color="blue" />
          </label>
        </div>
      </div>
    </div >
  )
}

export default Navbar
