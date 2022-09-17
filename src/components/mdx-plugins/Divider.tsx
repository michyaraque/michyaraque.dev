import React from 'react'
import PropTypes from "prop-types";

const Divider = ({title, ...props}: MDXDivider) => {
  return (
    <div className={`divider mb-10`}>{title}</div>
  )
}

Divider.propTypes = {
  title: PropTypes.string,
};

export default Divider
