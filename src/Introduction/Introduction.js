import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './Introduction.scss';
import smallPMRLogo from './img/PMR-Sunset-Round-100px.jpg'
import mediumPMRLogo from './img/PMR-Sunset-Round-200px.jpg'
import largePMRLogo from './img/PMR-Sunset-Round-350px.jpg'
import highResPMRLogo from './img/PMR-Sunset-Round-700px.jpg'

import smallRedHTML from './img/HTMLCircularBackground-light-sepia-100px.jpg'
import mediumRedHTML from './img/HTMLCircularBackground-light-sepia-200px.jpg'
import largeRedHTML from './img/HTMLCircularBackground-light-sepia-350px.jpg'
import highResRedHTML from './img/HTMLCircularBackground-light-sepia-enlarged-700px.jpg'

import smallGreenJS from './img/JSCircularBackground-light-sepia-100px.jpg'
import mediumGreenJS from './img/JSCircularBackground-light-sepia-200px.jpg'
import largeGreenJS from './img/JSCircularBackground-light-sepia-350px.jpg'
import highResGreenJS from './img/JSCircularBackground-light-sepia-enlarged-700px.jpg'

import smallBlueCSS from './img/CSSCircularBackground-light-sepia-100px.jpg'
import mediumBlueCSS from './img/CSSCircularBackground-light-sepia-200px.jpg'
import largeBlueCSS from './img/CSSCircularBackground-light-sepia-350px.jpg'
import highResBlueCSS from './img/CSSCircularBackground-light-sepia-enlarged-700px.jpg'

class Introduction extends Component {

  handleResize = () => {
    const topOfAbout = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfAbout =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfAbout = topOfAbout + heightOfAbout
    //console.log("bottomAbout: ", bottomOfAbout)
    this.props.updateAbout(bottomOfAbout)

    //Set animation trigger height
    const heightOfWindow = window.innerHeight
    const widthOfWindow = window.innerWidth
    //console.log("Height of Window: ", heightOfWindow)
    //const distanceFromTop = bottomOfAbout - (0.45 * heightOfWindow)
    const topOfFlipCards =
    +ReactDOM.findDOMNode(this).getElementsByClassName('card')[0].offsetTop
    const heightOfFlipCards =
      +ReactDOM.findDOMNode(this).querySelector('.card').getBoundingClientRect().height
    const bottomOfFlipCards = topOfAbout + topOfFlipCards + heightOfFlipCards
    //console.log("bottomOfFlipCards: ", bottomOfFlipCards)
    let triggerHeight
    if (widthOfWindow < 600) { //likely mobile
      triggerHeight = bottomOfFlipCards - (0.5 * heightOfWindow)
    } else if (widthOfWindow < 800) {
      triggerHeight = bottomOfFlipCards - (0.9 * heightOfWindow)
    } else {
      triggerHeight = bottomOfFlipCards - (0.1 * heightOfWindow)
    }
    //console.log("triggerHeight: ", triggerHeight)
    this.props.updateTriggerForCardFlipAnimation( Math.round(triggerHeight) )

    //dynamically set height of flip cards, they require a hard-coded height.
    const widthOfFlipCard =
      +ReactDOM.findDOMNode(this).getElementsByClassName('card')[0].getBoundingClientRect().width
    //console.log("Flip Card Width:", widthOfFlipCard)
    this.props.updateFlipCardDimensions( Math.round(widthOfFlipCard) )
  }

  handleScroll = () => {
    if (this.props.scrollPositionY >= this.props.triggerForCardFlipAnimation) {
      this.props.updateRepeatCardFlipAnimation(false)
    }


    const topOfAbout = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfAbout =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfAbout = topOfAbout + heightOfAbout

    if (this.props.bottomAbout !== bottomOfAbout) {
      this.props.updateAbout(bottomOfAbout)
    }
  }


