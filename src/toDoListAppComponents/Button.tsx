import React from 'react'
import PropTypes from 'prop-types'

type ButtonProps = {
  color: string
  text: string
  onClick: () => void
}

const Button = ({ color, text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  )
}

export default Button
