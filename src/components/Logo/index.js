import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

// Style
import style from './Logo.module.css'

const Logo = ({ pinned, src, alt }) => {
  const imgClasses = classNames({
    [style.root]: true,
    [style.pinned]: pinned
  })

  return (
    <Link to="/" title={alt}>
      <img className={imgClasses} src={src} alt={alt} />
    </Link>
  )
}

export default Logo
