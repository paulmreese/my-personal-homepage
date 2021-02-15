import React, { Component } from 'react';
import './HeroImage.scss';


class HeroImage extends Component {

  render() {
    const {  pageName, navIsOpen, sectionId  } = this.props
    return (
      <section
        className={ navIsOpen
          ? "HeroImage-container blurred" :
          "HeroImage-container"}
        id = { sectionId
          ? sectionId
          : ""}>
        {this.props.children}
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
