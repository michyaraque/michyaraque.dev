import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const NavItem = ({ href, text, className = "" }: { href: string; text: string; className?: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href || (href !== '/' && router.asPath.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`
        relative inline-block px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] font-bold transition-all
        ${isActive
          ? 'text-brand-primary'
          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
        }
        ${className}
      `}
    >
      <span className="relative z-10">{text}</span>
      {isActive && (
        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-primary" aria-hidden="true" />
      )}
    </Link>
  );
}

export default NavItem
