import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

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

  const content = (
    <figure className={classes}>
      <Img fluid={fluid} />
      <figcaption className={style.caption}>
        <Button onClick={() => false}>{cta}</Button>
      </figcaption>
    </figure>
  )

  return ctaSrc.startsWith('http') ? (
    <a href={ctaSrc}>{content}</a>
  ) : (
    <Link to={ctaSrc}>{content}</Link>
  )
}

Card.propTypes = {
  cta: PropTypes.string.isRequired,
  ctaSrc: PropTypes.string.isRequired,
  ctaIcon: PropTypes.string,
  fluid: PropTypes.object.isRequired
}

export default Card
