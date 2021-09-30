import React, { useEffect, useState } from "react";
import "./Profile.css";
import Parallax from "react-rellax";
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
    <>
      <section className="profile">
        <div className="profile-top">
          <Parallax speed={1} className="text-over-image">
            <h1>
              My Name Is <mark className="light-red">Nate</mark>
            </h1>
          </Parallax>
          <Parallax
            style={{
              /* changes the opacity and transform to emulate a parallax effect */
              opacity: `${170 - offsetY * 170}%`,
              width: "100%",
              height: "100%",
            }}
            speed={-7}
            className="profile-top-container"
          >
            <img
              src="/images/selfie.png"
              alt="Selfie"
              className="profile-img"
            />
            <div className="profile-top-content">
              <div className="profile-top-text">
                <h2>
                  But you can call me <mark className="red">Nathan</mark>,{" "}
                  <mark className="red">Nathaniel</mark>, or{" "}
                  <mark className="red">曾雷生</mark> &#128516;
                </h2>
                <p>
                  I'm currenty a undergrad studying Media and Design at{" "}
                  <mark className="small-red">Georgia Tech.</mark> &#128029;{" "}
                </p>
                <p>
                  I came from a trilingual family and enjoy both coding and
                  illustration. &#128187;{" "}
                </p>
                <p>
                  If you are interested in hiring me, you can check out my{" "}
                  <mark className="small-red">
                    <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                      info below.
                    </Link>
                  </mark>{" "}
                  &#128071;{" "}
                </p>
                <p>
                  I'm now available for{" "}
                  <mark className="small-red">
                    <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                      part-time roles
                    </Link>
                  </mark>
                  ,{" "}
                  <mark className="small-red">
                    <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                      internships
                    </Link>
                  </mark>
                  , and{" "}
                  <mark className="small-red">
                    <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                      co-ops.
                    </Link>
                  </mark>{" "}
                  &#128640;{" "}
                </p>
                <p>
                  If you're just browsing, check out my work in the art gallery,
                  too. &#127912;
                </p>
                <p>
                  I also have a huge addication to game jams and hackathons.
                  &#128198;
                </p>
                <p>
                  If you want any website or app created today{" "}
                  <mark className="small-red">
                    <Link to={"footer"} spy={true} smooth={true} offset={-500}>
                      let me know!
                    </Link>
                  </mark>{" "}
                  <span className="wave">&#128075;</span>
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
    </>
  );
}

export default Profile;