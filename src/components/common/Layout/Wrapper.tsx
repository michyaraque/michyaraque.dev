import Link from 'next/link';
import type { ReactNode } from 'react';
import Navbar from './Navbar';

import { Footer } from 'components/common/Layout';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Wrapper = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    <div className="mx-auto max-w-5xl flex flex-col justify-center px-4 md:px-8 dark:bg-gray-900">
      <div className="pt-8 pb-4"/>
      <Navbar/>
      <div className="content text-xl prose dark:prose-dark">{props.children}</div>
      <Footer />
    </div>
  </div>
);

export default Wrapper;
