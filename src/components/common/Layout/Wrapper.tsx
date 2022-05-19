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
    <div className="mx-auto max-w-2xl flex flex-col justify-center px-8 dark:bg-gray-900">
      <div className="pt-8 pb-4"/>
      <Navbar/>
      <div className="content py-5 text-xl">{props.children}</div>
      <Footer />
    </div>
  </div>
);

export default Wrapper;
