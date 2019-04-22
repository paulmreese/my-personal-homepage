import React, { Component } from 'react';
import './HeroImage.scss';


class HeroImage extends Component {

  render() {
    const { heroImageSrc, heroImageAlt, pageName, navIsOpen } = this.props
    return (
      <section
        className={ navIsOpen
          ? "HeroImage-container blurred" :
          "HeroImage-container"}
        id="home">
        <img src={ heroImageSrc } alt={ heroImageAlt } className="HeroImage"/>
        <div className="HeroImage-overlay">
          {pageName
            ? <h2 className="HeroImage-caption">{ pageName }</h2>
            : null}
        </div>
      </section>
    );
  }
}

export default HeroImage;
