import React from 'react'

const ImageMDX = (props: MDXImage) => {
  return (
    <div className="w-full relative select-none pointer-events-none flex">
      <img {...props} />
    </div>
  )
}

export default ImageMDX
