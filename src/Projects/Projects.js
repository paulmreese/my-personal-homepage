import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom';

import './Projects.scss';
import TrilliumSources from '../HeroSources/TrilliumSources'
import HeroImage from '../HeroImage/HeroImage';

import smallTurtlrImage from './img/Turtlr-gameplay-screenshot-350px-233px.jpg';
import smallTurtlrImageWebp from './img/Turtlr-gameplay-screenshot-350px-233px.jpg.webp';
import mediumTurtlrImage from './img/Turtlr-gameplay-screenshot-450px-300px.jpg';
import mediumTurtlrImageWebp from './img/Turtlr-gameplay-screenshot-450px-300px.jpg.webp';
import largeTurtlrImage from './img/Turtlr-gameplay-screenshot-900px-600px.jpg';
import largeTurtlrImageWebp from './img/Turtlr-gameplay-screenshot-900px-600px.jpg.webp';

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
    const { navIsOpen } = this.props

    return (

      <section className={ navIsOpen
            ? "Projects-container blurred"
            : "Projects-container"}
        id = "projects">
        <div className="Projects-image-container">
          <HeroImage
            pageName = "Projects"
            navIsOpen = { navIsOpen }>
            <TrilliumSources />
          </HeroImage>
        </div>
        <div className="Projects-content">

          <p>
            I believe that some of the biggest strides in knowledge come from its
            application to interesting problems, especially when applied with
            pure curiosity.
          </p>

          <figure>
            <NavLink to='/OldTurtlr'>

              <picture>
                <source media="(max-width: 449px)" srcSet={smallTurtlrImageWebp} type="image/webp"/>
                <source media="(min-width: 900px)" srcSet={largeTurtlrImageWebp} type="image/webp"/>
                <source media="(min-width: 450px)" srcSet={mediumTurtlrImageWebp} type="image/webp"/>
                <source media="(max-width: 449px)" srcSet={smallTurtlrImage} type="image/jpeg"/>
                <source media="(min-width: 900px)" srcSet={largeTurtlrImage} type="image/jpeg"/>
                <source media="(min-width: 450px)" srcSet={mediumTurtlrImage} type="image/jpeg"/>
                <img
                  src={ smallTurtlrImage }
                  srcSet={`${smallTurtlrImage} 350w,
                           ${mediumTurtlrImage} 450w,
                           ${largeTurtlrImage} 900w`}
                  alt="The GUI of Turtlr, the loggerhead turtle, showing a photorealistic
                       Turtlr moving across a pixel-art beach towards the sea while
                       dodging plastic litter and seagulls."
                  width="350px"
                  height="233px"/>
              </picture>
              <figcaption>
                Help Turtlr, the loggerhead sea turtle, escape to the sea!
              </figcaption>
            </NavLink>
          </figure>
          <p>
            Turtlr is a JavaScript game using the HTML canvas and custom sprites to
            create a clone of the classic game Frogger, featuring Turtlr,
            the loggerhead sea turtle! Help Turtlr escape the dangers of
            plastic litter and natural predators, to the safety of the open
            ocean.</p>
          <p>
            In addition to the HTML, JavaScript, and CSS required to
            create the game engine, 3D transformations and graphical
            flourishes improve the user experience.
          </p>
          <p>
            <a
              href={process.env.PUBLIC_URL + '/OldTurtlr/'}
              target="_blank"
              rel="noopener noreferrer"
              >Play Turtlr</a> | <a
              href="https://github.com/paulmreese/frontend-nanodegree-arcade-game"
              target="_blank"
              rel="noopener noreferrer">View Turtlr Source</a>
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
