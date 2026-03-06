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
    <footer className="flex flex-col justify-center items-start max-w-5xl mx-auto w-full mb-8 mt-10">
      <hr className="w-full border-1 border-zinc-200 dark:border-zinc-800 mb-8" />
      <div className="w-full  grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 dark:text-zinc-300 transition">
            Inicio
          </Link>
          <Link
            href="/courses"
            className="text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 dark:text-zinc-300 transition">
            
              Cursos
            
          </Link>
          <Link
            href="/newsletter"
            className="text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 dark:text-zinc-300 transition">
            
              Newsletter
            
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/michyaraque">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/michyaraque">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/snippets"
            className="text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 dark:text-zinc-300 transition">
            
              Snippets
            
          </Link>
        </div>

        <div className="flex flex-col space-y-4 transition duration:300 ease-out hover:opacity-80 hover:-translate-y-1 hover:ease-in">
          <a
            href="https://github.com/michyaraque/michyaraque.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row gap-2">
              <FaGithub fontSize="40px" />
              <p className="my-auto font-bold">Código del blog</p>

            </div>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
