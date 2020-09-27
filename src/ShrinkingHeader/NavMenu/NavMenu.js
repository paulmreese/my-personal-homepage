import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './NavMenu.scss'

class NavMenu extends Component {

  render() {

    const scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
      });
    }

    const {
      navIsOpen, handleNavClick, scrollPositionY, bottomOfHome, bottomOfAbout,
      bottomOfNews, bottomOfProjects, windowWidth, heightOfStickyHeader
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
            className={(scrollPositionY < bottomOfHome - heightOfStickyHeader) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            Home
          </NavLink>
          <NavLink
            smooth
            to="#about"
            className={(scrollPositionY >= bottomOfHome - heightOfStickyHeader &&
                        scrollPositionY < bottomOfAbout - heightOfStickyHeader) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => scrollWithOffset(el, heightOfStickyHeader)}>
            About
          </NavLink>
          <NavLink
            smooth
            to="#news"
            className={
              (scrollPositionY >= bottomOfAbout - heightOfStickyHeader) &&
               (scrollPositionY < bottomOfNews - heightOfStickyHeader) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => scrollWithOffset(el, heightOfStickyHeader)}>
            News
          </NavLink>
          <NavLink
            smooth
            to="#projects"
            className={
              (scrollPositionY >= bottomOfNews - heightOfStickyHeader) &&
               ((window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 2) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => scrollWithOffset(el, heightOfStickyHeader)}>
            Projects
          </NavLink>
          <NavLink
            smooth
            to="#contact"
            className={
              ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => scrollWithOffset(el, heightOfStickyHeader)}>
            Contact
          </NavLink>
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
