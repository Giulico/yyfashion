import React from 'react'
import Provider from 'redhooks'

import './src/styles/app.css'

// Store
import store from './src/store'

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
