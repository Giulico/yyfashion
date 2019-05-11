import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { navigate } from 'gatsby'

// Style
import style from './Button.module.css'

const Button = ({ children, type = 'button', to, onClick }) => {
  const classes = classNames({
    [style.root]: true
  })

  const clickHandler = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick()
    }
    if (typeof to === 'string' && to.length > 0) {
      navigate(to)
    }
  }, [to])

  return (
    <button type={type} className={classes} onClick={clickHandler}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
