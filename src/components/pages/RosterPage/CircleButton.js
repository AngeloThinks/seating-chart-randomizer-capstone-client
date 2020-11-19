import React from 'react'
import './RosterButton.css'
import PropTypes from 'prop-types'

export default function NavCircleButton(props) {
  const { tag, className, children, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavCircleButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavCircleButton.defaultProps ={
  tag: 'a',
}
NavCircleButton.propTypes ={
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.string,PropTypes.func]),
  to: PropTypes.string,
  type: PropTypes.string,
}