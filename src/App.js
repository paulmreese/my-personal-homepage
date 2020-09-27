import React, { Component } from 'react';

import './App.css';

import ShrinkingHeader from './ShrinkingHeader/ShrinkingHeader'
import HeroImage from './HeroImage/HeroImage'

import ImageFocusAnimation from './ImageFocusAnimation/ImageFocusAnimation'

import CallToAction from './CallToAction/CallToAction'
import VibrantSkylineTurbines from './img/Sunset-Turbines-Narrow.jpg'
import MirroredGlassTruck from './img/Mirrored-Glass-Truck-Hero-Large.jpg'
import TrilliumImage from './img/Trillium-4032px-1530px.jpg'
import NCSunsetImage from './img/Sunset-Edited-4032x1176.jpg'

import Introduction from './Introduction/Introduction'

import News from './News/News'

import Projects from './Projects/Projects'

import Footer from './Footer/Footer'

class App extends Component {

  //Thanks to agm1984
  //https://gist.github.com/agm1984/092ce379180e94bd13301bb33dbcd29f
  /**
   * This utility function allows function calls to be debounced.
   * @param {Function} func Function that requires debouncing
   * @param {Number} wait Wait time in milliseconds between successive invocations
   */
  debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

  handleNavClick = () => {
    this.state.navIsOpen
      ? this.setState({ navIsOpen : false })
      : this.setState({ navIsOpen : true })
  }

  handleResize = () => {
    const windowWidth = +window.innerWidth / +window.devicePixelRatio
    console.log("window width: " + windowWidth)
    //console.log("Y" + typeof this.state.scrollPositionY + " bottoms:" + typeof this.state.bottomOfHome)
    if (this.state.navIsOpen  && windowWidth > 600) {this.handleNavClick()}
    return this.setState({ windowWidth })
  }

  handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY
    console.log(scrollPositionY)
    return this.setState({ scrollPositionY })
  }

  updateHome = (bottom) => {
    this.setState({ bottomOfHome : bottom })
  }

  updateAbout = (bottom) => {
    this.setState({ bottomOfAbout : bottom })
  }

  updateNews = (bottom) => {
    this.setState({ bottomOfNews : bottom })
  }

  updateProjects = (bottom) => {
    this.setState({ bottomOfProjects : bottom })
  }

  updateImageFocusAnimation = (trigger_height) => {
    this.setState({ triggerForImageFocusAnimation: trigger_height })
  }

  updateRepeatImageFocusAnimation = (bool) => {
    this.setState ({ repeatImageFocusAnimation: bool })
  }

  updateRepeatCardFlipAnimation = (bool) => {
    this.setState ({ repeatCardFlipAnimation: bool})
  }

  updateTriggerForCardFlipAnimation = (trigger_height) => {
    this.setState({ triggerForCardFlipAnimation: trigger_height })
  }

  updateFlipCardDimensions = (width) => {
    this.setState({ widthOfFlipCard: width})
  }

  updateStationaryHeader = (bottom) => {
    this.setState({ bottomOfStationaryHeader : bottom })
    console.log(this.state.bottomOfStationaryHeader)
  }

  updateHeightOfStickyHeader = (bottom) => {
    this.setState({ heightOfStickyHeader : bottom})
  }

  state = {
    scrollPositionY : 0,
    windowWidth : 0,
    bottomOfStationaryHeader : 80,
    heightOfStickyHeader : 80,
    navIsOpen : false,
    bottomOfHome : 300,
    bottomOfAbout: 600,
    bottomOfNews : 900,
    bottomOfProjects : 3000,
    triggerForImageFocusAnimation: 150,
    repeatImageFocusAnimation: true,
    repeatCardFlipAnimation: true,
    triggerForCardFlipAnimation: 550,
    widthOfFlipCard: 250
  }

  render() {
    return (
      <div className="App">
        <ShrinkingHeader
          scrollPositionY = { this.state.scrollPositionY }
          windowWidth = { this.state.windowWidth }
          bottomOfStationaryHeader = { this.state.bottomOfStationaryHeader }
          heightOfStickyHeader = { this.state.heightOfStickyHeader }
          navIsOpen = { this.state.navIsOpen }
          bottomOfHome = { this.state.bottomOfHome }
          bottomOfAbout = { this.state.bottomOfAbout }
          bottomOfNews = { this.state.bottomOfNews }
          bottomOfProjects = { this.state.bottomOfProjects }
          debounce = { this.debounce }
          updateStationaryHeader = { this.updateStationaryHeader }
          updateHeightOfStickyHeader = { this.updateHeightOfStickyHeader }
          handleNavClick = { this.handleNavClick } />

        <ImageFocusAnimation
          repeatImageFocusAnimation = { this.state.repeatImageFocusAnimation }
          updateRepeatImageFocusAnimation = { this.updateRepeatImageFocusAnimation }
          navIsOpen = { this.state.navIsOpen }
          />

        <CallToAction
          navIsOpen = { this.state.navIsOpen }
          debounce = { this.debounce }
          bottomOfHome = { this.state.bottomOfHome }
          updateHome = { this.updateHome }
          />

        <HeroImage
          heroImageSrc = { VibrantSkylineTurbines }
          heroImageAlt = "A vibrant Midwestern American skyline featuring turbines in the distance as the sun sets"
          pageName = "About"
          navIsOpen = { this.state.navIsOpen }
          sectionId = "about"/>

        <Introduction
          navIsOpen = { this.state.navIsOpen }
          scrollPositionY = {this.state.scrollPositionY }
          debounce = { this.debounce }
          bottomOfAbout = { this.state.bottomOfAbout }
          widthOfFlipCard = { this.state.widthOfFlipCard }
          repeatCardFlipAnimation = { this.state.repeatCardFlipAnimation }
          updateAbout = { this.updateAbout }
          triggerForCardFlipAnimation = { this.state.triggerForCardFlipAnimation }
          updateTriggerForCardFlipAnimation = { this.updateTriggerForCardFlipAnimation }
          updateFlipCardDimensions = { this.updateFlipCardDimensions }
          updateRepeatCardFlipAnimation = { this.updateRepeatCardFlipAnimation }

          />

        <News
          navIsOpen = { this.state.navIsOpen }
          debounce = { this.debounce }
          updateNews = { this.updateNews }
          MirroredGlassTruck = { MirroredGlassTruck }/>

        <Projects
          navIsOpen = { this.state.navIsOpen }
          debounce = { this.debounce }
          updateProjects = { this.updateProjects }
          TrilliumImage = { TrilliumImage }
          />

        <HeroImage
          heroImageSrc = { NCSunsetImage }
          heroImageAlt = "A colorful sunset skyline featuring the woods and mountains of Western North Carolina"
          pageName = "Contact"
          navIsOpen = { this.state.navIsOpen }
          sectionId = "contact-info"/>

        <Footer
          navIsOpen = { this.state.navIsOpen }/>

      </div>
    );
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // Picked because it's approx 2 frames (ie: 16.7 * 2)
    window.addEventListener('scroll', this.debounce(this.handleScroll, 32))
    window.addEventListener('resize', this.debounce(this.handleResize, 32))
    window.addEventListener(
      "DOMContentLoaded", this.debounce(this.handleResize, 32))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debounce(this.handleScroll, 32))
    window.removeEventListener('resize', this.debounce(this.handleResize, 32))
    window.removeEventListener(
      "DOMContentLoaded", this.debounce(this.handleResize, 32))
  }
}

export default App;
