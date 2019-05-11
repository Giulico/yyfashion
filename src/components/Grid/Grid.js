import React from 'react'
import classNames from 'classnames'

// Styles
import style from './Grid.module.css'

const Grid = ({ className, children, left }) => {
  const classes = classNames({
    [style.root]: true,
    [style.left]: left,
    [className]: className
  })
  return <div className={classes}>{children}</div>
}

export default Grid
