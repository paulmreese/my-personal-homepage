import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './News.scss';
import HeroImage from '../HeroImage/HeroImage';

import deepRacerMediumImage from './img/Medium-branded-DeepRacer-GUI-bordered.png';

class News extends Component {

  handleResize = () => {
    const topOfNews = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfNews =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfNews = topOfNews + heightOfNews
    this.props.updateNews(Math.round(bottomOfNews-5))
  }

  handleScroll = () => {
    const topOfNews = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfNews =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfNews = topOfNews + heightOfNews

    if (this.props.bottomOfNews !== bottomOfNews) {
      this.props.updateNews(Math.round(bottomOfNews-5))
    }
  }

  render() {
    const { navIsOpen, MirroredGlassTruck } = this.props
    return (

      <section className={ navIsOpen
            ? "News-container blurred"
            : "News-container"}
        id = "news">
        <div className="News-image-container">
          <HeroImage
            heroImageSrc = { MirroredGlassTruck }
            heroImageAlt = "Turbines working in scrublands"
            pageName = "News"
            navIsOpen = { navIsOpen }/>
        </div>
        <p>
          A car that can reflect on its performance? </p><p>
          That's <strong>Reinforcement Learning</strong> with Amazon Web
          Services(AWS)–<br/>
          <a
              href="https://aws.amazon.com/deepracer/"
              target="_blank"
              rel="noopener noreferrer">
            AWS DeepRacer</a>!
        </p>
        <figure>
          <img
            src={ deepRacerMediumImage }
            alt="The GUI of Gazebo simulating the 'Shanghai Sudu' track from AWS
                 DeepRacer, using a Google Cloud Platform(GCP) vitrual machine."/>
          <figcaption>
            Read my article on Medium to learn more about DeepRacer and cloud computing!
          </figcaption>
        </figure>
        <div className="article-description">
          <p>
            By using Machine Learning(a form of Artificial Intelligence), a model
            gradually learns to navigate a new course through rewards
            for good decision-making on a moment-to-moment basis.</p>
          <p>
            Competitors train the "brains" of their model in a simulated
            environment, and then upload this pre-trained model into actual
            model-scale cars to compare times.
          </p>
          <p>
            Because of the stiff competition, racers can potentially spend a
            hefty sum trying to optimize their methods for a given monthly
            track, but through local training and alternative cloud-computing
            methods any racer can greatly reduce this cost! Learn how
            to run this AWS-designed software on Google's virtual machines!
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

export default News;
