import { Wrapper, Metadata } from 'components/common/Layout'
import React from 'react'

const about = () => {
  return (
    <Wrapper
      meta={
        <Metadata
          title="About"
          description="About me"
        />
      }
    >
      <h1 className="text-2xl font-bold">
        About
      </h1>

    </Wrapper>
  )
}

export default about
