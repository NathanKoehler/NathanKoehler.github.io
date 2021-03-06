import React from "react";
import "../App.css";
import "./Intro.css";
import Piano from "./Piano";
import { Parallax } from 'react-scroll-parallax';
import { ScrollButton, ScrollLink } from "./Scroll";
import { Link } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";

function Intro() {
  return (
    <div className="intro-invisible-width">
      <div id="top" className="intro-container">
        <Piano className="piano" />
        <Parallax
          translateY={5} /* determines the speed of the parallax */ 
          className="intro-parallax"
        >
          <h1 className="intro-text">
            NATE IS A
            <div>
              <ul>
                <li className="uiux-header">UI / UX DESIGNER</li>
                <li className="software-header">SOFTWARE DEVELOPER</li>
                <li className="frontend-header">FRONTEND DEVELOPER</li>
                <li className="graphic-header">GRAPHIC DESIGNER</li>
                <li className="uiux-header">UI / UX DESIGNER</li>
              </ul>
            </div>
          </h1>
          <p>
            Undergrad student at Georgia Tech studying Media and Interaction
            Design looking for a 2022 internship.
          </p>
          <div className="intro-btns">
            <ScrollLink goTo="cards" vOffset={-250}>
              PROJECTS
            </ScrollLink>
            <Link to="/artwork" >
              GALLERY
            </Link>
            <ScrollLink goTo="skills" vOffset={-250}>
              SKILLS
            </ScrollLink>
            <ScrollLink goTo="footer" vOffset={-250}>
              CONTACT
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

export default Intro;
