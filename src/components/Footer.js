import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Instagram, InstagramBackground } from "./FooterElements";
import ReactVisibilitySensor from "react-visibility-sensor";
import useWindowDimensions from "./Helper";

function Footer() {
  const footerContainer = useRef(null);
  const [scrollNav, setScrollNav] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const { height, width } = useWindowDimensions(footerContainer);
  const handleScroll = () =>
    setOffsetY(
      window.scrollY /
        (Math.max(
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

  const iicon = useRef(null);

  const triggerRippleHover = (isVisible) => {
    if (isVisible) {
      const event = new MouseEvent("mouseover", {
        view: window,
        bubbles: true,
        cancelable: true,
      });

      const event2 = new MouseEvent("mouseout", {
        view: window,
        bubbles: true,
        cancelable: true,
      });

      iicon.current.dispatchEvent(event);

      setTimeout(() => {
        iicon.current.dispatchEvent(event2);
      }, 500);
    }
  };

  return (
    <div className="footer-container">
      <div
        className="footer-parallax"
        style={{ transform: `translateY(${offsetY})` }}
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
    </div>
  );
}

export default Footer;
