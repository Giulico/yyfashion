import React from 'react'
import Provider from 'redhooks'

import './src/styles/app.css'

// Store
import store from './src/store'

import Logo from './src/components/Logo'
// Img
import LogoImg from './src/assets/images/yy-logo.jpg'
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Provider store={store}>{element}</Provider>
    </>
  )
}
