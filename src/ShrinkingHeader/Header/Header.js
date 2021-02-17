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
import logoWebp from './img/350px-Headshot.jpg.webp'
import highResLogo from './img/600px-Headshot.jpg'
import highResLogoWebp from './img/600px-Headshot.jpg.webp'

//Title src set
import smallTitle from './img/270px-165px-square-PMR-Dev-no-border.jpg'
import smallTitleWebp from './img/270px-165px-square-PMR-Dev-no-border.jpg.webp'
import mediumTitle from './img/310px-190px-square-PMR-Dev-no-border.jpg'
import mediumTitleWebp from './img/310px-190px-square-PMR-Dev-no-border.jpg.webp'
import largeTitle from './img/360px-220px-square-PMR-Dev-no-border.jpg'
import largeTitleWebp from './img/360px-220px-square-PMR-Dev-no-border.jpg.webp'
import highResTitle from './img/720px-440px-square-PMR-Dev-no-border.jpg'
import highResTitleWebp from './img/720px-440px-square-PMR-Dev-no-border.jpg.webp'

//Hero Image src set
import largeHeroImage from './img/1920px-480px-Scrub-Sky-Turbines-Hero-Large.jpg'
import largeHeroImageWebp from './img/1920px-480px-Scrub-Sky-Turbines-Hero-Large.jpg.webp'
import mediumHeroImage from './img/1440px-360px-Scrub-Sky-Turbines-Hero-Large.jpg'
import mediumHeroImageWebp from './img/1440px-360px-Scrub-Sky-Turbines-Hero-Large.jpg.webp'
import smallHeroImage from './img/960px-240px-Scrub-Sky-Turbines-Hero-Large.jpg'
import smallHeroImageWebp from './img/960px-240px-Scrub-Sky-Turbines-Hero-Large.jpg.webp'
import xSmallHeroImage from './img/480px-120px-Scrub-Sky-Turbines-Hero-Large.jpg'
import xSmallHeroImageWebp from './img/480px-120px-Scrub-Sky-Turbines-Hero-Large.jpg.webp'

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
      mediumStickyTitle, largeStickyTitle, smallStickyLogoWebp,
      mediumStickyLogoWebp, largeStickyLogoWebp, smallStickyTitleWebp,
      mediumStickyTitleWebp, largeStickyTitleWebp
    } = this.props
    //Alt text for images for D.R.Y.
    const heroAltText = `Wide blue skies with modern wind turbines over earthen western scrublands`

    return (
      windowWidth > 600 ? (
        <div className="nav-container" id="home">
          <picture>
            <source media="(max-width: 480px)" srcSet={xSmallHeroImageWebp} type="image/webp"/>
            <source media="(min-width: 961px) and (min-device-pixel-ratio: 1.5), (min-width: 961px) and (min-resolution: 1.5dppx)" srcSet={largeHeroImageWebp} type="image/webp"/>
            <source media="(min-width: 961px)" srcSet={mediumHeroImageWebp} type="image/webp"/>
            <source media="(min-width: 481px)" srcSet={smallHeroImageWebp} type="image/webp"/>
            <source media="(max-width: 480px)" srcSet={xSmallHeroImage} type="image/jpeg"/>
            <source media="(min-width: 961px) and (min-device-pixel-ratio: 1.5), (min-width: 961px) and (min-resolution: 1.5dppx)" srcSet={largeHeroImage} type="image/jpeg"/>
            <source media="(min-width: 961px)" srcSet={mediumHeroImage} type="image/jpeg"/>
            <source media="(min-width: 481px)" srcSet={smallHeroImage} type="image/jpeg"/>
            <img
              className="pseudo-background"
              src={xSmallHeroImage}
              srcSet={`${xSmallHeroImage}  480w,
                       ${smallHeroImage}  960w,
                       ${mediumHeroImage}  1440w,
                       ${largeHeroImage}  2x`}
              sizes="(max-width:479px) 480px, (max-width:959px) 960px, (max-width:1439px) 1440px, 100vw"
              alt={heroAltText}
              height="360px"/>
          </picture>
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
                <picture>
                  <source media="((min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx))" srcSet={highResLogoWebp} type="image/webp"/>
                  <source media="()" srcSet={logoWebp} type="image/webp"/>
                  <source media="((min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx))" srcSet={highResLogo} type="image/jpeg"/>
                  <source media="()" srcSet={logo} type="image/jpeg"/>
                  <img
                    src={logo}
                    srcSet={`${logo},
                             ${highResLogo} 2x`}
                    className="logo large-display"
                    alt={`Profile headshot of Paul M Reese against a backdrop of
                        trees`}
                    height="240px"/>
                </picture>
              </NavLink>
              <div className="title-container">
                <picture>
                  <source media="(max-width: 749px)" srcSet={smallTitleWebp} type="image/webp"/>
                  <source media="(min-width: 1000px) and (min-device-pixel-ratio: 1.5), (min-width: 1000px) and (min-resolution: 1.5dppx)" srcSet={highResTitleWebp} type="image/webp"/>
                  <source media="(min-width: 1000px)" srcSet={largeTitleWebp} type="image/webp"/>
                  <source media="(min-width: 750px)" srcSet={mediumTitleWebp} type="image/webp"/>
                  <source media="(max-width: 749px)" srcSet={smallTitle} type="image/jpeg"/>
                  <source media="(min-width: 1000px) and (min-device-pixel-ratio: 1.5), (min-width: 1000px) and (min-resolution: 1.5dppx)" srcSet={highResTitle} type="image/jpeg"/>
                  <source media="(min-width: 1000px)" srcSet={largeTitle} type="image/jpeg"/>
                  <source media="(min-width: 750px)" srcSet={mediumTitle} type="image/jpeg"/>
                  <img
                    src={smallTitle}
                    srcSet= {`${smallTitle} 270w,
                              ${mediumTitle} 310w,
                              ${largeTitle} 360w,
                              ${highResTitle} 2x`}
                    sizes="35vw"
                    className="Header-image large-display"
                    alt={`"Paul M Reese, Developer" over a golden North Carolina
                          sunset`}
                    height="200px"/>
                </picture>

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
          <picture>
            <source media="(max-width: 480px)" srcSet={xSmallHeroImageWebp} type="image/webp"/>
            <source media="(min-width: 961px) and (min-device-pixel-ratio: 1.5), (min-width: 961px) and (min-resolution: 1.5dppx)" srcSet={largeHeroImageWebp} type="image/webp"/>
            <source media="(min-width: 961px)" srcSet={mediumHeroImageWebp} type="image/webp"/>
            <source media="(min-width: 481px)" srcSet={smallHeroImageWebp} type="image/webp"/>
            <source media="(max-width: 480px)" srcSet={xSmallHeroImage} type="image/jpeg"/>
            <source media="(min-width: 961px) and (min-device-pixel-ratio: 1.5), (min-width: 961px) and (min-resolution: 1.5dppx)" srcSet={largeHeroImage} type="image/jpeg"/>
            <source media="(min-width: 961px)" srcSet={mediumHeroImage} type="image/jpeg"/>
            <source media="(min-width: 481px)" srcSet={smallHeroImage} type="image/jpeg"/>
            <img
              className="pseudo-background"
              src={xSmallHeroImage}
              srcSet={`${xSmallHeroImage}  480w,
                     ${smallHeroImage}  960w,
                     ${mediumHeroImage}  1440w,
                     ${largeHeroImage}  2x`}
              sizes="(max-width:479px) 480px, (max-width:959px) 960px, (max-width:1439px) 1440px, 100vw"
              alt={heroAltText}
              height="240px"/>
          </picture>
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
                <picture>
                  <source media="(max-width: 500px)" srcSet={smallStickyLogoWebp} type="image/webp"/>
                  <source media="(min-width: 501px) and (min-device-pixel-ratio: 1.5), (min-width: 501px) and (min-resolution: 1.5dppx)" srcSet={largeStickyLogoWebp} type="image/webp"/>
                  <source media="(min-width: 501px)" srcSet={mediumStickyLogoWebp} type="image/webp"/>
                  <source media="(max-width: 500px)" srcSet={smallStickyLogo} type="image/jpeg"/>
                  <source media="(min-width: 501px) and (min-device-pixel-ratio: 1.5), (min-width: 501px) and (min-resolution: 1.5dppx)" srcSet={largeStickyLogo} type="image/jpeg"/>
                  <source media="(min-width: 501px)" srcSet={mediumStickyLogo} type="image/jpeg"/>
                  <img
                    src={ smallStickyLogo }
                    srcSet = {`${smallStickyLogo} 70w,
                               ${mediumStickyLogo} 130w,
                               ${largeStickyLogo} 2x`}
                    sizes = "15vw"
                    className="small-logo"
                    height="68px"
                    alt="Profile headshot of Paul M Reese" />
                </picture>
              </NavLink>
              <NavLink
                smooth
                to="#home"
                activeClassName="selected"
                tabIndex="-1">
                <picture>
                  <source media="(max-width: 450px)" srcSet={smallStickyTitleWebp} type="image/webp"/>
                  <source media="(min-width: 451px)" srcSet={mediumStickyTitleWebp} type="image/webp"/>
                  <source media="(min-width: 451px) and (min-device-pixel-ratio: 1.5), (min-width: 451px) and (min-resolution: 1.5dppx)" srcSet={largeStickyTitleWebp} type="image/webp"/>
                  <source media="(max-width: 450px)" srcSet={smallStickyTitle} type="image/jpeg"/>
                  <source media="(min-width: 451px)" srcSet={mediumStickyTitle} type="image/jpeg"/>
                  <source media="(min-width: 451px) and (min-device-pixel-ratio: 1.5), (min-width: 451px) and (min-resolution: 1.5dppx)" srcSet={largeStickyTitle} type="image/jpeg"/>
                  <img
                    src={ smallStickyTitle }
                    srcSet = {`${smallStickyTitle} 180w,
                               ${mediumStickyTitle} 360w,
                               ${largeStickyTitle} 2x`}
                    sizes = "40vw"
                    className="small-title"
                    alt="Paul M Reese"
                    height="80px"/>
                </picture>
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
