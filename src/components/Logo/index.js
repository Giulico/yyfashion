import React from 'react'
import classNames from 'classnames'
import { connect } from 'redhooks'
import { Link } from 'gatsby'

// Style
import style from './Logo.module.css'

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.isHome =
      typeof window !== 'undefined' &&
      window.location &&
      window.location.pathname === '/'

    this.state = {
      isPinned: this.isHome
    }
  }

  componentDidMount() {
    const { logo, pin, unPin } = this.props

    if (this.isHome) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        document.body.style.overflow = ''
        this.setState({ isPinned: false })
      }, 2000)
    }
  }

  render() {
    const { src, alt, logo } = this.props
    const { isPinned } = this.state

    const classes = classNames({
      [style.root]: true,
      [style.pinned]: isPinned
    })

    console.group('Logo')
    console.log('isPinned', isPinned)
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
  pin: action => dispatch({ type: 'PIN_LOGO' }),
  unPin: action => dispatch({ type: 'UNPIN_LOGO' })
})

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Logo)
