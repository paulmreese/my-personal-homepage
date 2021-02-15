import React, { Component } from 'react';

import smallVibrantSkylineTurbines from './img/Sunset-Turbines-Narrow-480px-180px.jpg'
import smallVibrantSkylineTurbinesWebp from './img/Sunset-Turbines-Narrow-480px-180px.jpg.webp'
import mediumVibrantSkylineTurbines from './img/Sunset-Turbines-Narrow-960px-360px.jpg'
import mediumVibrantSkylineTurbinesWebp from './img/Sunset-Turbines-Narrow-960px-360px.jpg.webp'
import largeVibrantSkylineTurbines from './img/Sunset-Turbines-Narrow-1920px-720px.jpg'
import largeVibrantSkylineTurbinesWebp from './img/Sunset-Turbines-Narrow-1920px-720px.jpg.webp'
import highResVibrantSkylineTurbines from './img/Sunset-Turbines-Narrow-3840px-1440px-web.jpg'
import highResVibrantSkylineTurbinesWebp from './img/Sunset-Turbines-Narrow-3840px-1440px-web.jpg.webp'

class VibrantSkylineTurbinesSources extends Component {

  fallback = smallVibrantSkylineTurbines

  heroImageSrcSet = smallVibrantSkylineTurbines + ' 480w, ' +
     mediumVibrantSkylineTurbines + ' 960w, ' + largeVibrantSkylineTurbines +
     ' 1920w, ' + highResVibrantSkylineTurbines + ' 2x'

  heroImageAlt = "A vibrant Midwestern American skyline featuring turbines " +
                 "in the distance as the sun sets"

  render () {
    return (
      <picture>
        <source media="(max-width: 480px)" srcSet={smallVibrantSkylineTurbinesWebp} type="image/webp"/>
        <source media="(min-width: 961) and (min-device-pixel-ratio: 1.5), (min-width: 961) and (min-resolution: 1.5dppx)" srcSet={highResVibrantSkylineTurbinesWebp} type="image/webp"/>
        <source media="(min-width: 961px)" srcSet={largeVibrantSkylineTurbinesWebp} type="image/webp"/>
        <source media="(min-width: 481px)" srcSet={mediumVibrantSkylineTurbinesWebp} type="image/webp"/>
        <source media="(max-width: 480px)" srcSet={smallVibrantSkylineTurbines} type="image/jpeg"/>
        <source media="(min-width: 961) and (min-device-pixel-ratio: 1.5), (min-width: 961) and (min-resolution: 1.5dppx)" srcSet={highResVibrantSkylineTurbines} type="image/jpeg"/>
        <source media="(min-width: 961px)" srcSet={largeVibrantSkylineTurbines} type="image/jpeg"/>
        <source media="(min-width: 481px)" srcSet={mediumVibrantSkylineTurbines} type="image/jpeg"/>
        <img
          src= { this.fallback }
          srcSet={ this.heroImageSrcSet }
          alt={ this.heroImageAlt }
          className="HeroImage"/>
      </picture>
    )
  }
}

export default VibrantSkylineTurbinesSources;
