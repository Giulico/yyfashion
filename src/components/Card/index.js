import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Components
import Button from '../Button'

// Style
import style from './Card.module.css'

const Card = ({ cta, ctaSrc, ctaIcon, fluid, className, modifier }) => {
  const classes = classNames({
    [style.root]: true,
    [className]: className,
    [style[modifier]]: modifier
  })

  return (
    <figure className={classes}>
      <Img fluid={fluid} />
      <figcaption className={style.caption}>
        <Button to={ctaSrc}>{cta}</Button>
      </figcaption>
    </figure>
  )
}

Card.propTypes = {
  cta: PropTypes.string.isRequired,
  ctaSrc: PropTypes.string.isRequired,
  ctaIcon: PropTypes.string,
  fluid: PropTypes.object.isRequired
}

export default Card
