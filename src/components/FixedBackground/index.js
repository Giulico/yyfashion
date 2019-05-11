import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Style
import style from './FixedBackground.module.css'

const FixedBackground = ({ alt, image }) => (
  <Img
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    }}
    imgStyle={{
      objectFit: 'cover',
      objectPosition: '50% 50%'
    }}
    className={style.root}
    fluid={image}
    alt={alt}
  />
)

FixedBackground.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

export default FixedBackground
