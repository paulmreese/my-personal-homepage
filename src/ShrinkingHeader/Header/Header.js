import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import NavMenu from '../NavMenu/NavMenu'

import './Header.scss';

import logo from './img/350px-black-logo.png'
import title from './img/720px-title-with-slogan-black.png'

class Header extends Component {

  handleResize = () => {
    const topOfStationaryHeader = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfStationaryHeader =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfStationaryHeader = topOfStationaryHeader +
      heightOfStationaryHeader
    this.props.updateStationaryHeader(bottomOfStationaryHeader)
  }

  render() {
    const {
      scrollPositionY, windowWidth, smallLogo, smallTitle, hamburgerButton,
      handleNavClick, navIsOpen, bottomOfStationaryHeader, bottomOfHome,
      bottomOfClasses, bottomOfAbout
    } = this.props

    return (
      windowWidth > 600 ? (
        <div className="nav-container">
          <div className="Header-container">
            <header className={scrollPositionY < bottomOfStationaryHeader ?
                "Header shown" : "Header hidden"}>

              <NavLink
                smooth
                to="#home"
                activeClassName="selected">
                <img
                  src={logo}
                  className="logo large-display"
                  alt="Your logo's description" />
              </NavLink>
              <div className="title-container">
                <img
                  src={title}
                  className="Header-image large-display"
                  alt="Large header for large displays" />

                <NavMenu
                  navIsOpen = { navIsOpen }
                  handleNavClick = { handleNavClick }
                  scrollPositionY = { scrollPositionY }
                  bottomOfHome = { bottomOfHome }
                  bottomOfClasses = { bottomOfClasses }
                  bottomOfAbout = { bottomOfAbout }
                  windowWidth = { windowWidth }/>

              </div>
            </header>
          </div>
        </div>
      ) : (
        <div className="nav-container">
          <div className="Header-container">
            <header className={scrollPositionY < bottomOfStationaryHeader ?
                "Header shown" : "Header hidden"}>

              <NavLink
                smooth
                to="#home"
                activeClassName="selected">
                <div className="small-logo-container">
                  <img src={smallLogo}
                    className="small-logo"
                    alt="Your logo's description" />
                  <img src={smallTitle}
                      className="small-title"
                      alt="A small stylized title to your page" />
                </div>
              </NavLink>

              <div className="hamburger-container" onClick={ () => handleNavClick() }>
                  <input
                    type="image"
                    src={ hamburgerButton }
                    alt="Navigation menu button"
                    className="hamburger-button"/>
              </div>

            </header>
          </div>

          <NavMenu
            navIsOpen = { navIsOpen }
            handleNavClick = { handleNavClick }
            scrollPositionY = { scrollPositionY }
            bottomOfHome = { bottomOfHome }
            bottomOfClasses = { bottomOfClasses }
            bottomOfAbout = { bottomOfAbout }/>

        </div>
      )
    );
  }

  componentDidMount() {
    const { debounce } = this.props
    window.addEventListener("DOMContentLoaded", this.handleResize)
    window.addEventListener('resize', debounce(this.handleResize, 32))
  }

  componentWillUnmount() {
    const { debounce } = this.props
    window.removeEventListener("DOMContentLoaded", this.handleResize)
    window.removeEventListener('resize', debounce(this.handleResize, 32))
  }
}

export default Header;
