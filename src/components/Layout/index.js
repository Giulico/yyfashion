import React from 'react'
import Helmet from 'react-helmet'
import Navbar from '../Navbar'
import useSiteMetadata from '../SiteMetadata'
import Provider from 'redhooks'

// Styles
import '../../styles/app.css'
import style from './Layout.module.css'

// Store
import store from '../../store'

// Components
import Logo from '../Logo'

// Img
import LogoImg from '../../assets/images/yy-logo.jpg'

const Layout = ({ children, pageContext }) => {
  const { title, description } = useSiteMetadata()
  if (pageContext && pageContext.template === 'index-page') {
    store.initialState.logo.pinned = true
  }
  return (
    <Provider store={store}>
      <Logo src={LogoImg} alt="Yellow and Yellow Fashion" />
      <Helmet title={title}>
        <html lang="en" />
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div className={style.main}>{children}</div>
    </Provider>
  )
}

export default Layout
