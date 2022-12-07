import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { wrap } from 'utils';

const NavItem = ({ href, text }: {href: string, text: string}) => {
  const router = useRouter();
  const isActive = router.route ===  href.toLowerCase();

  return (
    <Link href={href}>
      <a
        className={wrap(
          isActive
            ? 'font-semibold text-zinc-800 dark:text-zinc-200'
            : 'font-normal text-zinc-600 dark:text-zinc-300',
          'hidden capitalize md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-brand-primary-100 hover:text-white dark:hover:bg-zinc-800 transition-all'
        )}
      >
        {text}
      </a>
    </Link>
  );
}

export default NavItem
