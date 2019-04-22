import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './News.scss';
import HeroImage from '../HeroImage/HeroImage';

import newsHeader from './img/Scrub-Sky-Turbines-Hero-Large.jpg';

class News extends Component {

  handleResize = () => {
    const topOfNews = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfNews =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfNews = topOfNews + heightOfNews
    this.props.updateNews(bottomOfNews)
  }

  render() {
    const { navIsOpen } = this.props
    return (

      <section className={ navIsOpen
            ? "News-container blurred"
            : "News-container"}>
        <div className="News-image-container">
          <HeroImage
            heroImageSrc = { newsHeader }
            heroImageAlt = "Turbines working in scrublands"
            pageName = "Recent News"
            navIsOpen = { navIsOpen }/>
        </div>
        {/*<img
          src={ classesHeader }
          alt="Body By Brii Classes"
          className="Classes-header"/>*/}
        <hr />
        {//Post
        }
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

export default News;
