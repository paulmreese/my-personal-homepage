import React, { Component } from 'react';

import Header from './Header/Header'
import StickyHeader from './StickyHeader/StickyHeader'

//Import shared images and pass them as props to children
import smallLogo from './img/130px-Headshot.png'
import smallTitle from './img/360px-Sunset-Title-light-border.png'
import hamburgerButton from './img/if-black-hamburger-icon2.png'

class ShrinkingHeader extends Component {

  render() {

    const {
      scrollPositionY, windowWidth, bottomOfStationaryHeader, navIsOpen,
      bottomOfHome, debounce, updateStationaryHeader, handleNavClick,
      updateHeightOfStickyHeader, heightOfStickyHeader, bottomOfAbout,
      bottomOfNews, bottomOfProjects
    } = this.props

    return (
      <section className="ShrinkingHeader">
        <Header
          scrollPositionY = { scrollPositionY }
          windowWidth = { windowWidth }
          bottomOfStationaryHeader = { bottomOfStationaryHeader }
          bottomOfHome = { bottomOfHome }
          bottomOfAbout = { bottomOfAbout }
          bottomOfNews = { bottomOfNews }
          bottomOfProjects = { bottomOfProjects }
          debounce = { debounce }
          updateStationaryHeader = { updateStationaryHeader }
          navIsOpen = { navIsOpen }
          handleNavClick = { handleNavClick }
          heightOfStickyHeader = { heightOfStickyHeader }
          smallLogo = { smallLogo }
          smallTitle = { smallTitle }
          hamburgerButton = { hamburgerButton }
          />
        <StickyHeader
          scrollPositionY = { scrollPositionY }
          windowWidth = { windowWidth }
          bottomOfStationaryHeader = { bottomOfStationaryHeader }
          bottomOfHome = { bottomOfHome }
          bottomOfNews = { bottomOfNews }
          bottomOfProjects = { bottomOfProjects }
          debounce = { debounce }
          updateStationaryHeader = { updateStationaryHeader }
          updateHeightOfStickyHeader = { updateHeightOfStickyHeader }
          heightOfStickyHeader = { heightOfStickyHeader }
          navIsOpen = { navIsOpen }
          handleNavClick = { handleNavClick }
          bottomOfAbout = { bottomOfAbout }
          smallLogo = { smallLogo }
          smallTitle = { smallTitle }
          hamburgerButton = { hamburgerButton }
          />
      </section>
    )
  }
}

export default ShrinkingHeader;
