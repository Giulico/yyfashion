import React, { useCallback } from 'react'
import classNames from 'classnames'
import { navigate } from 'gatsby'

// Style
import style from './Button.module.css'

const Button = ({ children, to, onClick }) => {
  const classes = classNames({
    [style.root]: true
  })

  const clickHandler = useCallback(
    () => {
      typeof onClick === 'function' ? onClick() : navigate(to)
    },
    [to]
  )

  return (
    <button className={classes} onClick={clickHandler}>
      {children}
    </button>
  )
}

export default Button
