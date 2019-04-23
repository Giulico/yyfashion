import React from 'react'
import { Link } from 'gatsby'

const NavbarItem = ({ to, children, className, index }) => (
  <Link to={to} className={className}>
    <span>{children}</span>
    <span>{index.toString()}</span>
  </Link>
)

export default NavbarItem
