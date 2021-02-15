import React, { Component } from 'react';

import smallNCSunset from './img/Sunset-Edited-480px-147px.jpg'
import smallNCSunsetWebp from './img/Sunset-Edited-480px-147px.jpg.webp'
import mediumNCSunset from './img/Sunset-Edited-960px-294px.jpg'
import mediumNCSunsetWebp from './img/Sunset-Edited-960px-294px.jpg.webp'
import largeNCSunset from './img/Sunset-Edited-1920px-588px.jpg'
import largeNCSunsetWebp from './img/Sunset-Edited-1920px-588px.jpg.webp'
import highResNCSunset from './img/Sunset-Edited-3840px-1176px.jpg'
import highResNCSunsetWebp from './img/Sunset-Edited-3840px-1176px.jpg.webp'

class NCSunsetSources extends Component {

  fallback = smallNCSunset

  heroImageSrcSet = smallNCSunset + ' 480w, ' +
     mediumNCSunset + ' 960w, ' + largeNCSunset +
     ' 1920w, ' + highResNCSunset + ' 2x'

  heroImageAlt = "A colorful sunset skyline featuring the woods and " +
                 "mountains of Western North Carolina"

  render () {
    return (
      <picture>
        <source media="(max-width: 480px)" srcSet={smallNCSunsetWebp} type="image/webp"/>
        <source media="(min-width: 961) and (min-device-pixel-ratio: 1.5), (min-width: 961) and (min-resolution: 1.5dppx)" srcSet={highResNCSunsetWebp} type="image/webp"/>
        <source media="(min-width: 961px)" srcSet={largeNCSunsetWebp} type="image/webp"/>
        <source media="(min-width: 481px)" srcSet={mediumNCSunsetWebp} type="image/webp"/>
        <source media="(max-width: 480px)" srcSet={smallNCSunset} type="image/jpeg"/>
        <source media="(min-width: 961) and (min-device-pixel-ratio: 1.5), (min-width: 961) and (min-resolution: 1.5dppx)" srcSet={highResNCSunset} type="image/jpeg"/>
        <source media="(min-width: 961px)" srcSet={largeNCSunset} type="image/jpeg"/>
        <source media="(min-width: 481px)" srcSet={mediumNCSunset} type="image/jpeg"/>
        <img
          src= { this.fallback }
          srcSet={ this.heroImageSrcSet }
          alt={ this.heroImageAlt }
          className="HeroImage"/>
      </picture>
    )
  }
}

export default NCSunsetSources;
