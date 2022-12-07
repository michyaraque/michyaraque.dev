import Link from 'next/link'
import React from 'react'
import NavItem from '../NavItem'
import { GrUserAdmin } from 'react-icons/gr';
import { useBreakpoint } from 'hooks';
import { RiMenu4Line } from 'react-icons/ri';
import { FaMoon, FaQuestionCircle, FaSun, FaUserShield } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const LoginOptionsModal = () => (
  <>
    <input type="checkbox" id="web3-auth" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box dark:bg-zinc-700">
        <h3 className="font-bold text-lg dark:text-zinc-200">Connect wallet</h3>
        <hr />
        <p className="py-4">Connect with one of our available wallet providers or create a new one.</p>
        <ul>
          <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-zinc-900 bg-zinc-50 rounded-lg hover:bg-zinc-100 group hover:shadow dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:text-white">
              <img src={'/tech/technologies/metamask.svg'} className="w-4 h-4" />
              <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-zinc-500 bg-zinc-200 rounded dark:bg-zinc-700 dark:text-zinc-400">Popular</span>
            </a>
          </li>
        </ul>
        <div>
          <a href="#" className="inline-flex items-center text-xs font-normal text-zinc-500 hover:underline dark:text-zinc-400 gap-2">
            <FaQuestionCircle />
            Why do I need to connect with my wallet?</a>
        </div>
        <div className="modal-action">
          <label htmlFor="web3-auth" className="btn dark:bg-zinc-500">Ok</label>
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

      <DesktopNavbar />
      <LoginOptionsModal />
    </nav>
  )
}

const ThemeButtonChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = (theme === 'system' ? systemTheme : theme) || 'light';

  const handleChange = () => {
    let theme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
  }

  return (
    <>
      <button onClick={handleChange} className="flex items-center justify-center pt-1 -ml-1 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 w-[40px] hover:cursor-pointer">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </>
  )
}

const DesktopNavbar = ({ theme, setTheme }: any) => (
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
      <label className="flex items-center justify-center pt-1 -ml-1 rounded-lg hover:bg-zinc-200 w-[40px] hover:cursor-pointer dark:hover:bg-zinc-700 dark:text-zinc-300" htmlFor="web3-auth">
        <FaUserShield />
      </label>

      <ThemeButtonChanger />
    </div>
  </>
)

const MobileNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <RiMenu4Line />
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
