import React, { Component } from 'react';

import './ImageFocusAnimation.scss';
import smallKaleImage from './img/Kale-Closeup-100px.jpg'
import smallKaleImageWebp from './img/Kale-Closeup-100px.jpg.webp'
import mediumKaleImage from './img/Kale-Closeup-200px.jpg'
import mediumKaleImageWebp from './img/Kale-Closeup-200px.jpg.webp'
import largeKaleImage from './img/Kale-Closeup-400px.jpg'
import largeKaleImageWebp from './img/Kale-Closeup-400px.jpg.webp'
import highResKaleImage from './img/Kale-Closeup-800px.jpg'
import highResKaleImageWebp from './img/Kale-Closeup-800px.jpg.webp'



//This Component represents the Kale image set

class ImageFocusAnimation extends Component {

  handleImageLoad() {
    this.setState({ imageStatus: "success" });
    this.startAnimation()
  }

  handleImageError() {
    this.setState({ imageStatus: "error" });
    this.startAnimation()
  }

  startAnimation = () => {
    setTimeout(function() {this.props.updateRepeatImageFocusAnimation(false)}.bind(this), 500)
  }

  state = {
    imageStatus: "loading"
  }

  render() {
    const kaleImageSrcSet = smallKaleImage + ' 100w, ' +
       mediumKaleImage + ' 200w, ' + largeKaleImage +
       ' 400w, ' + highResKaleImage + ' 2x'

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
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image medium-light-blur"/>
            </picture>
            <div className="image-overlay medium-light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container second-animated shown"
            : "ImageFocusAnimation-image-container second-animated hidden"}>
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image light-blur"/>
            </picture>
            <div className="image-overlay light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container third-animated shown"
            : "ImageFocusAnimation-image-container third-animated hidden"}>
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image lighter-blur"/>
            </picture>
            <div className="image-overlay lighter-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container fourth-animated shown"
            : "ImageFocusAnimation-image-container fourth-animated hidden"}>
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image "
                onLoad={this.handleImageLoad.bind(this)}
                onError={this.handleImageError.bind(this)}/>
            </picture>
            <div className="image-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container third-animated shown"
            : "ImageFocusAnimation-image-container third-animated hidden"}>
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image lighter-blur"/>
            </picture>
            <div className="image-overlay lighter-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container second-animated shown"
            : "ImageFocusAnimation-image-container second-animated hidden"}>
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image light-blur"/>
            </picture>
            <div className="image-overlay light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
          <div className={!repeatImageFocusAnimation
            ? "ImageFocusAnimation-image-container first-animated shown"
            : "ImageFocusAnimation-image-container first-animated hidden"}>
            <picture>
              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImageWebp}`} type="image/webp" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImageWebp}`} type="image/webp" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImageWebp}`} type="image/webp" />

              <source media="(min-width: 736px) and (min-device-pixel-ratio: 1.5), (min-width: 736px) and (min-resolution: 1.5dppx)" srcSet={`${highResKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 736px)" srcSet={`${largeKaleImage}`} type="image/jpeg" />
              <source media="(min-width: 350px)" srcSet={`${mediumKaleImage}`} type="image/jpeg" />
              <source media="(max-width: 349px)" srcSet={`${smallKaleImage}`} type="image/jpeg" />

              <img
                src={ smallKaleImage }
                srcSet={ kaleImageSrcSet }
                sizes="30vw"
                alt="Close-up on the center of purple kale"
                className="circle ImageFocusAnimation-image medium-light-blur"/>
            </picture>
            <div className="image-overlay medium-light-overlay droplet-overlay"></div>
            <div className="light-dot"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageFocusAnimation;
