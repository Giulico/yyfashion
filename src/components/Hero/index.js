import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import { useStore } from 'redhooks'

// Style
import style from './Hero.module.css'

const Hero = ({ alt, hero }) => {
  const { state } = useStore()
  const { logo } = state
  const claimClasses = classNames({
    [style.claim]: true,
    [style.visible]: !logo.pinned
  })
  return (
    <div className={style.root}>
      <h1 className={claimClasses}>New York</h1>
      <Img
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}
        imgStyle={{
          objectFit: 'cover',
          objectPosition: '50% 50%',
          filter: `grayscale(${logo.pinned ? '100%' : '0%'})`,
          transition: 'filter 1s ease'
        }}
        className={style.img}
        fluid={hero.childImageSharp.fluid}
        alt={alt}
      />
    </div>
  )
}

export default Hero
