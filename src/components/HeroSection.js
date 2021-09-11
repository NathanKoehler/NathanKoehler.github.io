import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-invisible-width">
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>NATE IS A UI/UX DESIGNER</h1>
        <p>Undergrad student at Georgia Tech studying Media and Interaction Design looking for a 2022 spring internship.</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn-large"
          >
            PROGRAMMING
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn-large"
          >
            MEDIA 
            <i className="fas fa-chevron-circle-down" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
