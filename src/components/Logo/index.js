import React from 'react'
import classNames from 'classnames'
import { connect } from 'redhooks'
import { Link } from 'gatsby'

// Style
import style from './Logo.module.css'

class Logo extends React.Component {
  componentDidMount() {
    const { logo, pin, unPin } = this.props

    const isHome =
      typeof window !== 'undefined' &&
      window.location &&
      window.location.pathname === '/'

    if (isHome) {
      document.body.style.overflow = 'hidden'
      pin()
    }

    if (logo.pinned) {
      setTimeout(() => {
        document.body.style.overflow = ''
        unPin()
      }, 2000)
    }
  }

  render() {
    const { src, alt, logo } = this.props

    const imgClasses = classNames({
      [style.root]: true,
      [style.pinned]: true // logo.pinned
    })
    console.group('Logo')
    console.log('logo.pinned', logo.pinned)
    console.log(imgClasses)
    console.groupEnd()

    return (
      <Link to="/" title={alt} className={imgClasses}>
        <img src={src} alt={alt} />
      </Link>
    )
  }
}

const mapStateToProp = (state, ownProps) => ({
  logo: state.logo
})
const mapDispatchToProps = dispatch => ({
  pin: action => dispatch({ type: 'PIN_LOGO' }),
  unPin: action => dispatch({ type: 'UNPIN_LOGO' })
})

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Logo)
