import React, { Component } from 'react';

import smallMirroredGlassTruck from './img/Mirrored-Glass-Truck-Hero-480px-160px.jpg'
import smallMirroredGlassTruckWebp from './img/Mirrored-Glass-Truck-Hero-480px-160px.jpg.webp'
import mediumMirroredGlassTruck from './img/Mirrored-Glass-Truck-Hero-960px-320px.jpg'
import mediumMirroredGlassTruckWebp from './img/Mirrored-Glass-Truck-Hero-960px-320px.jpg.webp'
import largeMirroredGlassTruck from './img/Mirrored-Glass-Truck-Hero-1920px-640px.jpg'
import largeMirroredGlassTruckWebp from './img/Mirrored-Glass-Truck-Hero-1920px-640px.jpg.webp'

class MirroredGlassTruckSources extends Component {

  fallback = smallMirroredGlassTruck

  heroImageSrcSet = smallMirroredGlassTruck + ' 480w, ' +
     mediumMirroredGlassTruck + ' 960w, ' + largeMirroredGlassTruck + ' 1920w'

  heroImageAlt = "Mirrored glass reflecting a truck grille"

  render () {
    return (
      <picture>
        <source media="(max-width: 480px)" srcSet={smallMirroredGlassTruckWebp} type="image/webp"/>
        <source media="(min-width: 961px)" srcSet={largeMirroredGlassTruckWebp} type="image/webp"/>
        <source media="(min-width: 481px)" srcSet={mediumMirroredGlassTruckWebp} type="image/webp"/>
        <source media="(max-width: 480px)" srcSet={smallMirroredGlassTruck} type="image/jpeg"/>
        <source media="(min-width: 961px)" srcSet={largeMirroredGlassTruck} type="image/jpeg"/>
        <source media="(min-width: 481px)" srcSet={mediumMirroredGlassTruck} type="image/jpeg"/>
        <img
          src= { this.fallback }
          srcSet={ this.heroImageSrcSet }
          alt={ this.heroImageAlt }
          className="HeroImage"/>
      </picture>
    )
  }
}

export default MirroredGlassTruckSources;
