import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useStore } from 'redhooks'
import { Link } from 'gatsby'
// Style
import style from './Logo.module.css'
console.log('style', style)

const Logo = ({ pinned, src, alt }) => {
  const { state, dispatch } = useStore()
  const { logo } = state

  console.log('Logo', logo)
  // componentDidMount
  useEffect(() => {
    console.log('Logo useEffect', logo)
    if (logo.pinned) {
      setTimeout(() => {
        console.log('Logo useEffect setTimeout callback', logo)
        dispatch({ type: 'UNPIN_LOGO' })
      }, 2000)
    }
  }, [])

  const imgClasses = classNames({
    [style.root]: true,
    [style.pinned]: logo.pinned
  })

  console.log('classes', imgClasses)

  return (
    <img
      className={`${style.root} ${logo.pinned ? style.pinned : ''}`}
      src={src}
      alt={alt}
    />
    // <Link to="/" title={alt}>
    //   <img className={imgClasses} src={src} alt={alt} />
    // </Link>
  )
}

export default Logo
