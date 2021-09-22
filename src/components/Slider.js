import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function Slider() {
  return (
    <section className="slider">
      <div className="slider-top">
        

        <Link
          className="slider-links-left"
          to="/"
          /* changes the URL */
        >
          <h2 className="slider-title-left">我 懂 中 文</h2>
        </Link>
        <h1 className="slider-title">Skills</h1>
        <Link
          className="slider-links-right"
          to="/artwork"
          /* changes the URL */
        >
          <h2 className="slider-title-right">View my art skills</h2>
        </Link>
      </div>
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
            <li style={{ color: "#72b7e8" }}>Photoshop</li>
            <li>InDesign</li>

            <li>React Native</li>
            <li>Unity</li>
            <li>Autodesk Maya</li>
            <li>React.js</li>
            <li>After Effects</li>
          </ul>
        </div>
      </div>
      <div className="marquee-background">
        <div className="i-marquee">
          <ul className="i-marquee-content">
            <li>
              <i className="fab fa-aws" />
            </li>
            <li>
              <i className="devicon-react-original colored" />
            </li>
            <li>
              <i className="fab fa-js-square" />
            </li>
            <li>
              <i className="fab fa-rust" />
            </li>
            <li>
              <i className="fab fa-linux" />
            </li>
            <li>
              <i className="fab fa-git-alt" />
            </li>
            <li>
              <i className="fab fa-wix" />
            </li>
            <li>
              <i className="fab fa-python" />
            </li>
            <li>
              <i className="fab fa-node" />
            </li>
            <li>
              <i className="devicon-c-plain" />
            </li>
            <li>
              <i className="devicon-cplusplus-plain" />
            </li>
            <li>
              <i className="devicon-csharp-plain" />
            </li>
            <li>
              <i className="devicon-kotlin-plain" />
            </li>
            <li>
              <i className="devicon-apple-original" />
            </li>
            <li>
              <i className="devicon-tailwindcss-plain colored" />
            </li>
            <li>
              <i className="devicon-illustrator-plain" />
            </li>
            <li>
            <i className="devicon-photoshop-line colored"></i>
            </li>
            <li>
              <i className="devicon-aftereffects-plain" />
            </li>

            <li>
              <i className="fab fa-aws" />
            </li>
            <li>
              <i className="devicon-react-original colored" />
            </li>
            <li>
              <i className="fab fa-js-square" />
            </li>
            <li>
              <i className="fab fa-rust" />
            </li>
            <li>
              <i className="fab fa-linux" />
            </li>
            <li>
              <i className="fab fa-git-alt" />
            </li>
            <li>
              <i className="fab fa-wix" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Slider;
