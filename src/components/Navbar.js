import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { Nav, Name, NameMiddle, NameBackdrop } from "./NavbarElements";

function Navbar() {
  const [click, setClick] = useState(false); // declares a state variable click
  // click is used to determine the functionality of the navbar icon
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click); // arrow function that reverses the state of click
  const closeMobileMenu = () => setClick(false); //

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const [scrollNav, setScrollNav] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("btn--outline");

  const changeNav = () => {
    if (window.location.pathname === "/") {
      if (
        window.scrollY >= window.innerHeight - 100
      ) {
        setScrollNav(true);
        setButtonStyle("btn--outline2");
      } else {
        setScrollNav(false);
        setButtonStyle("btn--outline");
      }
    } 
  };

  /* used to ensure the 'sign up' button is invisible on reload */
  useEffect(() => {
    window.addEventListener("resize", showButton);
    window.addEventListener("scroll", changeNav);
    showButton();
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav} className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={
              closeMobileMenu
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
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item" /* second element in the navbar */>
              <Link
                to="/services"
                /* changes the URL */ className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item" /* third element in the navbar */>
              <Link
                to="/artwork"
                /* changes the URL */ className="nav-links"
                onClick={closeMobileMenu}
              >
                Artwork
              </Link>
            </li>

            <li className="nav-item" /* first element in the navbar */>
              <Link
                to="/about-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle={buttonStyle}>ABOUT ME</Button>}
        </div>
      </Nav>
    </>
  );
}
export default Navbar;
