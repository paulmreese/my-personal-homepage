import React, { Component } from 'react';

import Header from './Header/Header'
import StickyHeader from './StickyHeader/StickyHeader'



/*              *
 *    Images    *
 *              */
//Import shared images and pass them as props to children
//add srcSets
import smallStickyLogo from './img/70px-Headshot.png'
import smallStickyLogoWebp from './img/70px-Headshot.webp'
import mediumStickyLogo from './img/130px-Headshot.png'
import mediumStickyLogoWebp from './img/130px-Headshot.webp'
import largeStickyLogo from './img/260px-Headshot.png'
import largeStickyLogoWebp from './img/260px-Headshot.webp'

import smallStickyTitle from './img/180px-Sunset-Title-PMR-light-border.png'
import smallStickyTitleWebp from './img/180px-Sunset-Title-PMR-light-border.webp'
import mediumStickyTitle from './img/360px-Sunset-Title-PMR-light-border.png'
import mediumStickyTitleWebp from './img/360px-Sunset-Title-PMR-light-border.webp'
import largeStickyTitle from './img/720px-Sunset-Title-PMR-light-border.png'
import largeStickyTitleWebp from './img/720px-Sunset-Title-PMR-light-border.webp'

import hamburgerButton from './img/if-black-hamburger-icon2.png'
import hamburgerButtonWebp from './img/if-black-hamburger-icon2.webp'

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
          //Shared images
          smallStickyLogo = { smallStickyLogo }
          smallStickyLogoWebp = { smallStickyLogoWebp }
          mediumStickyLogo = { mediumStickyLogo }
          mediumStickyLogoWebp = { mediumStickyLogoWebp }
          largeStickyLogo = { largeStickyLogo }
          largeStickyLogoWebp = { largeStickyLogoWebp }
          smallStickyTitle = { smallStickyTitle }
          smallStickyTitleWebp = { smallStickyTitleWebp }
          mediumStickyTitle = { mediumStickyTitle }
          mediumStickyTitleWebp = { mediumStickyTitleWebp }
          largeStickyTitle = { largeStickyTitle }
          largeStickyTitleWebp = { largeStickyTitleWebp }
          hamburgerButton = { hamburgerButton }
          hamburgerButtonWebp = { hamburgerButtonWebp }
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
          //Shared images
          smallStickyLogo = { smallStickyLogo }
          smallStickyLogoWebp = { smallStickyLogoWebp }
          mediumStickyLogo = { mediumStickyLogo }
          mediumStickyLogoWebp = { mediumStickyLogoWebp }
          largeStickyLogo = { largeStickyLogo }
          largeStickyLogoWebp = { largeStickyLogoWebp }
          smallStickyTitle = { smallStickyTitle }
          smallStickyTitleWebp = { smallStickyTitleWebp }
          mediumStickyTitle = { mediumStickyTitle }
          mediumStickyTitleWebp = { mediumStickyTitleWebp }
          largeStickyTitle = { largeStickyTitle }
          largeStickyTitleWebp = { largeStickyTitleWebp }
          hamburgerButton = { hamburgerButton }
          hamburgerButtonWebp = { hamburgerButtonWebp }
          />
      </section>
    )
  }
}

export default ShrinkingHeader;
