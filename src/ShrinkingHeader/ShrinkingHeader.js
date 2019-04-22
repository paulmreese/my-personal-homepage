import React, { Component } from 'react';

import Header from './Header/Header'
import StickyHeader from './StickyHeader/StickyHeader'

//Import shared images and pass them as props to children
import smallLogo from './img/130px-black-logo.png'
import smallTitle from './img/360px-black-title.png'
import hamburgerButton from './img/if-black-hamburger-icon.png'

class ShrinkingHeader extends Component {

  render() {

    const {
      scrollPositionY, windowWidth, bottomOfStationaryHeader, navIsOpen,
      bottomOfHome, debounce, updateStationaryHeader, handleNavClick
    } = this.props

    return (
      <section className="ShrinkingHeader">
        <Header
          scrollPositionY = { scrollPositionY }
          windowWidth = { windowWidth }
          bottomOfStationaryHeader = { bottomOfStationaryHeader }
          bottomOfHome = { bottomOfHome }
          debounce = { debounce }
          updateStationaryHeader = { updateStationaryHeader }
          navIsOpen = { navIsOpen }
          handleNavClick = { handleNavClick }

          smallLogo = { smallLogo }
          smallTitle = { smallTitle }
          hamburgerButton = { hamburgerButton }
          />
        <StickyHeader
          scrollPositionY = { scrollPositionY }
          windowWidth = { windowWidth }
          bottomOfStationaryHeader = { bottomOfStationaryHeader }
          bottomOfHome = { bottomOfHome }
          debounce = { debounce }
          updateStationaryHeader = { updateStationaryHeader }
          navIsOpen = { navIsOpen }
          handleNavClick = { handleNavClick }

          smallLogo = { smallLogo }
          smallTitle = { smallTitle }
          hamburgerButton = { hamburgerButton }
          />
      </section>
    )
  }
}

export default ShrinkingHeader;
