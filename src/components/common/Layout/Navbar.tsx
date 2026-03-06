import Link from 'next/link'
import React from 'react'
import NavItem from '../NavItem'
import { GrUserAdmin } from 'react-icons/gr';
import { useBreakpoint } from 'hooks';
import { RiMenu4Line } from 'react-icons/ri';
import { FaMoon, FaQuestionCircle, FaSun, FaUserShield } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { isMd } = useBreakpoint('md');
  return (
    <nav className="flex flex-wrap justify-between items-center my-8 border-b-2 border-zinc-100 dark:border-zinc-900">
      {isMd ? <DesktopNavbar /> : <MobileNavbar />}
    </nav>
  )
}

const ThemeButtonChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = (theme === 'system' ? systemTheme : theme) || 'light';

  const handleChange = () => {
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <button
      onClick={handleChange}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
      className="relative flex items-center justify-center w-10 h-10 border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
    >
      {currentTheme === 'light' ? <FaMoon className="text-zinc-900" /> : <FaSun className="text-white" />}
    </button>
  )
}

const DesktopNavbar = () => (
  <>
    <Link href="/" className="group no-underline" aria-label="Michyaraque Home">
      <span className="font-display font-black text-3xl uppercase tracking-tighter text-zinc-900 dark:text-white group-hover:text-brand-primary transition-colors">
        Michyaraque<span className="text-brand-primary group-hover:text-zinc-900 dark:group-hover:text-white">.</span>
      </span>
    </Link>

    <div className="flex gap-2 items-center">
      <NavItem href="/" text="Inicio" className="hidden md:inline-block" />
      <NavItem href="/blog" text="Blog" className="hidden md:inline-block" />
      <NavItem href="/courses" text="Cursos" className="hidden md:inline-block" />
      <NavItem href="/snippets" text="Snippets" className="hidden md:inline-block" />
      <NavItem href="/projects" text="Proyectos" className="hidden md:inline-block" />

      <div className="h-6 w-[2px] bg-zinc-200 dark:bg-zinc-800 mx-2 hidden md:block"></div>
      <ThemeButtonChanger />
    </div>
  </>
)

const MobileNavbar = () => {
  return (
    <div className="flex w-full justify-between items-center px-2">
       <Link href="/" className="font-display font-black text-2xl uppercase tracking-tighter text-zinc-900 dark:text-white" aria-label="Michyaraque Home">
        Michyaraque<span className="text-brand-primary">.</span>
      </Link>

      <div className="flex gap-4 items-center">
        <ThemeButtonChanger />
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            role="button"
            aria-label="Open navigation menu"
            className="flex items-center justify-center w-10 h-10 border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none transition-all cursor-pointer"
          >
            <RiMenu4Line className="dark:text-white text-zinc-900 scale-125" />
          </label>
          <ul tabIndex={0} className="dropdown-content mt-4 p-4 border-2 border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] w-56 flex flex-col gap-2 z-50">
            <li><NavItem href="/" text="Inicio" className="w-full text-left px-0" /></li>
            <li><NavItem href="/blog" text="Blog" className="w-full text-left px-0" /></li>
            <li><NavItem href="/courses" text="Cursos" className="w-full text-left px-0" /></li>
            <li><NavItem href="/snippets" text="Snippets" className="w-full text-left px-0" /></li>
            <li><NavItem href="/projects" text="Proyectos" className="w-full text-left px-0" /></li>
            <li className="pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2">
               <div className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600 flex items-center gap-2 px-4">
                  <FaUserShield /> sys.auth // OFFLINE
               </div>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default Navbar
