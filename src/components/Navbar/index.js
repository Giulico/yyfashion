import React from 'react'
import classNames from 'classnames'

// Style
import style from './Navbar.module.css'

// Components
import Burger from '../Burger'
import NavbarItem from './NavbarItem'

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
            <NavbarItem
              className="navbar-item"
              onClick={this.itemClickHandler}
              to="/about"
              index={1}
            >
              Chi siamo
            </NavbarItem>
            <NavbarItem
              className="navbar-item"
              onClick={this.itemClickHandler}
              to="/collection"
              index={2}
            >
              Collezione
            </NavbarItem>
            <NavbarItem
              className="navbar-item"
              onClick={this.itemClickHandler}
              to="/contact"
              index={3}
            >
              Contatti
            </NavbarItem>
          </ul>
        </div>
      </nav>
    )
  }

  itemClickHandler = e => {
    this.setState({
      active: false
    })
  }

  toggleHamburger = () => {
    this.setState({
      active: !this.state.active
    })
  }
}

export default Navbar
