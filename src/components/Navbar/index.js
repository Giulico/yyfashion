import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import logo from '../../img/logo.svg'
import NavbarItem from './NavbarItem'

const Navbar = class extends React.Component {
  state = {
    active: false,
    navBarActiveClass: ''
  }

  render() {
    const { active } = this.state
    const burgerClasses = classNames({
      'is-active': active
    })
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${burgerClasses}`}
              data-target="navMenu"
              onClick={this.toggleHamburger}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <NavbarItem className="navbar-item" to="/about" index={1}>
                About
              </NavbarItem>
              <NavbarItem className="navbar-item" to="/products" index={2}>
                Products
              </NavbarItem>
              <NavbarItem className="navbar-item" to="/contact" index={3}>
                Contact
              </NavbarItem>
              <NavbarItem
                className="navbar-item"
                to="/contact/examples"
                index={4}
              >
                Form Examples
              </NavbarItem>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  toggleHamburger = () => {
    this.setState({
      active: !this.state.active
    })
  }
}

export default Navbar
