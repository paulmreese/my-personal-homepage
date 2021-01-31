import React, { Component } from 'react';

import './Footer.scss';

import linkedInLogo from './img/In-White-72.png'
import linkedInLogoLarge from './img/In-White-128.png'

import gitHubLogo from './img/GitHub-Mark-Light-64px.png'
import gitHubLogoLarge from './img/GitHub-Mark-Light-120px-plus.png'

import udacityLogo from './img/udacity-U-logo-60.png'
import udacityLogoLarge from './img/udacity-U-logo-120.png'

class Footer extends Component {

  showCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    const linkedInSrcSet = linkedInLogoLarge + " 128w"
    const gitHubSrcSet = gitHubLogoLarge + " 120w"
    const udacitySrcSet = udacityLogoLarge + " 120w"

    return (
      <div className="Footer-container" id="contact">
        <footer className="Footer">
          <span className="footer-text">
            &copy;<strong>2018-{this.showCurrentYear()}</strong> Paul M. Reese
          </span>
          <span className="social-buttons">
            <a
              href = "https://confirm.udacity.com/EE6KADQM"
              className = "social-button">
              <img
                src = { udacityLogo }
                srcSet = { udacitySrcSet }
                alt = "Udacity Logo"
                className = "udacity-logo"/>
            </a>
            <a href="http://www.linkedin.com/in/paul-m-reese" className="social-button">
              <img
                src = { linkedInLogo }
                srcSet = { linkedInSrcSet }
                alt = 'LinkedIn "In" Logo'
                className = "linkedIn-logo" />
            </a>
            <a href="https://github.com/paulmreese/" className="social-button">
              <img src = { gitHubLogo }
                srcSet = { gitHubSrcSet }
                alt = "GitHub Octocat Logo"
                className="gitHub-logo"/>
            </a>

          </span>
        </footer>
      </div>

    );
  }
}

export default Footer;
