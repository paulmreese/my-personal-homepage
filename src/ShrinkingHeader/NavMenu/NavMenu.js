import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './NavMenu.scss'

class NavMenu extends Component {

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {

    //bottomOfProjects for later
    const {
      navIsOpen, handleNavClick, scrollPositionY, bottomOfHome, bottomOfAbout,
      bottomOfAIML, windowWidth, heightOfStickyHeader
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
            title="Home"
            to="#home"
            className={(scrollPositionY < bottomOfHome - heightOfStickyHeader) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}>
            Home
          </NavLink>
          <NavLink
            smooth
            title="About"
            to="#about"
            className={(scrollPositionY >= bottomOfHome - heightOfStickyHeader &&
                        scrollPositionY < bottomOfAbout - heightOfStickyHeader) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => this.scrollWithOffset(el, heightOfStickyHeader)}>
            About
          </NavLink>
          <NavLink
            smooth
            title="AI/ML"
            to="#aiml"
            className={
              (scrollPositionY >= bottomOfAbout - heightOfStickyHeader) &&
               (scrollPositionY < bottomOfAIML - heightOfStickyHeader) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => this.scrollWithOffset(el, heightOfStickyHeader)}>
            AI/ML
          </NavLink>
          <NavLink
            smooth
            title="Projects"
            to="#projects"
            className={
              (scrollPositionY >= bottomOfAIML - heightOfStickyHeader) &&
               ((window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 2) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => this.scrollWithOffset(el, heightOfStickyHeader)}>
            Projects
          </NavLink>
          <NavLink
            smooth
            title="Contact"
            to="#contact"
            className={
              ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) ? "selected" : "" }
            onClick={windowWidth > 600 ? null : () => handleNavClick()}
            scroll={el => this.scrollWithOffset(el, heightOfStickyHeader)}>
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
