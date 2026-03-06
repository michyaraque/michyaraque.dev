import { ReactNode } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type TExternalLink = {
  href: string
  children: ReactNode
}

const ExternalLink = ({ href, children }: TExternalLink) => (
  <Link
    href={href}
    className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-400 transition"
    target="_blank"
    rel="noopener noreferrer">

    {children}

  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto mb-16 mt-16 border-t-2 border-zinc-100 dark:border-zinc-800 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono uppercase tracking-widest text-[10px] font-bold">
        <div className="flex flex-col gap-6">
           <span className="text-zinc-300 dark:text-zinc-600">Local_Nav</span>
           <div className="flex flex-col gap-4">
              <Link href="/" className="text-zinc-900 dark:text-white hover:text-brand-primary transition-colors">Start // Home</Link>
              <Link href="/blog" className="text-zinc-900 dark:text-white hover:text-brand-primary transition-colors">Output // Blog</Link>
              <Link href="/projects" className="text-zinc-900 dark:text-white hover:text-brand-primary transition-colors">Builds // Proyectos</Link>
           </div>
        </div>

        <div className="flex flex-col gap-6">
           <span className="text-zinc-300 dark:text-zinc-600">Global_Nodes</span>
           <div className="flex flex-col gap-4">
              <ExternalLink href="https://twitter.com/michyaraque">X // Twitter</ExternalLink>
              <ExternalLink href="https://github.com/michyaraque">Source // GitHub</ExternalLink>
              <ExternalLink href="https://linkedin.com/in/michyaraque">Connect // LinkedIn</ExternalLink>
           </div>
        </div>

        <div className="flex flex-col gap-6">
           <span className="text-zinc-300 dark:text-zinc-600">Resource_Buffer</span>
           <div className="flex flex-col gap-4">
              <Link href="/snippets" className="text-zinc-900 dark:text-white hover:text-brand-primary transition-colors">FRAG // Snippets</Link>
              <Link href="/courses" className="text-zinc-900 dark:text-white hover:text-brand-primary transition-colors">LEARN // Cursos</Link>
           </div>
        </div>

        <div className="flex flex-col gap-8">
           <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                 <span className="text-zinc-400">Node_Status</span>
                 <span className="text-green-500 animate-pulse">● ONLINE</span>
              </div>
              <div className="flex items-center justify-between">
                 <span className="text-zinc-400">Environment</span>
                 <span className="text-zinc-900 dark:text-zinc-100 italic">Production</span>
              </div>
              <div className="mt-2 text-[8px] text-zinc-300 dark:text-zinc-700 leading-tight">
                 &copy; {new Date().getFullYear()} Michael Araque<br/>
                 All rights reserved. Code is law.
              </div>
           </div>

           <a
            href="https://github.com/michyaraque/michyaraque.dev"
            target="_blank"
            className="flex items-center gap-3 p-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white transition-all group"
           >
              <FaGithub size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="text-[10px]">Inspect Source</span>
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
