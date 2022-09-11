import React from 'react'
import Image from 'next/image'

const ImageMDX = (props: any) => {
  return (
    <div className="w-full relative select-none pointer-events-none flex">
      <Image objectFit="cover" {...props} />
    </div>
  )
}

export default ImageMDX
