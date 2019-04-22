import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './Introduction.scss';
import kaleImage from './img/Kale-Closeup-800.jpg'

class Introduction extends Component {

  handleResize = () => {
    const topOfHome = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfHome =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfHome = topOfHome + heightOfHome
    this.props.updateHome(bottomOfHome)
  }


  render() {
    const { navIsOpen } = this.props
    return (
      <section className={ navIsOpen
        ? "Introduction-container blurred" :
        "Introduction-container" }>
        <h2>
          A Brief <em>Introduction...</em>
        </h2>

        <p>Introduce yourself and <strong>who</strong> you are. Tell the user
          <strong> why</strong> you started or <strong>where</strong> you plan
          to go in the future. Let them know about your grandparent's vision or
          your grand dream to change the world!
          <br /></p>
        <div className="triple-container">
          <div className="Introduction-image-container">
            <img
              src={ kaleImage }
              alt="Close-up on the center of purple kale"
              className="circle Introduction-image light-blur"/>
            <div className="image-overlay light-overlay"></div>
          </div>
          <div className="Introduction-image-container">
            <img
              src={ kaleImage }
              alt="Close-up on the center of purple kale"
              className="circle Introduction-image lighter-blur"/>
            <div className="image-overlay lighter-overlay"></div>
          </div>
          <div className="Introduction-image-container">
            <img
              src={ kaleImage }
              alt="Close-up on the center of purple kale"
              className="circle Introduction-image "/>
            <div className="image-overlay"></div>
          </div>
        </div>
        <p>
          You could never tell your audience every detail of your operations,
          but you can be <em>sure</em> that you left nothing on the table.
        </p>
      </section>
    );
  }

  componentDidMount() {
    const { debounce } = this.props
    window.addEventListener("DOMContentLoaded", this.handleResize)
    window.addEventListener('resize', debounce(this.handleResize, 32))
  }

  componentWillUnmount() {
    const { debounce } = this.props
    window.removeEventListener("DOMContentLoaded", this.handleResize)
    window.removeEventListener('resize', debounce(this.handleResize, 32))
  }
}

export default Introduction;
