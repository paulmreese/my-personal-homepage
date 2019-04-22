import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './NavMenu.scss'

class NavMenu extends Component {
  render() {
    const {
      navIsOpen, handleNavClick, scrollPositionY, bottomOfHome, bottomOfClasses,
      bottomOfAbout, windowWidth
    } = this.props

    return (
      <div className = "NavMenu-container">
        <nav className={
            windowWidth > 600 ? "nav-menu"
              : navIsOpen
                ? "nav-menu show-nav unblur carbon-container"
                : "nav-menu hide-nav carbon-container"}>
          <NavLink
            smooth
            to="#home"
            className={(scrollPositionY < bottomOfHome - 50) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            Home
          </NavLink>
          <NavLink
            smooth
            to="#classes"
            className={
              (scrollPositionY >= bottomOfHome - 50 &&
                scrollPositionY < bottomOfClasses - 50) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            About
          </NavLink>
          <NavLink
            smooth
            to="#about"
            className={
              (scrollPositionY >= bottomOfClasses - 50 &&
                scrollPositionY < bottomOfAbout - 50) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            News
          </NavLink>
          <NavLink
            smooth
            to="#contact"
            className={
              (scrollPositionY >= bottomOfAbout - 50) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            Contact
          </NavLink>
          <a href="https://somemembersarea.xyz/hopefully-not-real-website"
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            Shop
          </a>
        </nav>
        <div
          className={ windowWidth > 600 ? "page-overlay hide-overlay"
            : navIsOpen
              ? "page-overlay show-overlay"
              : "page-overlay hide-overlay"}
          onClick={() => handleNavClick()}>
        </div>
      </div>
    )
  }
}

export default NavMenu
