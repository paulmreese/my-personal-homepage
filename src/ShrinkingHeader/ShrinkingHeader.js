import React, { Component } from 'react';

import Header from './Header/Header'
import StickyHeader from './StickyHeader/StickyHeader'



/*              *
 *    Images    *
 *              */
//Import shared images and pass them as props to children
//add srcSets
import smallStickyLogo from './img/70px-Headshot.png'
import mediumStickyLogo from './img/130px-Headshot.png'
import largeStickyLogo from './img/260px-Headshot.png'

import smallStickyTitle from './img/180px-Sunset-Title-PMR-light-border.png'
import mediumStickyTitle from './img/360px-Sunset-Title-PMR-light-border.png'
import largeStickyTitle from './img/720px-Sunset-Title-PMR-light-border.png'

import hamburgerButton from './img/if-black-hamburger-icon2.png'

class ShrinkingHeader extends Component {

  render() {

    const {
      scrollPositionY, windowWidth, bottomOfStationaryHeader, navIsOpen,
      bottomOfHome, debounce, updateStationaryHeader, handleNavClick,
      updateHeightOfStickyHeader, heightOfStickyHeader, bottomOfAbout,
      bottomOfAIML, bottomOfProjects
    } = this.props

    return (
      <section className="ShrinkingHeader">
        <Header
          scrollPositionY = { scrollPositionY }
          windowWidth = { windowWidth }
          bottomOfStationaryHeader = { bottomOfStationaryHeader }
          bottomOfHome = { bottomOfHome }
          bottomOfAbout = { bottomOfAbout }
          bottomOfAIML = { bottomOfAIML }
          //For later, if there are added sections to make the page longer
          //bottomOfProjects = { bottomOfProjects }
          debounce = { debounce }
          updateStationaryHeader = { updateStationaryHeader }
          navIsOpen = { navIsOpen }
          handleNavClick = { handleNavClick }
          heightOfStickyHeader = { heightOfStickyHeader }
          smallStickyLogo = { smallStickyLogo }
          mediumStickyLogo = { mediumStickyLogo }
          largeStickyLogo = { largeStickyLogo }
          smallStickyTitle = { smallStickyTitle }
          mediumStickyTitle = { mediumStickyTitle }
          largeStickyTitle = { largeStickyTitle }
          hamburgerButton = { hamburgerButton }
          />
        <StickyHeader
          scrollPositionY = { scrollPositionY }
          windowWidth = { windowWidth }
          bottomOfStationaryHeader = { bottomOfStationaryHeader }
          bottomOfHome = { bottomOfHome }
          bottomOfAIML = { bottomOfAIML }
          bottomOfProjects = { bottomOfProjects }
          debounce = { debounce }
          updateStationaryHeader = { updateStationaryHeader }
          updateHeightOfStickyHeader = { updateHeightOfStickyHeader }
          heightOfStickyHeader = { heightOfStickyHeader }
          navIsOpen = { navIsOpen }
          handleNavClick = { handleNavClick }
          bottomOfAbout = { bottomOfAbout }
          smallStickyLogo = { smallStickyLogo }
          mediumStickyLogo = { mediumStickyLogo }
          largeStickyLogo = { largeStickyLogo }
          smallStickyTitle = { smallStickyTitle }
          mediumStickyTitle = { mediumStickyTitle }
          largeStickyTitle = { largeStickyTitle }
          hamburgerButton = { hamburgerButton }
          />
      </section>
    )
  }
}

export default ShrinkingHeader;
