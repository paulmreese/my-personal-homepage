import React, { Component } from 'react';

import './ImageFocusAnimation.scss';
import smallKaleImage from './img/Kale-Closeup-100px.jpg'
import mediumKaleImage from './img/Kale-Closeup-200px.jpg'
import largeKaleImage from './img/Kale-Closeup-400px.jpg'
import highResKaleImage from './img/Kale-Closeup-800px.jpg'

const kaleImageSrcSet = smallKaleImage + ' 100w, ' +
   mediumKaleImage + ' 200w, ' + largeKaleImage +
   ' 400w, ' + highResKaleImage + ' 2x'

//This Component represents the Kale image set

class ImageFocusAnimation extends Component {
  startAnimation = () => {
    setTimeout(function() {this.props.updateRepeatImageFocusAnimation(false)}.bind(this), 500)
  }

  render() {
    const {
            navIsOpen, repeatImageFocusAnimation
      } = this.props
    return (
      <section className={'ImageFocusAnimation-container'}>
        <div className={ navIsOpen
          ? "septuple-container blurred" :
          "septuple-container" }>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container first-animated shown"
            : "ImageFocusAnimation-image-container first-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image medium-light-blur"/>
            <div className="image-overlay medium-light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container second-animated shown"
            : "ImageFocusAnimation-image-container second-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image light-blur"/>
            <div className="image-overlay light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container third-animated shown"
            : "ImageFocusAnimation-image-container third-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image lighter-blur"/>
            <div className="image-overlay lighter-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container fourth-animated shown"
            : "ImageFocusAnimation-image-container fourth-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image "/>
            <div className="image-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container third-animated shown"
            : "ImageFocusAnimation-image-container third-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image lighter-blur"/>
            <div className="image-overlay lighter-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container second-animated shown"
            : "ImageFocusAnimation-image-container second-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image light-blur"/>
            <div className="image-overlay light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container first-animated shown"
            : "ImageFocusAnimation-image-container first-animated hidden"}>
            <img
              src={ smallKaleImage }
              srcSet={ kaleImageSrcSet }
              sizes="30vw"
              alt="Close-up on the center of purple kale"
              className="circle ImageFocusAnimation-image medium-light-blur"/>
            <div className="image-overlay medium-light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    window.addEventListener("DOMContentLoaded", this.startAnimation)
  }

  componentWillUnmount() {
    window.removeEventListener("DOMContentLoaded", this.startAnimation)
  }
}

export default ImageFocusAnimation;
