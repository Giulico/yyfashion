import React from 'react'
import classNames from 'classnames'

// Style
import style from './Burger.module.css'

const Burger = ({ isActive, onClick }) => {
  const burgerClass = classNames({
    [style.root]: true,
    [style.active]: isActive
  })
  return (
    <button className={burgerClass} onClick={onClick}>
      <div className={style.inner}>
        <div className={`${style.line} ${style.lineHalf} ${style.lineStart}`} />
        <div className={style.line} />
        <div className={`${style.line} ${style.lineHalf} ${style.lineEnd}`} />
      </div>
    </button>
  )
}

export default Burger
