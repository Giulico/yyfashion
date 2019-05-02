import React from 'react'
import classNames from 'classnames'

// Style
import style from './Button.module.css'

const Button = ({ children, to, onClick }) => {
  const classes = classNames({
    [style.root]: true
  })

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
