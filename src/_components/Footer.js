import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
import { Instagram, InstagramBackground } from "./FooterElements";
import ReactVisibilitySensor from "react-visibility-sensor";
import { ScrollButton } from "./Scroll";
import { animateScroll as scroll } from "react-scroll";


function Footer() {
  const [scrollNav, setScrollNav] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
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

  /* custom parallax component because I only needed a simple effect */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const iicon = useRef(null); // used to enable the "fake hover" on the instagram logo

  /* the fake hover effect on the instagram logo */
  const triggerRippleHover = (isVisible) => {
    if (isVisible) {
      // if the logo comes into view, trigger the effect
      const event = new MouseEvent("mouseover", {
        view: window,
        bubbles: true,
        cancelable: true,
      }); // triggers the mock mouse over for the onmouseover javascript event

      const event2 = new MouseEvent("mouseout", {
        view: window,
        bubbles: true,
        cancelable: true,
      }); // undos the onmouseover javascript effect

      iicon.current.dispatchEvent(event);

      setTimeout(() => {
        if (iicon && iicon.current) {
          iicon.current.dispatchEvent(event2);
        }
      }, 500); // delay ensures that the view has time to see the effect
    }
  };

  return (
    <section className="footer-container">
      <div id="footer"
        className="footer-parallax"
        style={{
          /* changes the opacity and transform to emulate a parallax effect */
          opacity: `${offsetY * offsetY * 100}%`,
          transform: `translateY(${500 - offsetY * 500}px)`,
        }}
      >
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Let's Talk!</h2>
              <p>
                Check out my social media below and shoot me an email for
                inquiries or to say hello.
              </p>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <ReactVisibilitySensor
              delayedCall="true"
              intervalDelay="500"
              onChange={(isVisible) => triggerRippleHover(isVisible)}
            >
              <div className="social-icons">
                <a
                  className="social-icon-link github"
                  href="https://github.com/NathanKoehler"
                  rel="noopener noreferrer"
                  target="_blank" /* allows the link to open to another window */
                  aria-label="Github"
                >
                  <i
                    className="fab fa-github" /* this puts the github icon */
                  />
                </a>
                <div
                  className="holder"
                  onMouseOver={() => setScrollNav(true)}
                  onMouseLeave={() => setScrollNav(false)}
                >
                  <a
                    ref={iicon}
                    className="instagram"
                    href="https://www.instagram.com/nate_koe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <div className="instagram-background">
                      <InstagramBackground
                        scrollNav={scrollNav}
                        className="fab fa-instagram"
                      />
                    </div>
                    <Instagram
                      scrollNav={scrollNav}
                      className="fab fa-instagram"
                    />
                  </a>
                </div>

                <a
                  className="social-icon-link email"
                  href="mailto:nathankoehle@gmail.com?subject=Business Inquiry&body=Hello!"
                >
                  <i className="far fa-envelope" />
                </a>
                <a
                  className="social-icon-link twitter"
                  href="https://twitter.com/Natpoki"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="social-icon-link linkedin"
                  href="https://www.linkedin.com/in/natekoehler/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </ReactVisibilitySensor>
          </div>
        </section>
        <ReactVisibilitySensor delayedCall="true"  intervalDelay="1000">
          {({ isVisible }) => (
            <div
              className="to-top-button"
              style={isVisible ? { opacity: 1 } : { opacity: 0 }}
            >
              <ScrollButton
                onClick={() => {
                  scroll.scrollToTop();
                }}
                className="btns"
                buttonStyle="btn--invisible"
                buttonSize="btn--large--invisible"
              >
                <div
                  className="social-icon-link to-top-arrow"
                  aria-label="Scroll To Top"
                >
                  <i className="fas fa-chevron-up"></i>
                </div>
              </ScrollButton>
            </div>
          )}
        </ReactVisibilitySensor>
      </div>
    </section>
  );
}

export default Footer;
