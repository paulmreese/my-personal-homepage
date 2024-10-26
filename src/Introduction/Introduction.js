import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './Introduction.scss';
import smallPMRLogo from './img/PMR-Sunset-Round-100px.jpg'
import smallPMRLogoWebp from './img/PMR-Sunset-Round-100px.jpg.webp'
import mediumPMRLogo from './img/PMR-Sunset-Round-200px.jpg'
import mediumPMRLogoWebp from './img/PMR-Sunset-Round-200px.jpg.webp'
import largePMRLogo from './img/PMR-Sunset-Round-350px.jpg'
import largePMRLogoWebp from './img/PMR-Sunset-Round-350px.jpg.webp'
import highResPMRLogo from './img/PMR-Sunset-Round-700px.jpg'
import highResPMRLogoWebp from './img/PMR-Sunset-Round-700px.jpg.webp'

import smallRedHTML from './img/HTMLCircularBackground-light-sepia-100px.jpg'
import smallRedHTMLWebp from './img/HTMLCircularBackground-light-sepia-100px.jpg.webp'
import mediumRedHTML from './img/HTMLCircularBackground-light-sepia-200px.jpg'
import mediumRedHTMLWebp from './img/HTMLCircularBackground-light-sepia-200px.jpg.webp'
import largeRedHTML from './img/HTMLCircularBackground-light-sepia-350px.jpg'
import largeRedHTMLWebp from './img/HTMLCircularBackground-light-sepia-350px.jpg.webp'
import highResRedHTML from './img/HTMLCircularBackground-light-sepia-enlarged-700px.jpg'
import highResRedHTMLWebp from './img/HTMLCircularBackground-light-sepia-enlarged-700px.jpg.webp'

import smallGreenJS from './img/JSCircularBackground-light-sepia-100px.jpg'
import smallGreenJSWebp from './img/JSCircularBackground-light-sepia-100px.jpg.webp'
import mediumGreenJS from './img/JSCircularBackground-light-sepia-200px.jpg'
import mediumGreenJSWebp from './img/JSCircularBackground-light-sepia-200px.jpg.webp'
import largeGreenJS from './img/JSCircularBackground-light-sepia-350px.jpg'
import largeGreenJSWebp from './img/JSCircularBackground-light-sepia-350px.jpg.webp'
import highResGreenJS from './img/JSCircularBackground-light-sepia-enlarged-700px.jpg'
import highResGreenJSWebp from './img/JSCircularBackground-light-sepia-enlarged-700px.jpg.webp'

import smallBlueCSS from './img/CSSCircularBackground-light-sepia-100px.jpg'
import smallBlueCSSWebp from './img/CSSCircularBackground-light-sepia-100px.jpg.webp'
import mediumBlueCSS from './img/CSSCircularBackground-light-sepia-200px.jpg'
import mediumBlueCSSWebp from './img/CSSCircularBackground-light-sepia-200px.jpg.webp'
import largeBlueCSS from './img/CSSCircularBackground-light-sepia-350px.jpg'
import largeBlueCSSWebp from './img/CSSCircularBackground-light-sepia-350px.jpg.webp'
import highResBlueCSS from './img/CSSCircularBackground-light-sepia-enlarged-700px.jpg'
import highResBlueCSSWebp from './img/CSSCircularBackground-light-sepia-enlarged-700px.jpg.webp'

class Introduction extends Component {

  handleImageLoad() {
    if (this.state.imageCount >= 5) {
      this.setState({ imageStatus: "success" });
    }
    this.setState({ imageCount: this.state.imageCount + 1 })
  }

  handleImageError() {
    if (this.state.imageCount >= 5) {
      this.setState({ imageStatus: "error" });
    }
    this.setState({ imageCount: this.state.imageCount + 1 })
  }

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

    /*
      This version uses the center of the cards as a trigger point, which will
      still be debounced. This will at least be more consistent
    */
      let triggerHeight = bottomOfFlipCards + (heightOfFlipCards/2)
      if (triggerHeight < heightOfWindow) {
        triggerHeight = 0
      }

    /*
    //Original Trigger Logic
    let triggerHeight
    if (widthOfWindow < 600) { //likely mobile
      triggerHeight = bottomOfFlipCards - (0.5 * heightOfWindow)
    } else if (widthOfWindow < 800) {
      triggerHeight = bottomOfFlipCards - (0.3 * heightOfWindow)
    } else {
      triggerHeight = bottomOfFlipCards
    }
    */

