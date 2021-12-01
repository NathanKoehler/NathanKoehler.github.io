import React from "react";
import "../App.css";
import "./HeroSection.css";
import Parallax from "react-rellax";
import { ScrollButton, ScrollLink } from "./Scroll";
import { Link } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";

function HeroSection() {
  return (
    <div className="hero-invisible-width">
      <div id="top" className="hero-container">
        <video src="/videos/stars.mp4" autoPlay loop muted />
        <Parallax
          speed={6}
          /* determines the speed of the parallax */ className="hero-parallax"
        >
          <h1>
            NATE IS A <mark className="light-blue">UI/UX</mark> DESIGNER
          </h1>
          <p>
            Undergrad student at Georgia Tech studying Media and Interaction
            Design looking for a 2022 internship.
          </p>
          <div className="hero-btns">
            <ScrollLink goTo="cards" vOffset={-250}>
              PROJECTS
            </ScrollLink>
            <Link to="/artwork" >
              ARTWORK
            </Link>
            <ScrollLink goTo="skills" vOffset={-250}>
              SKILLS
            </ScrollLink>
            <ScrollLink goTo="footer" vOffset={-250}>
              CONTACT <i className="fas fa-chevron-circle-down" />
            </ScrollLink>
          </div>
          <ReactVisibilitySensor delayedCall="true"  intervalDelay="1000">
          {({ isVisible }) => (
            <div
              className="to-cards-button"
              style={isVisible ? { opacity: 1 } : { opacity: 0 }}
            >
              <ScrollButton
                goTo="cards"
                vDuration={800}
                vOffset={-250}
                className="btns"
                buttonStyle="btn--invisible"
                buttonSize="btn--large--invisible"
              >
                <div
                  className="to-cards-arrow"
                  aria-label="Scroll To Cards"
                >
                  <i className="fas fa-chevron-down"></i>
                </div>
              </ScrollButton>
            </div>
          )}
        </ReactVisibilitySensor>
        </Parallax>
      </div>
    </div>
  );
}

export default HeroSection;
