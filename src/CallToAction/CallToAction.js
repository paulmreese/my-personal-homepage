import React, { Component } from 'react';
import './CallToAction.scss';


class CallToAction extends Component {

  render() {
    const { navIsOpen } = this.props
    return (
      <section className={ navIsOpen
          ? "CallToAction-container blurred"
          : "CallToAction-container"}>
        <h3>
          Have an offer your audience <strong>
            <em>can't refuse?</em>
          </strong>
        </h3>
        <div className="button-container">
          <button>Let them sign up, <strong>now!</strong></button>
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
}

export default CallToAction;
