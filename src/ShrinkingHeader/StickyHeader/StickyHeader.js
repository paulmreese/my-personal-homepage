import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ReactDOM from 'react-dom'

import NavMenu from '../NavMenu/NavMenu'

import './StickyHeader.scss'

class StickyHeader extends Component {

  handleResize = () => {
    const heightOfHeader =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    if (heightOfHeader > 0) {
      this.props.updateHeightOfStickyHeader(heightOfHeader)
      //console.log("HeightHeader:", heightOfHeader)
    }
  }

  render() {
    const {
      scrollPositionY, windowWidth, hamburgerButton,
      handleNavClick, bottomOfStationaryHeader, bottomOfHome, bottomOfClasses,
      bottomOfAbout, bottomOfAIML, bottomOfProjects, navIsOpen,
      heightOfStickyHeader, smallStickyLogo, mediumStickyLogo,
      largeStickyLogo, smallStickyTitle, mediumStickyTitle, largeStickyTitle,
      smallStickyLogoWebp, mediumStickyLogoWebp, largeStickyLogoWebp,
      smallStickyTitleWebp, mediumStickyTitleWebp, largeStickyTitleWebp
    } = this.props

    return (
      windowWidth > 600
        ? <div className={scrollPositionY >= bottomOfStationaryHeader
          ? navIsOpen
            ? (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
             (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
             ? "StickyHeader-container full-height blurred about-border"
             : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
              (scrollPositionY < (bottomOfAIML - heightOfStickyHeader)))
              ? "StickyHeader-container full-height blurred aiml-border"
              : (scrollPositionY >= (bottomOfAIML - heightOfStickyHeader - 30) &&
               (scrollPositionY < (bottomOfProjects - heightOfStickyHeader)))
               ? "StickyHeader-container full-height blurred golden-sand-border"
               : "StickyHeader-container full-height blurred"
            : (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
             (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
             ? "StickyHeader-container full-height about-border"
             : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
              (scrollPositionY < (bottomOfAIML - heightOfStickyHeader)))
              ? "StickyHeader-container full-height aiml-border"
              : (scrollPositionY >= (bottomOfAIML - heightOfStickyHeader - 30) &&
               (scrollPositionY < (bottomOfProjects - heightOfStickyHeader)))
               ? "StickyHeader-container full-height golden-sand-border"
               : "StickyHeader-container full-height"
          : "StickyHeader-container zero-height"}>
            <header className={scrollPositionY >= bottomOfStationaryHeader
              ? "StickyHeader shown"
              : "StickyHeader hidden"}>

              <NavLink
                smooth
                to="#home"
                className="round"
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
                className="square"
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

              <NavMenu
                navIsOpen = { navIsOpen }
                handleNavClick = { handleNavClick }
                scrollPositionY = { scrollPositionY }
                bottomOfHome = { bottomOfHome }
                bottomOfClasses = { bottomOfClasses }
                bottomOfAbout = { bottomOfAbout }
                bottomOfAIML = { bottomOfAIML }
                //If the page gets longer
                //bottomOfProjects = { bottomOfProjects }
                windowWidth = { windowWidth }
                heightOfStickyHeader = { heightOfStickyHeader }/>

            </header>
          </div>
         :
         <div className={scrollPositionY <= bottomOfStationaryHeader
           ? "StickyHeader-container zero-height"
           : navIsOpen
             ? (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
               (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
               ? "StickyHeader-container slim blurred about-border"
               : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
                (scrollPositionY < (bottomOfAIML - heightOfStickyHeader)))
                ? "StickyHeader-container slim blurred aiml-border"
                : (scrollPositionY >= (bottomOfAIML - heightOfStickyHeader - 30) &&
                 (scrollPositionY < (bottomOfProjects - heightOfStickyHeader)))
                 ? "StickyHeader-container slim blurred golden-sand-border"
                 : "StickyHeader-container slim blurred"
             : (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
               (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
               ? "StickyHeader-container slim about-border"
               : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
                (scrollPositionY < (bottomOfAIML - heightOfStickyHeader)))
                ? "StickyHeader-container slim aiml-border"
                : (scrollPositionY >= (bottomOfAIML - heightOfStickyHeader - 30) &&
                 (scrollPositionY < (bottomOfProjects - heightOfStickyHeader)))
                 ? "StickyHeader-container slim golden-sand-border"
                 : "StickyHeader-container slim"}>
          <header className={scrollPositionY >= bottomOfStationaryHeader
            ? "StickyHeader shown"
            : "StickyHeader hidden"}>

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
                alt="Nav-menu hamburger button"
                className="hamburger-button"/>

          </header>
        </div>
    )
  }

  componentDidMount() {
    const { debounce } = this.props
    window.addEventListener("DOMContentLoaded", this.handleResize)
    window.addEventListener('resize', debounce(this.handleResize, 32))
    window.addEventListener('scroll', debounce(this.handleResize, 32))
  }

  componentWillUnmount() {
    const { debounce } = this.props
    window.removeEventListener("DOMContentLoaded", this.handleResize)
    window.removeEventListener('resize', debounce(this.handleResize, 32))
    window.removeEventListener('scroll', debounce(this.handleResize, 32))
  }

}

export default StickyHeader
