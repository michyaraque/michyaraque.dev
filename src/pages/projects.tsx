import { Wrapper, Metadata } from 'components/common/Layout'
import React from 'react'

const projects = () => {
  return (
    <Wrapper
      meta={
        <Metadata
          title="Proyectos"
          description="Crear, innovar y compartir ideas"
        />
      }
    >
      <section aria-label="Header Section">
        <h1 className="text-4xl font-bold">
          Mis Proyectos
        </h1>
        <p className="mt-2">

        </p>
      </section>
      </Wrapper>
  )
}

export default projects
