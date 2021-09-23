import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Parallax from "react-rellax";
import { ScrollButton } from "./ScrollButton";

function HeroSection() {
  return (
    <div className="hero-invisible-width">
      <div id="top" className="hero-container">
        <video
          src="/videos/video-1.mp4"
          autoPlay
          loop
          muted
        />
        <Parallax
          speed={6}
          /* determines the speed of the parallax */ className="hero-parallax"
        >
          <h1>NATE IS A <mark className="light-blue">UI/UX</mark> DESIGNER</h1>
          <p>
            Undergrad student at Georgia Tech studying Media and Interaction
            Design looking for a 2022 spring internship.
          </p>
          <div className="hero-btns">
            <Button
              goTo="/artwork"
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn-large"
            >
              ARTWORK
            </Button>
            <ScrollButton
              goTo="footer"
              vOffset={-250}
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn-large"
            >
              CONTACT ME <i className="fas fa-chevron-circle-down" />
            </ScrollButton>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default HeroSection;
