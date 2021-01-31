import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './CallToAction.scss';


class CallToAction extends Component {

  handleResize = () => {
    const topOfHome = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfHome =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfHome = topOfHome + heightOfHome
    this.props.updateHome(Math.round(bottomOfHome))
  }

  handleScroll = () => {
    const heightOfHome =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    if (this.props.bottomOfHome !== heightOfHome) {
      this.handleResize()
    }
  }

  render() {
    const { navIsOpen } = this.props
    return (
      <section className={ navIsOpen
          ? "CallToAction-container blurred"
          : "CallToAction-container"}>
        <h3>
          Want to bring your ideas into <strong>focus?</strong>
        </h3>
        <h3>
          ...into the <em><strong>Cloud?</strong></em>
        </h3>
        <div className="button-container">
          
          <a
            href="http://www.linkedin.com/in/paul-m-reese"
            className="button-style"
            rel="noreferrer noopener"
            target="_blank">Let me help, <strong>today!</strong></a>
          <div className="arrow-container">
            <div className="RightArrow">
              <div className="line"></div>
              <div className="point"></div>
            </div>
          </div>
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

export default CallToAction;
