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
      console.log("HeightHeader:", heightOfHeader)
    }
  }

  render() {
    const {
      scrollPositionY, windowWidth, smallLogo, smallTitle, hamburgerButton,
      handleNavClick, bottomOfStationaryHeader, bottomOfHome, bottomOfClasses,
      bottomOfAbout, bottomOfNews, bottomOfProjects, navIsOpen,
      heightOfStickyHeader
    } = this.props

    return (
      windowWidth > 600
        ? <div className={scrollPositionY >= bottomOfStationaryHeader
          ? navIsOpen
            ? (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
             (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
             ? "StickyHeader-container full-height blurred about-border"
             : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
              (scrollPositionY < (bottomOfNews - heightOfStickyHeader)))
              ? "StickyHeader-container full-height blurred news-border"
              : (scrollPositionY >= (bottomOfNews - heightOfStickyHeader - 30) &&
               (scrollPositionY < (bottomOfProjects - heightOfStickyHeader)))
               ? "StickyHeader-container full-height blurred golden-sand-border"
               : "StickyHeader-container full-height blurred"
            : (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
             (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
             ? "StickyHeader-container full-height about-border"
             : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
              (scrollPositionY < (bottomOfNews - heightOfStickyHeader)))
              ? "StickyHeader-container full-height news-border"
              : (scrollPositionY >= (bottomOfNews - heightOfStickyHeader - 30) &&
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
                <img src={ smallLogo }
                  className="small-logo"
                  alt="Your logo's description" />
              </NavLink>
              <NavLink
                smooth
                to="#home"
                className="square"
                activeClassName="selected"
                tabIndex="-1">
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
                bottomOfNews = { bottomOfNews }
                bottomOfProjects = { bottomOfProjects }
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
                (scrollPositionY < (bottomOfNews - heightOfStickyHeader)))
                ? "StickyHeader-container slim blurred news-border"
                : (scrollPositionY >= (bottomOfNews - heightOfStickyHeader - 30) &&
                 (scrollPositionY < (bottomOfProjects - heightOfStickyHeader)))
                 ? "StickyHeader-container slim blurred golden-sand-border"
                 : "StickyHeader-container slim blurred"
             : (scrollPositionY >= (bottomOfHome - heightOfStickyHeader) &&
               (scrollPositionY < (bottomOfAbout - heightOfStickyHeader)))
               ? "StickyHeader-container slim about-border"
               : (scrollPositionY >= (bottomOfAbout - heightOfStickyHeader) &&
                (scrollPositionY < (bottomOfNews - heightOfStickyHeader)))
                ? "StickyHeader-container slim news-border"
                : (scrollPositionY >= (bottomOfNews - heightOfStickyHeader - 30) &&
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
                <img src={ smallLogo }
                  className="small-logo"
                  alt="Your logo's description" />
              </NavLink>
              <NavLink
                smooth
                to="#home"
                activeClassName="selected"
                tabIndex="-1">
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
