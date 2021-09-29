import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, Name, NameMiddle, NameBackdrop } from "./NavbarElements";

function Navbar() {
  const [click, setClick] = useState(false); // declares a state variable click
  const handleClick = () => setClick(!click); // arrow function that reverses the state of click
  const [scrollNav, setScrollNav] = useState(false);

  function closeMobileMenu(location) {
    if (location === "/") {
      setScrollNav(false);
    } else {
      setScrollNav(true);
    }
    setClick(false);
  }

  const changeNav = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY >= window.innerHeight - 100) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
  };

  /* used to ensure the 'sign up' button is invisible on reload */
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <div className="navbar-invisible-box" />
      <Nav scrollNav={scrollNav} className="navbar">
        <section className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => {
              closeMobileMenu("/");
            }
            } /* close mobile menu when topleft is clicked */
          >
            <div className="navbar-name">
              <Name className="navbar-name-front" scrollNav={scrollNav}>
                NATE KOEHLER{" "}
                <i className="fas fa-palette" /* text and icon for link*/></i>
              </Name>
              <NameMiddle scrollNav={scrollNav} className="navbar-name-middle">
                NATE KOEHLER{" "}
                <i className="fas fa-palette" /* text and icon for link*/></i>
              </NameMiddle>
              <NameBackdrop
                scrollNav={scrollNav}
                className="navbar-name-backdrop"
              >
                NATE KOEHLER{" "}
                <i className="fas fa-palette" /* text and icon for link*/></i>
              </NameBackdrop>
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" /* first element in the navbar */>
              <Link to="/" className="nav-links" onClick={() => {
              closeMobileMenu("/");
            }}>
                HOME
              </Link>
            </li>
            <li className="nav-item" /* second element in the navbar */>
              <a
                href="resources/Resume.pdf"
                target="_blank"
                /* changes the URL */ className="nav-links"
              >
                RESUME
              </a>
            </li>
            <li className="nav-item" /* third element in the navbar */>
              <Link
                to="/artwork"
                /* changes the URL */ className="nav-links"
                onClick={() => {
                  closeMobileMenu("/artwork");
                }}
              >
                ARTWORK
              </Link>
            </li>
            <li className="nav-item" /* third element in the navbar */>
              <Link
                to="/about-me"
                /* changes the URL */ className="nav-links"
                onClick={() => {
                  closeMobileMenu("/about-me");
                }}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </section>
      </Nav>
    </>
  );
}
export default Navbar;
