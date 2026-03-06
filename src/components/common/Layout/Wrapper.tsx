import type { ReactNode } from "react";
import Navbar from "./Navbar";

import { Footer } from "components/common/Layout";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  prose?: boolean;
};

const Wrapper = ({ prose = true, ...props }: IMainProps) => (
  <div className="w-full min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 selection:bg-brand-primary selection:text-white transition-colors duration-300">
    {props.meta}
    <div className="mx-auto max-w-6xl flex flex-col px-4 md:px-12 relative">
      <Navbar />
      <main className={`grow ${prose ? 'prose dark:prose-invert max-w-none pb-8 prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-brand-primary' : 'w-full'}`}>
        {props.children}
      </main>
      <Footer />
    </div>
  </div>
);

export default Wrapper;
