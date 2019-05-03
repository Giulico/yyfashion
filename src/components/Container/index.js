import React from 'react'

// Styles
import style from './Container.module.css'

const Container = ({ children }) => <div className={style.root}>{children}</div>

export default Container
