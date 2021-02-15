import React, { Component } from 'react';

import smallTrillium from './img/Trillium-480px-180px.jpg'
import smallTrilliumWebp from './img/Trillium-480px-180px.jpg.webp'
import mediumTrillium from './img/Trillium-960px-360px.jpg'
import mediumTrilliumWebp from './img/Trillium-960px-360px.jpg.webp'
import largeTrillium from './img/Trillium-1920px-720px.jpg'
import largeTrilliumWebp from './img/Trillium-1920px-720px.jpg.webp'
import highResTrillium from './img/Trillium-3840px-1440px.jpg'
import highResTrilliumWebp from './img/Trillium-3840px-1440px.jpg.webp'

class TrilliumSources extends Component {

  fallback = smallTrillium

  heroImageSrcSet = smallTrillium + ' 480w, ' +
     mediumTrillium + ' 960w, ' + largeTrillium +
     ' 1920w, ' + highResTrillium + ' 2x'

  heroImageAlt = "A patch of painted Trillium with pink and white flowers " +
                 "in verdant North Carolina woods"

  render () {
    return (
      <picture>
        <source media="(max-width: 480px)" srcSet={smallTrilliumWebp} type="image/webp"/>
        <source media="(min-width: 961) and (min-device-pixel-ratio: 1.5), (min-width: 961) and (min-resolution: 1.5dppx)" srcSet={highResTrilliumWebp} type="image/webp"/>
        <source media="(min-width: 961px)" srcSet={largeTrilliumWebp} type="image/webp"/>
        <source media="(min-width: 481px)" srcSet={mediumTrilliumWebp} type="image/webp"/>
        <source media="(max-width: 480px)" srcSet={smallTrillium} type="image/jpeg"/>
        <source media="(min-width: 961) and (min-device-pixel-ratio: 1.5), (min-width: 961) and (min-resolution: 1.5dppx)" srcSet={highResTrillium} type="image/jpeg"/>
        <source media="(min-width: 961px)" srcSet={largeTrillium} type="image/jpeg"/>
        <source media="(min-width: 481px)" srcSet={mediumTrillium} type="image/jpeg"/>
        <img
          src= { this.fallback }
          srcSet={ this.heroImageSrcSet }
          alt={ this.heroImageAlt }
          className="HeroImage"/>
      </picture>
    )
  }
}

export default TrilliumSources;
