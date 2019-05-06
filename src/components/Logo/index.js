import React from 'react'
import classNames from 'classnames'
import { connect } from 'redhooks'
import { Link } from 'gatsby'

// Style
import style from './Logo.module.css'

class Logo extends React.Component {
  componentDidMount() {
    const { logo, pin, unPin } = this.props

    this.isHome =
      typeof window !== 'undefined' &&
      window.location &&
      window.location.pathname === '/'

    if (this.isHome) {
      document.body.style.overflow = 'hidden'
      // setTimeout(() => {
      //   document.body.style.overflow = ''
      //   unPin()
      // }, 2000)
      setInterval(() => {
        if (this.props.logo.pinned) {
          document.body.style.overflow = ''
          unPin()
        } else {
          document.body.style.overflow = 'hidden'
          pin()
        }
      }, 2000)
    }
  }

  render() {
    const { src, alt, logo } = this.props

    const classes = classNames({
      [style.root]: true,
      [style.pinned]: logo.pinned
    })

    console.group('Logo')
    console.log('logo.pinned', logo.pinned)
    console.log(classes)
    console.groupEnd()

    return (
      <Link to="/" title={alt} className={classes}>
        <p
          style={{
            color: 'white',
            whiteSpace: 'nowrap',
            backgroundColor: 'black'
          }}
        >
          {classes}
        </p>
        <img src={src} alt={alt} />
      </Link>
    )
  }
}

const mapStateToProp = (state, ownProps) => ({
  logo: state.logo
})
const mapDispatchToProps = dispatch => ({
  unPin: action => dispatch({ type: 'UNPIN_LOGO' }),
  pin: action => dispatch({ type: 'PIN_LOGO' })
})

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Logo)

// export default Logo
