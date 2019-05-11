import React from 'react'
import classNames from 'classnames'

// Styles
import style from './GridItem.module.css'

const GridItem = ({ className, large, left, children }) => {
  const classes = classNames({
    [style.root]: true,
    [className]: className,
    [style.large]: large,
    [style.left]: left
  })
  return <div className={classes}>{children}</div>
}

export default GridItem
