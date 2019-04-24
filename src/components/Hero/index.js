import React from 'react'
import Img from 'gatsby-image'

// Style
import style from './Hero.module.css'

const Hero = ({ alt, hero }) => {
  return (
    <div className={style.root}>
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
          objectPosition: '50% 50%'
        }}
        className={style.img}
        fluid={hero.childImageSharp.fluid}
        alt={alt}
      />
    </div>
  )
}

export default Hero
