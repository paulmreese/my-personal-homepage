import React, { Component } from 'react';

import './App.css';

import ShrinkingHeader from './ShrinkingHeader/ShrinkingHeader'
import HeroImage from './HeroImage/HeroImage'

import CallToAction from './CallToAction/CallToAction'
import GlassTruckImage from './img/Mirrored-Glass-Truck-Hero-Large.jpg'

import Introduction from './Introduction/Introduction'

import News from './News/News'

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
    this.setState({ bottomOfHome : bottom})
  }

  updateNews = (bottom) => {
    this.setState({ bottomOfNews : bottom })
  }

  updateStationaryHeader = (bottom) => {
    this.setState({ bottomOfStationaryHeader : bottom })
    console.log(this.state.bottomOfStationaryHeader)
  }

  state = {
    scrollPositionY : 0,
    windowWidth : 0,
    bottomOfStationaryHeader : 80,
    navIsOpen : false,
    bottomOfHome : 300,
    bottomOfNews : 600
  }

  render() {
    return (
      <div className="App">
        <ShrinkingHeader
          scrollPositionY = { this.state.scrollPositionY }
          windowWidth = { this.state.windowWidth }
          bottomOfStationaryHeader = { this.state.bottomOfStationaryHeader }
          navIsOpen = { this.state.navIsOpen }
          bottomOfHome = { this.state.bottomOfHome }
          debounce = { this.debounce }
          updateStationaryHeader = { this.updateStationaryHeader }
          handleNavClick = { this.handleNavClick } />
        <HeroImage
          heroImageSrc = { GlassTruckImage }
          heroImageAlt = "Mirrored glass reflecting sepia-tone trucks under blue sky"
          pageName = "Your Image"
          navIsOpen = { this.state.navIsOpen }/>
        <CallToAction
          navIsOpen = { this.state.navIsOpen }
          />
        <Introduction
          navIsOpen = { this.state.navIsOpen }
          debounce = { this.debounce }
          bottomOfHome = { this.state.bottomOfHome }
          updateHome = { this.updateHome }/>
        <News
          navIsOpen = { this.state.navIsOpen }
          debounce = { this.debounce }
          updateNews = { this.updateNews }/>
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
