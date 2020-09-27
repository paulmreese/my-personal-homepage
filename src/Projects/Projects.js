import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './Projects.scss';
import HeroImage from '../HeroImage/HeroImage';

import TurtlrImage from './img/Turtlr-gameplay-screenshot-900px-600px.png';

class Projects extends Component {

  handleResize = () => {
    const topOfProjects = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfProjects =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfProjects = topOfProjects + heightOfProjects
    this.props.updateProjects(Math.round(bottomOfProjects))
  }

  handleScroll = () => {
    const topOfProjects = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfProjects =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfProjects = topOfProjects + heightOfProjects

    if (this.props.bottomOfProjects !== bottomOfProjects) {
      this.props.updateProjects(Math.round(bottomOfProjects))
    }
  }

  render() {
    const { navIsOpen, TrilliumImage } = this.props
    return (

      <section className={ navIsOpen
            ? "Projects-container blurred"
            : "Projects-container"}
        id = "projects">
        <div className="Projects-image-container">
          <HeroImage
            heroImageSrc = { TrilliumImage }
            heroImageAlt = "A patch of painted Trillium with pink and white flowers in verdant North Carolina woods"
            pageName = "Projects"
            navIsOpen = { navIsOpen }
            />
        </div>
        <p>
          I believe that some of the biggest strides in knowledge come from its
          application to interesting problems, especially when applied with
          pure curiosity.
        </p>
        <p>
          These projects represent breakthroughs and other interesting outcomes.
          <br/>
        </p>
        <figure>
          <img
            src={ TurtlrImage }
            alt="The GUI of Turtlr, the loggerhead turtle, showing a photorealistic
                 Turtlr moving across a pixel-art beach towards the sea while
                 dodging plastic litter and seagulls."/>
          <figcaption>
            Help Turtlr, the loggerhead sea turtle, escape to the sea!
          </figcaption>
        </figure>
        <div className="article-description">
          <p>
            This JavaScript game uses the HTML canvas and custom sprites to
            recreate a clone of the classic game Frogger featuring Turtlr,
            the loggerhead sea turtle!</p>
          <p>
            The goal is to help Turtlr escape the dangers of plastic litter and
            natural predators to the safety of the open ocean.
          </p>
          <p>
            In addition to the basic HTML, JavaScript, and CSS required to
            create the game and its styling, 3D transformations and graphical
            flourishes improve the user experience.
          </p>
        </div>
      </section>
    );
  }

  componentDidMount() {
    const { debounce } = this.props
    window.addEventListener("DOMContentLoaded", this.handleResize)
    window.addEventListener('resize', debounce(this.handleResize, 32))
    window.addEventListener('scroll', debounce(this.handleScroll, 32))
  }

  componentWillUnmount() {
    const { debounce } = this.props
    window.removeEventListener("DOMContentLoaded", this.handleResize)
    window.removeEventListener('resize', debounce(this.handleResize, 32))
    window.removeEventListener('scroll', debounce(this.handleScroll, 32))
  }
}

export default Projects;
