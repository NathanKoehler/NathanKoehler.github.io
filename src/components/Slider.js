import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <section className="slider">
      <h1 className="slider__title">Skills</h1>
      <div className="marquee-background">
        <div className="marquee">
          <ul className="marquee-content">
            <li>React Native</li>
            <li>Unity</li>
            <li>Autodesk Maya</li>
            <li>React.js</li>
            <li>After Effects</li>
            <li>Illustrator</li>
            <li>Unreal Engine</li>
            <li>Photoshop</li>
            <li>InDesign</li>

            <li>React Native</li>
            <li>Unity</li>
            <li>Autodesk Maya</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
      <div className="marquee-background">
        <div className="i-marquee">
          <ul className="i-marquee-content">
            <li><i className="fab fa-aws" /></li>
            <li><i className="fab fa-react" /></li>
            <li><i className="fab fa-js-square" /></li>
            <li><i className="fab fa-rust" /></li>
            <li><i className="fab fa-linux" /></li>
            <li><i className="fab fa-git-alt" /></li>
            <li><i className="fab fa-wix" /></li>
            <li><i className="fab fa-python" /></li>
            <li><i className="fab fa-node" /></li>

            <li><i className="fab fa-aws" /></li>
            <li><i className="fab fa-react" /></li>
            <li><i className="fab fa-js-square" /></li>
            <li><i className="fab fa-rust" /></li>
            <li><i className="fab fa-linux" /></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Slider;
