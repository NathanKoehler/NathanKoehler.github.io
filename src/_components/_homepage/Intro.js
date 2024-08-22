import React from "react";
import "../../App.css";
import "./Intro.scss";
import Piano from "./Piano";
import { ScrollButton, ScrollLink } from "../Scroll";
import { Link } from "react-router-dom";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Intro() {
  return (
    <div className="intro-invisible-width">
      <div id="top" className="intro-container">
        <Piano className="piano" />
        <ParallaxBanner style={{ position: "initial" }}>
          <ParallaxBannerLayer
            expanded={false}
            translateY={[0, 60]}
            opacity={[0.9, 1]}
          >
            <div className="intro-parallax">
              <h1 className="intro-text">
                NATE IS A
                <div>
                  <ul>
                    <li className="fullstack-header">FULLSTACK ENGINEER</li>
                    <li className="software-header">FORMER FAANG INTERN</li>
                    <li className="software-header">SOFTWARE DEVELOPER</li>
                    <li className="software-header">FORMER TESLA INTERN</li>
                    <li className="frontend-header">REACT JS EXPERT</li>
                    <li className="uiux-header">UI / UX DESIGNER</li>
                    <li className="fullstack-header">FULLSTACK ENGINEER</li>
                  </ul>
                </div>
              </h1>
              <p>
                Georgia Tech Undergrad looking for 2025 New Grad Opportunities
              </p>
              <div className="intro-btns">
                <ScrollLink goTo="cards" vOffset={-250}>
                  PROJECTS
                </ScrollLink>
                <Link to="/artwork">GALLERY</Link>
                <ScrollLink goTo="skills" vOffset={-250}>
                  SKILLS
                </ScrollLink>
                <ScrollLink goTo="footer" vOffset={-250}>
                  CONTACT
                </ScrollLink>
              </div>
              <div className="to-cards-button">
                <ScrollButton
                  goTo="cards"
                  vDuration={800}
                  vOffset={-250}
                  className="btns"
                  buttonStyle="btn--invisible"
                  buttonSize="btn--large--invisible"
                >
                  <div className="to-cards-arrow" aria-label="Scroll To Cards">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </ScrollButton>
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        <div className="bottom-made-in-react">
          <p>Made in React JS</p>
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
