import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';

import NavMenu from '../NavMenu/NavMenu'

import './Header.scss';

/*              *
 *    Images    *
 *              */
//Logo src set
import logo from './img/350px-Headshot.jpg'
import highResLogo from './img/600px-Headshot.jpg'

//Title src set
import smallTitle from './img/270px-165px-square-PMR-Dev-no-border.jpg'
import mediumTitle from './img/310px-190px-square-PMR-Dev-no-border.jpg'
import largeTitle from './img/360px-220px-square-PMR-Dev-no-border.jpg'
import highResTitle from './img/720px-440px-square-PMR-Dev-no-border.jpg'

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
      scrollPositionY, windowWidth, hamburgerButton,
      handleNavClick, navIsOpen, bottomOfStationaryHeader, bottomOfHome,
      bottomOfClasses, bottomOfAbout, bottomOfAIML, heightOfStickyHeader,
      smallStickyLogo, mediumStickyLogo, largeStickyLogo, smallStickyTitle,
      mediumStickyTitle, largeStickyTitle
    } = this.props
    //Alt text for images for D.R.Y.
    const heroAltText = `Wide blue skies with modern wind turbines over earthen western scrublands`

    return (
      windowWidth > 600 ? (
        <div className="nav-container" id="home">
          <img
            className="pseudo-background"
            src={xSmallHeroImage}
            srcSet={`${xSmallHeroImage}  480w,
                     ${smallHeroImage}  960w,
                     ${mediumHeroImage}  1440w,
                     ${largeHeroImage}  2x`}
            sizes="(max-width:479px) 480px, (max-width:959px) 960px, (max-width:1439px) 1440px, 100vw"
            alt={heroAltText}/>
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
                  srcSet={`${logo},
                           ${highResLogo} 2x`}
                  className="logo large-display"
                  alt={`Profile headshot of Paul M Reese against a backdrop of
                      trees`} />
              </NavLink>
              <div className="title-container">
                <img
                  src={smallTitle}
                  srcSet= {`${smallTitle} 270w,
                            ${mediumTitle} 310w,
                            ${largeTitle} 360w,
                            ${highResTitle} 2x`}
                  sizes="35vw"
                  className="Header-image large-display"
                  alt={`"Paul M Reese, Developer" over a golden North Carolina
                      sunset`}/>

                <NavMenu
                  navIsOpen = { navIsOpen }
                  handleNavClick = { handleNavClick }
                  scrollPositionY = { scrollPositionY }
                  bottomOfHome = { bottomOfHome }
                  bottomOfClasses = { bottomOfClasses }
                  bottomOfAbout = { bottomOfAbout }
                  bottomOfAIML = { bottomOfAIML }
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
            srcSet={`${xSmallHeroImage}  480w,
                   ${smallHeroImage}  960w,
                   ${mediumHeroImage}  1440w,
                   ${largeHeroImage}  2x`}
            sizes="(max-width:479px) 480px, (max-width:959px) 960px, (max-width:1439px) 1440px, 100vw"
            alt={heroAltText}/>
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
                <img
                  src={ smallStickyLogo }
                  srcSet = {`${smallStickyLogo} 70w,
                             ${mediumStickyLogo} 130w,
                             ${largeStickyLogo} 2x`}
                  sizes = "15vw"
                  className="small-logo"
                  alt="Profile headshot of Paul M Reese" />
              </NavLink>
              <NavLink
                smooth
                to="#home"
                activeClassName="selected"
                tabIndex="-1">
                <img
                  src={ smallStickyTitle }
                  srcSet = {`${smallStickyTitle} 180w,
                             ${mediumStickyTitle} 360w,
                             ${largeStickyTitle} 2x`}
                  sizes = "40vw"
                  className="small-title"
                  alt="Paul M Reese" />
              </NavLink>
              <input
                type="image"
                onClick={ () => handleNavClick() }
                src={ hamburgerButton }
                alt="Navigation menu hamburger button"
                className="hamburger-button"/>
            </header>
          </div>

          <NavMenu
            navIsOpen = { navIsOpen }
            handleNavClick = { handleNavClick }
            scrollPositionY = { scrollPositionY }
            bottomOfHome = { bottomOfHome }
            bottomOfClasses = { bottomOfClasses }
            bottomOfAbout = { bottomOfAbout }
            bottomOfAIML = { bottomOfAIML }
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
