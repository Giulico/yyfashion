import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { useStore } from 'redhooks'
import { Link } from 'gatsby'

// Style
import style from './Logo.module.css'

const Logo = ({ src, alt }) => {
  const { state, dispatch } = useStore()
  const { logo } = state
  const isHome =
    typeof window !== 'undefined' &&
    window.location &&
    window.location.pathname === '/'
  const timeout = useRef()

  useEffect(() => {
    if (isHome) {
      document.body.style.overflow = 'hidden'
      timeout.current = setTimeout(() => {
        document.body.style.overflow = ''
        dispatch({ type: 'UNPIN_LOGO' })
      }, 2000)
    }
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const classes = classNames({
    [style.root]: true,
    [style.pinned]: logo.pinned
  })

  return (
    <Link to="/" title={alt} className={classes}>
      <img src={src} alt={alt} />
    </Link>
  )
}

export default Logo
