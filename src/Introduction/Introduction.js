import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './Introduction.scss';
import PMRLogo from './img/800px-PMR-Sunset-Round.png'

import RedHTML from './img/800px-HTMLCircularBackground-light-sepia.png'
import GreenJS from './img/800px-JSCircularBackground-light-sepia.png'
import BlueCSS from './img/800px-CSSCircularBackground-light-sepia.png'

class Introduction extends Component {

  handleResize = () => {
    const topOfAbout = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfAbout =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfAbout = topOfAbout + heightOfAbout
    console.log("bottomAbout: ", bottomOfAbout)
    this.props.updateAbout(bottomOfAbout)

    //Set animation trigger height
    const heightOfWindow = window.innerHeight
    //const distanceFromTop = bottomOfAbout - (0.45 * heightOfWindow)
    const topOfFlipCards =
    +ReactDOM.findDOMNode(this).getElementsByClassName('card')[0].offsetTop
    const heightOfFlipCards =
      +ReactDOM.findDOMNode(this).querySelector('.card').getBoundingClientRect().height
    const bottomOfFlipCards = topOfAbout + topOfFlipCards + heightOfFlipCards
    const triggerHeight = bottomOfFlipCards + (0.3 * heightOfWindow)
    this.props.updateTriggerForCardFlipAnimation( Math.round(triggerHeight) )

    //dynamically set height of flip cards, they require a hard-coded height.
    const widthOfFlipCard =
      +ReactDOM.findDOMNode(this).getElementsByClassName('card')[0].getBoundingClientRect().width
    console.log("Flip Card Width:", widthOfFlipCard)
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

        <p>
          Introduce yourself with a beautiful page that reveals
          the <em>authentic</em> image of your brand or business. Let me
          help you tell your story to people– <strong> why</strong> you started
          and <strong>where</strong> you plan to go!<br/>
        </p>

        <p>
          You could never tell your audience every detail of your operations,
          but you can be <em>sure</em> that you left nothing on the table.
        </p>

        <div className="triple-container">
          <div className="Introduction-image-container first">
            <div className="card" style={{height: widthOfFlipCard + 25}}>
              <div className={!repeatCardFlipAnimation
                  ? "card-contents flipped first-animated"
                  : "card-contents"}>
                <div className="card__face card__face--front">
                  <img
                    src={ PMRLogo }
                    alt="Close-up on the center of purple kale"
                    className="circle Introduction-image light-blur"/>
                  <div className="image-overlay light-overlay droplet-overlay"></div>
                  <div className="light-dot"></div>
                </div>
                <div className="card__face card__face--back">
                  <img
                    src={ RedHTML }
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
                    src={ PMRLogo }
                    alt="Close-up on the center of purple kale"
                    className="circle Introduction-image lighter-blur"/>
                  <div className="image-overlay lighter-overlay droplet-overlay"></div>
                  <div className="light-dot"></div>
                </div>
                <div className="card__face card__face--back">
                  <img
                    src={ GreenJS }
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
                    src={ PMRLogo }
                    alt="Close-up on the center of purple kale"
                    className="circle Introduction-image"/>
                  <div className="image-overlay droplet-overlay"></div>
                  <div className="light-dot"></div>
                </div>
                <div className="card__face card__face--back">
                  <img
                    src={ BlueCSS }
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
          By combining <strong>HTML</strong>, <strong>JavaScript</strong>,
          and <strong>CSS</strong> together with modern extensions
          like <strong>Sass</strong> and <strong>JSX</strong>, I create
          bespoke web applications that are accessible, functional, and
          responsive.
        </p>
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
