import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Intro.css";
import Piano from "./Piano";
import { Parallax } from 'react-scroll-parallax';
import { ScrollButton, ScrollLink } from "../Scroll";
import { Link } from "react-router-dom";




function Intro() {
  const [isToCardsVisible, setIsToCardsVisible] = useState(false);

  useEffect(() => {
    setIsToCardsVisible(true);
  }, [])

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
                <li className="fullstack-header">FULLSTACK ENGINEER</li>
                <li className="software-header">SOFTWARE DEVELOPER</li>
                <li className="frontend-header">FRONTEND EXPERT</li>
                <li className="uiux-header">UI / UX DESIGNER</li>
                <li className="fullstack-header">FULLSTACK ENGINEER</li>
              </ul>
            </div>
          </h1>
          <p>
            Undergrad Senior at Georgia Tech studying Media & Computer Science
            looking for Summer 2024 Internships
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
            <div
              className="to-cards-button"
              style={isToCardsVisible ? { opacity: 1 } : { opacity: 0 }}
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
        </Parallax>
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
