import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Parallax } from 'react-scroll-parallax';
import { Link } from "react-scroll";
import { ScrollButton } from "./Scroll";

function Profile() {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const handleScroll = () =>
    // sets offsetY to be a variable 0 through 1, 1 being at the bottom of page
    setOffsetY(
      window.scrollY /
        (Math.max(
          // accomidates for all the various browsers
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) -
          window.innerHeight)
    );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const timer = () => setTimeout(() => {
      setVisible(true);
    }, 2000);
    const timerId = timer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timerId);
    };
  }, []);

  

  return (
    <section className="profile">
      <div className="profile-top">
        <div className="text-over-image">
          <h1>
            My Name Is <mark className="light-red">Nate</mark>
          </h1>
        </div>
        <Parallax
          translateY={-15}
          className="profile-top-container"
        >
          <img
            style={{
              /* changes the opacity to help the parallax effect */
              opacity: `${100 - offsetY * 100}%`,
            }}
            src="/images/selfie.png"
            alt="Selfie"
            className="profile-img"
          />
          <div className="profile-top-content">
            <div 
            style={{
              /* changes the opacity to help the parallax effect */
              opacity: `${100 - offsetY * 100}%`,
            }}
            className="profile-top-text"
            >
              <h2>
                But you can call me <mark className="red">Nathan</mark>,&nbsp;
                <mark className="red">Nathaniel</mark>, or&nbsp;
                <mark className="red">曾雷生</mark> <span role="img" aria-label="smile">&#128516;</span>
              </h2>
              <p>
                I'm currenty a undergrad studying Media and Design at&nbsp;
                <mark className="small-red">Georgia Tech.</mark> <span></span>&#128029;&nbsp;
              </p>
              <p>
                I came from a trilingual family and enjoy both coding and
                illustration. <span></span>&#128187;&nbsp;
              </p>
              <p>
                If you are interested in hiring me, you can check out my&nbsp;
                <mark className="small-red">
                  <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                    info below.
                  </Link>
                </mark>&nbsp;
                &#128071;&nbsp;
              </p>
              <p>
                I'm now available for&nbsp;
                <mark className="small-red">
                  <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                    part-time roles
                  </Link>
                </mark>
                ,&nbsp;
                <mark className="small-red">
                  <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                    internships
                  </Link>
                </mark>
                , and&nbsp;
                <mark className="small-red">
                  <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                    co-ops.
                  </Link>
                </mark>
                <span role="img" aria-label="Spaceship">&nbsp;&#128640;&nbsp;</span>
              </p>
              <p>
                If you're just browsing, check out my work in the art gallery,
                too. <span role="img" aria-label="Pointer">&#127912;&nbsp;</span>
              </p>
              <p>
                I also have a huge addication to game jams and hackathons.
                <span role="img" aria-label="Calender">&nbsp;&#128198;&nbsp;</span>
              </p>
              <p>
                If you want any website or app created today&nbsp;
                <mark className="small-red">
                  <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                    let me know!
                  </Link>
                </mark>&nbsp;
                <span role="img" aria-label="Wave" className="wave">&#128075;&nbsp;</span>
              </p>
            </div>
            <div
              className="about-footer-button"
              style={isVisible ? { opacity: 1 } : { opacity: 0 }}
            >
              <ScrollButton
                goTo="footer"
                vDuration={800}
                vOffset={-500}
                className="btns"
                buttonStyle="btn--invisible"
                buttonSize="btn--large--invisible"
              >
                <div
                  className="about-footer-arrow"
                  aria-label="Scroll To Bottom"
                >
                  <i className="fas fa-chevron-down"></i>
                </div>
              </ScrollButton>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default Profile;
