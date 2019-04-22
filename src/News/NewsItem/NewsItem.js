import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class NewsItem extends Component {

  state = {
    topOfNews : 1,
    bottomOfNews : 2000
  }

  handleResize = () => {
    const topOfNews = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfNews =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfNews = topOfNews + heightOfNews
    this.setState({ topOfNews, bottomOfNews })
  }

  render() {
    const { name, description, position, headerImage, isFullWidth } = this.props
    return (
      <div className="NewsItem-container" key={ name }>
        <div className = {position === "center"
          ? "NewsItem-header-container center-content"
          : position === "right"
            ? "NewsItem-header-container right-justify"
            : "NewsItem-header-container left-justify"}>
          <img
            src={ require(`${headerImage}`) }
            alt={ name }
            className={ isFullWidth ? "NewsItem-header full-width" : "NewsItem-header"}/>
        </div>
        { description }
        <hr />
      </div>
    )
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
