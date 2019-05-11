import React from 'react'
import classNames from 'classnames'

// Styles
import style from './GridItem.module.css'

const GridItem = ({ className, large, children }) => {
  const classes = classNames({
    [style.root]: true,
    [className]: className,
    [style.large]: large
  })
  return <div className={classes}>{children}</div>
}

export default GridItem
