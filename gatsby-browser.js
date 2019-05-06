import React from 'react'
import Provider from 'redhooks'
import { ParallaxProvider } from 'react-scroll-parallax'

import './src/styles/app.css'

// Store
import store from './src/store'

import Logo from './src/components/Logo'
// Img
import LogoImg from './src/assets/images/yy-logo.jpg'
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <ParallaxProvider>
        <Provider store={store}>
          <Logo src={LogoImg} alt="Yellow and Yellow Fashion" />
          {element}
        </Provider>
      </ParallaxProvider>
    </>
  )
}
