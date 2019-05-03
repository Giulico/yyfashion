import React from 'react'

// Styles
import style from './Grid.module.css'

const Grid = ({ className, children }) => (
  <div className={`${style.root} ${className}`}>{children}</div>
)

export default Grid
