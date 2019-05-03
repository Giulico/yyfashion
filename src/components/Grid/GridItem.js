import React from 'react'

// Styles
import style from './GridItem.module.css'

const GridItem = ({ className, children }) => (
  <div className={`${style.root} ${className ? className : ''}`}>
    {children}
  </div>
)

export default GridItem
