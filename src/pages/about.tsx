import { Wrapper, Metadata } from 'components/common/Layout'
import React from 'react'

const About = () => {
  return (
    <Wrapper
      prose={true}
      meta={
        <Metadata
          title="About"
          description="Michael Araque - Software Engineer & Architect"
        />
      }
    >
      <div className="py-12 flex flex-col gap-16">
        {/* Header */}
        <section className="flex flex-col gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <p className="text-brand-primary font-mono uppercase tracking-widest text-xs font-bold">sys.identity // Profile</p>
           </div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-zinc-900 dark:text-white font-display">
            About<span className="text-brand-primary underline decoration-8">.</span>
          </h1>
          <p className="text-zinc-500 max-w-xl text-lg font-mono uppercase tracking-tight">
            Comprehensive profile of the node operator and architect.
          </p>
        </section>

        {/* Content will go here via MDX or manual typing */}
        <div className="mt-8 font-mono text-sm uppercase tracking-widest text-zinc-400">
           [DATA_PENDING] // Waiting for operator input...
        </div>
      </div>
    </Wrapper>
  )
}

export default About
