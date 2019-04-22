import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import NavMenu from '../NavMenu/NavMenu'

import './StickyHeader.scss'

class StickyHeader extends Component {

  render() {
    const {
      scrollPositionY, windowWidth, smallLogo, smallTitle, hamburgerButton,
      handleNavClick, bottomOfStationaryHeader, bottomOfHome, bottomOfClasses,
      bottomOfAbout, navIsOpen
    } = this.props

    return (
      windowWidth > 600
        ? <div className={scrollPositionY >= bottomOfStationaryHeader ?
            "StickyHeader-container full-height" : "StickyHeader-container zero-height"}>
            <header className={scrollPositionY >= bottomOfStationaryHeader ?
              "StickyHeader shown" : "StickyHeader hidden"}>

              <NavLink
                smooth
                to="#home"
                activeClassName="selected">
                <img src={ smallLogo }
                  className="small-logo"
                  alt="Your logo's description" />
              </NavLink>
              <NavLink
                smooth
                to="#home"
                activeClassName="selected">
                <img src={ smallTitle }
                    className="small-title"
                    alt="Your page/business title" />
              </NavLink>

              <NavMenu
                navIsOpen = { navIsOpen }
                handleNavClick = { handleNavClick }
                scrollPositionY = { scrollPositionY }
                bottomOfHome = { bottomOfHome }
                bottomOfClasses = { bottomOfClasses }
                bottomOfAbout = { bottomOfAbout }
                windowWidth = { windowWidth }/>

            </header>
          </div>
         :
         <div className={scrollPositionY <= bottomOfStationaryHeader ?
           "StickyHeader-container zero-height" : "StickyHeader-container"}>
          <header className={scrollPositionY >= bottomOfStationaryHeader ?
              "StickyHeader shown" : "StickyHeader hidden"}>

              <NavLink
                smooth
                to="#home"
                activeClassName="selected">
                <img src={ smallLogo }
                  className="small-logo"
                  alt="Your logo's description" />
              </NavLink>
              <NavLink
                smooth
                to="#home"
                activeClassName="selected">
                <img src={ smallTitle }
                    className="small-title"
                    alt="Your page/business title" />
              </NavLink>
              <input
                type="image"
                onClick={ () => handleNavClick() }
                src={ hamburgerButton }
                alt="Nav-menu hamburger button"
                className="hamburger-button"/>

          </header>
        </div>
    )
  }
}

export default StickyHeader
