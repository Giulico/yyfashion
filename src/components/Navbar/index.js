import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import logo from '../../img/logo.svg'
import NavbarItem from './NavbarItem'

// Style
import style from './Navbar.module.css'

// Components
import Burger from '../Burger'

const Navbar = class extends React.Component {
  state = {
    active: false
  }

  render() {
    const { active } = this.state
    const navbarClasses = classNames({
      [style.navbar]: true,
      [style.active]: active
    })

    return (
      <nav
        className={style.root}
        role="navigation"
        aria-label="main-navigation"
      >
        <Burger isActive={active} onClick={this.toggleHamburger} />

        <div className={style.brand}>
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </Link>
        </div>
        <div className={navbarClasses}>
          <ul className={style.items}>
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
          </ul>
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
