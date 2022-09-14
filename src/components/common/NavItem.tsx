import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { wrap } from 'utils';

const NavItem = ({ href, text }: {href: string, text: string}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={wrap(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden capitalize md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        {text}
      </a>
    </Link>
  );
}

export default NavItem
