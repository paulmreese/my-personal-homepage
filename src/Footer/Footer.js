import React, { Component } from 'react';

import './Footer.scss';

import linkedInLogo from './img/In-White-72.png'
import linkedInLogoWebp from './img/In-White-72.webp'
import linkedInLogoLarge from './img/In-White-128.png'
import linkedInLogoLargeWebp from './img/In-White-128.webp'

import gitHubLogo from './img/GitHub-Mark-Light-64px.png'
import gitHubLogoWebp from './img/GitHub-Mark-Light-64px.webp'
import gitHubLogoLarge from './img/GitHub-Mark-Light-120px-plus.png'
import gitHubLogoLargeWebp from './img/GitHub-Mark-Light-120px-plus.webp'

import udacityLogo from './img/udacity-U-logo-60.png'
import udacityLogoWebp from './img/udacity-U-logo-60.webp'
import udacityLogoLarge from './img/udacity-U-logo-120.png'
import udacityLogoLargeWebp from './img/udacity-U-logo-120.webp'

class Footer extends Component {

  showCurrentYear() {
    return new Date().getFullYear();
  }

  render() {

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
              <picture>
                <source media="" srcSet={`${udacityLogo}`} type="image/jpeg"/>
                <source media="" srcSet={`${udacityLogoLarge}`} type="image/jpeg"/>
                <source media="" srcSet={`${udacityLogoWebp}`} type="image/webp"/>
                <source media="" srcSet={`${udacityLogoLargeWebp}`} type="image/webp"/>
                <img
                  src = { udacityLogo }
                  srcSet = {`${udacityLogo} 60w,
                             ${udacityLogoLarge} 2x`}
                  alt = "Udacity Logo"
                  className = "udacity-logo"/>
              </picture>
            </a>
            <a href="http://www.linkedin.com/in/paul-m-reese" className="social-button">
              <picture>
                <source media="" srcSet={`${linkedInLogo}`} type="image/jpeg"/>
                <source media="" srcSet={`${linkedInLogoLarge}`} type="image/jpeg"/>
                <source media="" srcSet={`${linkedInLogoWebp}`} type="image/webp"/>
                <source media="" srcSet={`${linkedInLogoLargeWebp}`} type="image/webp"/>
                <img
                  src = { linkedInLogo }
                  srcSet = {`${linkedInLogo} 72w,
                             ${linkedInLogoLarge} 2x`}
                  alt = 'LinkedIn "In" Logo'
                  className = "linkedIn-logo" />
              </picture>
            </a>
            <a href="https://github.com/paulmreese/" className="social-button">
              <picture>
                <source media="" srcSet={`${gitHubLogo}`} type="image/jpeg"/>
                <source media="" srcSet={`${gitHubLogoLarge}`} type="image/jpeg"/>
                <source media="" srcSet={`${gitHubLogoWebp}`} type="image/webp"/>
                <source media="" srcSet={`${gitHubLogoLargeWebp}`} type="image/webp"/>
                <img
                  src = { gitHubLogo }
                  srcSet = {`${gitHubLogo} 60w,
                             ${gitHubLogoLarge} 2x`}
                  alt = "GitHub Octocat Logo"
                  className="gitHub-logo"/>
              </picture>
            </a>

          </span>
        </footer>
      </div>

    );
  }
}

export default Footer;
