import React, { Component } from 'react'

import './FullBackgroundImage.scss'

export default class FullBackgroundImage extends Component {
  render() {
    return (
      <section className="FullBackgroundImage">
        <div className="centered">
          <p>Nestled amidst verdant splendor:</p>
          
          <button>A button</button>
        </div>
        <div className="blurred"></div>
      </section>
    )
  }
}
