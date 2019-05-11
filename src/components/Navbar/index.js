import React from 'react'
import classNames from 'classnames'
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

        <div className={navbarClasses}>
          <ul className={style.items}>
            <NavbarItem className="navbar-item" to="/about" index={1}>
              Chi siamo
            </NavbarItem>
            <NavbarItem className="navbar-item" to="/collection" index={2}>
              Collezione
            </NavbarItem>
            <NavbarItem className="navbar-item" to="/contact" index={3}>
              Contattaci
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
