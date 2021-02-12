import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './AIML.scss';
import HeroImage from '../HeroImage/HeroImage';

import smallDeepRacerMediumImage from './img/Medium-branded-DeepRacer-GUI-bordered-350px-224px.jpg';
import mediumDeepRacerMediumImage from './img/Medium-branded-DeepRacer-GUI-bordered-450px-288px.jpg';
import largeDeepRacerMediumImage from './img/Medium-branded-DeepRacer-GUI-bordered-945px-604px.jpg';

class AIML extends Component {

  handleResize = () => {
    const topOfAIML = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfAIML =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfAIML = topOfAIML + heightOfAIML
    this.props.updateAIML(Math.round(bottomOfAIML-5))
  }

  handleScroll = () => {
    const topOfAIML = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfAIML =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfAIML = topOfAIML + heightOfAIML

    if (this.props.bottomOfAIML !== bottomOfAIML) {
      this.props.updateAIML(Math.round(bottomOfAIML-5))
    }
  }

  render() {
    const { navIsOpen, fallbackHeroImageSrc, MirroredGlassTruckSrcSet } = this.props
    return (

      <section className={ navIsOpen
            ? "AIML-container blurred"
            : "AIML-container"}
        id = "aiml">
        <div className="AIML-image-container">
          <HeroImage
            fallbackHeroImageSrc = { fallbackHeroImageSrc }
            heroImageSrcSet = { MirroredGlassTruckSrcSet }
            heroImageAlt = "Turbines working in scrublands"
            pageName = "AI/ML"
            navIsOpen = { navIsOpen }/>
        </div>
        <div className="AIML-content">
          <p>
            A car that can reflect on its performance? Using <a
              href="https://deepsense.ai/what-is-reinforcement-learning-the-complete-guide/"
              target="_blank"
              rel="noopener noreferrer">Reinforcement Learning</a>(a form of
            Machine Learning), an agent gradually learns to
            navigate a new course through rewards for good decision-making on a
            moment-to-moment basis.
          </p>
          <figure>
            <a
              href="https://medium.com/@paul.m.reese/how-to-use-google-cloud-platform-to-train-an-aws-deepracer-ai-model-2a8b71c73593"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={ smallDeepRacerMediumImage }
                srcSet={`${smallDeepRacerMediumImage}  350w,
                       ${mediumDeepRacerMediumImage}  450w,
                       ${largeDeepRacerMediumImage}  945w`}
                alt="The GUI of Gazebo simulating the 'Shanghai Sudu' track from AWS
                     DeepRacer, using a Google Cloud Platform(GCP) virtual machine."/>
              <figcaption>
              Read my article on Medium to learn how to train your AWS DeepRacer
              on GCP infrastructure!
              </figcaption>
              </a>
          </figure>
          <p>
            <a
              href="https://aws.amazon.com/deepracer/"
              target="_blank"
              rel="noopener noreferrer">
            AWS DeepRacer</a> Competitors
            train their model in a simulated virtual environment.
            Then, they can upload this pre-trained model into physical
            model-scale cars to compare their AI driving ability.
          </p>
          <p>
            By using both <a
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer">
            Google Cloud Platform(GCP)</a> and <a
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer">
            Amazon Web Services(AWS)</a> in conjunction, racers(and many
            others) can realize <strong>significant</strong> cost savings!
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

export default AIML;