  render() {
    const {
      navIsOpen, widthOfFlipCard, repeatCardFlipAnimation
    } = this.props
    return (
      <section className={ navIsOpen
        ? "Introduction-container blurred" :
        "Introduction-container" }>

        <div className="Introduction-content">

          <p>
            By combining <strong>HTML</strong>, <strong>JavaScript</strong>,
            and <strong>CSS</strong> together with modern extensions
            like <strong>Sass</strong> and <strong>JSX</strong>, I create
            bespoke web applications that are functional, beautiful, and
            responsive.
          </p>

          <div className="triple-container">
            <div className="Introduction-image-container first">
              <div className="card" style={{height: widthOfFlipCard + 25}}>
                <div className={!repeatCardFlipAnimation
                    ? "card-contents flipped first-animated"
                    : "card-contents"}>
                  <div className="card__face card__face--front">
                    <img
                      src={ smallPMRLogo }
                      srcSet={`${smallPMRLogo} 100w,
                               ${mediumPMRLogo} 200w,
                               ${largePMRLogo} 350w,
                               ${highResPMRLogo} 2x`}
                      sizes="30vw"
                      alt="PMR logo against an orange sunset in a circular border"
                      className="circle Introduction-image light-blur"/>
                    <div className="image-overlay light-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                  <div className="card__face card__face--back">
                    <img
                      src={ smallRedHTML }
                      srcSet={`${smallRedHTML} 100w,
                               ${mediumRedHTML} 200w,
                               ${largeRedHTML} 350w,
                               ${highResRedHTML} 2x`}
                      sizes="30vw"
                      alt="Red-stylized sunset labelled 'HTML Structure'"
                      className="circle Introduction-image"/>
                    <div className="image-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Introduction-image-container second">
              <div className="card" style={{height: widthOfFlipCard + 25}}>
                <div className={!repeatCardFlipAnimation
                    ? "card-contents flipped second-animated"
                    : "card-contents"}>
                  <div className="card__face card__face--front">
                    <img
                      src={ smallPMRLogo }
                      srcSet={`${smallPMRLogo} 100w,
                               ${mediumPMRLogo} 200w,
                               ${largePMRLogo} 350w,
                               ${highResPMRLogo} 2x`}
                      sizes="30vw"
                      alt="PMR logo against an orange sunset in a circular border"
                      className="circle Introduction-image lighter-blur"/>
                    <div className="image-overlay lighter-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                  <div className="card__face card__face--back">
                    <img
                      src={ smallGreenJS }
                      srcSet={`${smallGreenJS} 100w,
                               ${mediumGreenJS} 200w,
                               ${largeGreenJS} 350w,
                               ${highResGreenJS} 2x`}
                      sizes="30vw"
                      alt="Green-stylized sunset labelled 'JavaScript Function'"
                      className="circle Introduction-image "/>
                    <div className="image-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Introduction-image-container third">
              <div className="card" style={{height: widthOfFlipCard + 25}}>
                <div className={!repeatCardFlipAnimation
                    ? "card-contents flipped third-animated"
                    : "card-contents"}>
                  <div className="card__face card__face--front">
                    <img
                      src={ smallPMRLogo }
                      srcSet={`${smallPMRLogo} 100w,
                               ${mediumPMRLogo} 200w,
                               ${largePMRLogo} 350w,
                               ${highResPMRLogo} 2x`}
                      sizes="30vw"
                      alt="PMR logo against an orange sunset in a circular border"
                      className="circle Introduction-image"/>
                    <div className="image-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                  <div className="card__face card__face--back">
                    <img
                      src={ smallBlueCSS }
                      srcSet={`${smallBlueCSS} 100w,
                               ${mediumBlueCSS} 200w,
                               ${largeBlueCSS} 350w,
                               ${highResBlueCSS} 2x`}
                      sizes="30vw"
                      alt="Blue-stylized sunset labeled 'CSS Style'"
                      className="circle Introduction-image "/>
                    <div className="image-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Tailor-made web apps come together with modern cloud architecture
            techniques to create <strong>resilient</strong>
            , <strong>highly-available</strong>, and <strong>
            affordable</strong> solutions that leverage the <em>inherent
            advantages of cloud computing</em>.
          </p>
        </div>
      </section>
    );
  }

  componentDidMount() {
    const { debounce } = this.props
    window.addEventListener("DOMContentLoaded", this.handleResize)
    window.addEventListener('resize', debounce(this.handleResize, 32))
    window.addEventListener('scroll', debounce(this.handleScroll, 32))
  }

  componentWillUnmount() {
    const { debounce } = this.props
    window.removeEventListener("DOMContentLoaded", this.handleResize)
    window.removeEventListener('resize', debounce(this.handleResize, 32))
    window.removeEventListener('scroll', debounce(this.handleScroll, 32))
  }
}

export default Introduction;
