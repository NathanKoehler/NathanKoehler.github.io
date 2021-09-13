import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Instagram, InstagramBackground } from "./FooterElements";
import ReactVisibilitySensor from "react-visibility-sensor";

function Footer() {
  const [scrollNav, setScrollNav] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () =>
    // sets offsetY to be a variable 0 through 1, 1 being at the bottom of page
    setOffsetY(
      window.scrollY /
        (Math.max( // accomidates for all the various browsers
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
        iicon.current.dispatchEvent(event2);
      }, 500); // delay ensures that the view has time to see the effect
    }
  };

  return (
    <section className="footer-container">
      <div
        className="footer-parallax"
        style={{
          /* changes the opacity and transform to emulate a parallax effect */
          opacity: `${offsetY * offsetY * 100}%`,
          transform: `translateY(${600 - offsetY * 600}px)`,
        }}
      >
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Let's Talk!</h2>
              <p>
                Check out my social media below, or send me an email for
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
                <Link
                  className="social-icon-link facebook"
                  to={{
                    pathname: "https://www.facebook.com/nathaniel.koehler.79",
                  }}
                  target="_blank" /* allows the link to open to another window */
                  aria-label="Facebook"
                >
                  <i
                    className="fab fa-facebook-f" /* this puts the facebook icon */
                  />
                </Link>
                <div
                  className="holder"
                  onMouseOver={() => setScrollNav(true)}
                  onMouseLeave={() => setScrollNav(false)}
                >
                  <Link
                    ref={iicon}
                    className="instagram"
                    to={{ pathname: "https://www.instagram.com/nate_koe/" }}
                    target="_blank"
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
                  </Link>
                </div>

                <a
                  className="social-icon-link email"
                  href="mailto:nathankoehle@gmail.com?subject=Business Inquiry&body=Hello!"
                >
                  <i className="far fa-envelope" />
                </a>
                <Link
                  className="social-icon-link twitter"
                  to={{ pathname: "https://twitter.com/Natpoki" }}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="social-icon-link linkedin"
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/nathaniel-koehler-52a5491ab/",
                  }}
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin" />
                </Link>
              </div>
            </ReactVisibilitySensor>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Footer;
