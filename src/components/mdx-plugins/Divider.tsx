import React from 'react'

const Divider = (props: any) => {
  const {title = '', ...rest} = props;
  return (
    <div className={`divider mb-10`}>{title}</div>
  )
}

export default Divider