    //console.log("triggerHeight: ", triggerHeight)
    this.props.updateTriggerForCardFlipAnimation( Math.round(triggerHeight) )

    //dynamically set height of flip cards, they require a hard-coded height.
    const widthOfFlipCard =
      +ReactDOM.findDOMNode(this).getElementsByClassName('card')[0].getBoundingClientRect().width
    //console.log("Flip Card Width:", widthOfFlipCard)
    this.props.updateFlipCardDimensions( Math.round(widthOfFlipCard) )
  }

  handleScroll = () => {
    if ((this.props.scrollPositionY + window.innerHeight) >= this.props.triggerForCardFlipAnimation) {
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

  state = {
    imageStatus: "loading",
    imageCount: 0
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

                    <picture>
                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResPMRLogoWebp}`} type="image/webp"/>
                      <source media="(min-width: 736px)" srcSet={`${largePMRLogoWebp}`} type="image/webp"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumPMRLogoWebp}`} type="image/webp"/>
                      <source media="(max-width: 349px)" srcSet={`${smallPMRLogoWebp}`} type="image/webp"/>

                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResPMRLogo}`} type="image/jpeg"/>
                      <source media="(min-width: 736px)" srcSet={`${largePMRLogo}`} type="image/jpeg"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumPMRLogo}`} type="image/jpeg"/>
                      <source media="(max-width: 349px)" srcSet={`${smallPMRLogo}`} type="image/jpeg"/>

                      <img
                        src={ smallPMRLogo }
                        srcSet={`${smallPMRLogo} 100w,
                                 ${mediumPMRLogo} 200w,
                                 ${largePMRLogo} 350w,
                                 ${highResPMRLogo} 2x`}
                        sizes="30vw"
                        alt="PMR logo against an orange sunset in a circular border"
                        className="circle Introduction-image light-blur"
                        onLoad={this.handleImageLoad.bind(this)}
                        onError={this.handleImageError.bind(this)}/>
                    </picture>
                    <div className="image-overlay light-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                  <div className="card__face card__face--back">

                    <picture>
                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResRedHTMLWebp}`} type="image/webp"/>
                      <source media="(min-width: 736px)" srcSet={`${largeRedHTMLWebp}`} type="image/webp"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumRedHTMLWebp}`} type="image/webp"/>
                      <source media="(max-width: 349px)" srcSet={`${smallRedHTMLWebp}`} type="image/webp"/>

                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResRedHTML}`} type="image/jpeg"/>
                      <source media="(min-width: 736px)" srcSet={`${largeRedHTML}`} type="image/jpeg"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumRedHTML}`} type="image/jpeg"/>
                      <source media="(max-width: 349px)" srcSet={`${smallRedHTML}`} type="image/jpeg"/>

                      <img
                        src={ smallRedHTML }
                        srcSet={`${smallRedHTML} 100w,
                                 ${mediumRedHTML} 200w,
                                 ${largeRedHTML} 350w,
                                 ${highResRedHTML} 2x`}
                        sizes="30vw"
                        alt="Red-stylized sunset labelled 'HTML Structure'"
                        className="circle Introduction-image"
                        onLoad={this.handleImageLoad.bind(this)}
                        onError={this.handleImageError.bind(this)}/>
                    </picture>

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

                    <picture>
                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResPMRLogoWebp}`} type="image/webp"/>
                      <source media="(min-width: 736px)" srcSet={`${largePMRLogoWebp}`} type="image/webp"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumPMRLogoWebp}`} type="image/webp"/>
                      <source media="(max-width: 349px)" srcSet={`${smallPMRLogoWebp}`} type="image/webp"/>

                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResPMRLogo}`} type="image/jpeg"/>
                      <source media="(min-width: 736px)" srcSet={`${largePMRLogo}`} type="image/jpeg"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumPMRLogo}`} type="image/jpeg"/>
                      <source media="(max-width: 349px)" srcSet={`${smallPMRLogo}`} type="image/jpeg"/>

                      <img
                        src={ smallPMRLogo }
                        srcSet={`${smallPMRLogo} 100w,
                                 ${mediumPMRLogo} 200w,
                                 ${largePMRLogo} 350w,
                                 ${highResPMRLogo} 2x`}
                        sizes="30vw"
                        alt="PMR logo against an orange sunset in a circular border"
                        className="circle Introduction-image lighter-blur"
                        onLoad={this.handleImageLoad.bind(this)}
                        onError={this.handleImageError.bind(this)}/>
                    </picture>

                    <div className="image-overlay lighter-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                  <div className="card__face card__face--back">

                    <picture>
                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResGreenJSWebp}`} type="image/webp"/>
                      <source media="(min-width: 736px)" srcSet={`${largeGreenJSWebp}`} type="image/webp"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumGreenJSWebp}`} type="image/webp"/>
                      <source media="(max-width: 349px)" srcSet={`${smallGreenJSWebp}`} type="image/webp"/>

                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResGreenJS}`} type="image/jpeg"/>
                      <source media="(min-width: 736px)" srcSet={`${largeGreenJS}`} type="image/jpeg"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumGreenJS}`} type="image/jpeg"/>
                      <source media="(max-width: 349px)" srcSet={`${smallGreenJS}`} type="image/jpeg"/>

                      <img
                        src={ smallGreenJS }
                        srcSet={`${smallGreenJS} 100w,
                                 ${mediumGreenJS} 200w,
                                 ${largeGreenJS} 350w,
                                 ${highResGreenJS} 2x`}
                        sizes="30vw"
                        alt="Green-stylized sunset labelled 'JavaScript Function'"
                        className="circle Introduction-image "
                        onLoad={this.handleImageLoad.bind(this)}
                        onError={this.handleImageError.bind(this)}/>
                    </picture>

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

                    <picture>
                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResPMRLogoWebp}`} type="image/webp"/>
                      <source media="(min-width: 736px)" srcSet={`${largePMRLogoWebp}`} type="image/webp"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumPMRLogoWebp}`} type="image/webp"/>
                      <source media="(max-width: 349px)" srcSet={`${smallPMRLogoWebp}`} type="image/webp"/>

                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResPMRLogo}`} type="image/jpeg"/>
                      <source media="(min-width: 736px)" srcSet={`${largePMRLogo}`} type="image/jpeg"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumPMRLogo}`} type="image/jpeg"/>
                      <source media="(max-width: 349px)" srcSet={`${smallPMRLogo}`} type="image/jpeg"/>

                      <img
                        src={ smallPMRLogo }
                        srcSet={`${smallPMRLogo} 100w,
                                 ${mediumPMRLogo} 200w,
                                 ${largePMRLogo} 350w,
                                 ${highResPMRLogo} 2x`}
                        sizes="30vw"
                        alt="PMR logo against an orange sunset in a circular border"
                        className="circle Introduction-image"
                        onLoad={this.handleImageLoad.bind(this)}
                        onError={this.handleImageError.bind(this)}/>
                    </picture>

                    <div className="image-overlay droplet-overlay"></div>
                    <div className="light-dot"></div>
                  </div>
                  <div className="card__face card__face--back">

                    <picture>
                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResBlueCSSWebp}`} type="image/webp"/>
                      <source media="(min-width: 736px)" srcSet={`${largeBlueCSSWebp}`} type="image/webp"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumBlueCSSWebp}`} type="image/webp"/>
                      <source media="(max-width: 349px)" srcSet={`${smallBlueCSSWebp}`} type="image/webp"/>

                      <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResBlueCSS}`} type="image/jpeg"/>
                      <source media="(min-width: 736px)" srcSet={`${largeBlueCSS}`} type="image/jpeg"/>
                      <source media="(min-width: 350px)" srcSet={`${mediumBlueCSS}`} type="image/jpeg"/>
                      <source media="(max-width: 349px)" srcSet={`${smallBlueCSS}`} type="image/jpeg"/>

                      <img
                        src={ smallBlueCSS }
                        srcSet={`${smallBlueCSS} 100w,
                                 ${mediumBlueCSS} 200w,
                                 ${largeBlueCSS} 350w,
                                 ${highResBlueCSS} 2x`}
                        sizes="30vw"
                        alt="Blue-stylized sunset labeled 'CSS Style'"
                        className="circle Introduction-image "
                        onLoad={this.handleImageLoad.bind(this)}
                        onError={this.handleImageError.bind(this)}/>
                    </picture>

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
