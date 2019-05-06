import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useStore } from 'redhooks'
// import { Link } from 'gatsby'
// Style
import style from './Logo.module.css'

const isHome =
  typeof window !== 'undefined' &&
  window.location &&
  window.location.pathname === '/'

const Logo = ({ pinned, src, alt }) => {
  const { state, dispatch } = useStore()
  const { logo } = state

  // componentDidMount
  useEffect(() => {
    if (isHome) {
      document.body.style.overflow = 'hidden'
      dispatch({ type: 'PIN_LOGO' })
    }
    if (logo.pinned) {
      setTimeout(() => {
        document.body.style.overflow = ''
        dispatch({ type: 'UNPIN_LOGO' })
      }, 2000)
    }
  }, [])

  const imgClasses = classNames({
    [style.root]: true,
    [style.pinned]: logo.pinned
  })

  console.log(imgClasses)

  return (
    <a href="/" title={alt} className={imgClasses}>
      <img src={src} alt={alt} />
    </a>
  )
}

export default Logo
