import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import NavMenu from '../NavMenu/NavMenu'

import './Header.scss';

/*              *
 *    Images    *
 *              */
//Logo src set
import logo from './img/350px-Headshot.png'
import highResLogo from './img/600px-Headshot.png'

//Title src set
import smallTitle from './img/270px-165px-square-PMR-Dev-no-border.png'
import mediumTitle from './img/310px-190px-square-PMR-Dev-no-border.png'
import largeTitle from './img/360px-220px-square-PMR-Dev-no-border.png'
import highResTitle from './img/720px-440px-square-PMR-Dev-no-border.png'

//Hero Image src set
import largeHeroImage from './img/1920px-480px-Scrub-Sky-Turbines-Hero-Large.jpg'
import mediumHeroImage from './img/1440px-360px-Scrub-Sky-Turbines-Hero-Large.jpg'
import smallHeroImage from './img/960px-240px-Scrub-Sky-Turbines-Hero-Large.jpg'
import xSmallHeroImage from './img/480px-120px-Scrub-Sky-Turbines-Hero-Large.jpg'

class Header extends Component {

  handleResize = () => {
    const topOfStationaryHeader = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfStationaryHeader =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfStationaryHeader = topOfStationaryHeader +
      heightOfStationaryHeader
    this.props.updateStationaryHeader(bottomOfStationaryHeader)
  }

  //bottomOfProjects for later
  render() {
    const {
      scrollPositionY, windowWidth, smallLogo, smallTitle, hamburgerButton,
      handleNavClick, navIsOpen, bottomOfStationaryHeader, bottomOfHome,
      bottomOfClasses, bottomOfAbout, bottomOfNews, heightOfStickyHeader
    } = this.props

    return (
      windowWidth > 600 ? (
        <div className="nav-container" id="home">
        <img
          className="pseudo-background"
          src={xSmallHeroImage}
          srcset={`${xSmallHeroImage}  480w,
                 ${smallHeroImage}  960w,
                 ${mediumHeroImage}  1440w,
                 ${largeHeroImage}  1920w`}
          sizes="100vw"/>
        <div className="pseudo-background-overlay">
          </div>
          <div className="Header-container">
            <header className={scrollPositionY < bottomOfStationaryHeader
              ? navIsOpen
                ? "Header shown blurred"
                : "Header shown"
              : "Header hidden"}>

              <NavLink
                smooth
                to="#home"
                className="round"
                activeClassName="selected">
                <img
                  src={logo}
                  srcSet={`{logo} 1x,
                            {highResLogo} 2x`}
                  className="logo large-display"
                  alt={`Profile headshot of Paul M Reese against a backdrop of
                      trees`} />
              </NavLink>
              <div className="title-container">
                <img
                  src={title}
                  srcSet= {`{smallTitle} 270px,
                            {mediumTitle} 310px,
                            {largeTitle} 360px,
                            {highResTitle} 2x`}
                  className="Header-image large-display"
                  alt="Large header for large displays" />

                <NavMenu
                  navIsOpen = { navIsOpen }
                  handleNavClick = { handleNavClick }
                  scrollPositionY = { scrollPositionY }
                  bottomOfHome = { bottomOfHome }
                  bottomOfClasses = { bottomOfClasses }
                  bottomOfAbout = { bottomOfAbout }
                  bottomOfNews = { bottomOfNews }
                  //For later use, if the page lengthens
                  //bottomOfProjects = { bottomOfProjects }
                  windowWidth = { windowWidth }
                  heightOfStickyHeader = { heightOfStickyHeader }/>

              </div>
            </header>
          </div>

        </div>
      ) : (
        <div className="nav-container" id="home">
          <img
            className="pseudo-background"
            src={xSmallHeroImage}
            srcset={`${xSmallHeroImage}  480w,
                   ${smallHeroImage}  960w,
                   ${mediumHeroImage}  1440w,
                   ${largeHeroImage}  1920w`}
            sizes="100vw"/>
          <div className="pseudo-background-overlay">
          </div>
          <div className="Header-container">
            <header className={scrollPositionY < bottomOfStationaryHeader
              ? navIsOpen
                ? "Header shown blurred"
                : "Header shown"
              : "Header hidden"}>

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
          <d>
          </d>

          <NavMenu
            navIsOpen = { navIsOpen }
            handleNavClick = { handleNavClick }
            scrollPositionY = { scrollPositionY }
            bottomOfHome = { bottomOfHome }
            bottomOfClasses = { bottomOfClasses }
            bottomOfAbout = { bottomOfAbout }
            bottomOfNews = { bottomOfNews }
            //Same Reason, for later if the page gets longer
            //bottomOfProjects = { bottomOfProjects }
            windowWidth = { windowWidth }
            heightOfStickyHeader = { heightOfStickyHeader }/>

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
