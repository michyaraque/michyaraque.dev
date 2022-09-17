import React from 'react'
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';

const Tooltip = ({ message, children, ...props }: MDXTooltip) => {
  return (
    <span className="tooltip nowrap " data-tip={message}>

      <code className="border-2 hover:text-gray-400 hover:cursor-help">
        {children}
      </code>


      <FaInfoCircle color="#d1d1d1" size="16px" className="hover:cursor-help hover:fill-gray-400 absolute -top-1 -right-2 -z-0" />
    </span>
  )
}

Tooltip.propTypes = {
  message: PropTypes.string
};

export default Tooltip
