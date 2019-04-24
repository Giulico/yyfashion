import React from 'react'
import { Link } from 'gatsby'

// Style
import style from './NavbarItem.module.css'

const NavbarItem = ({ to, children, className, index }) => (
  <li className={style.root}>
    <Link to={to} className={`${style.link} ${className}`}>
      <span>{children}</span>
      <span className={style.counter}>{index.toString()}</span>
    </Link>
  </li>
)

export default NavbarItem
