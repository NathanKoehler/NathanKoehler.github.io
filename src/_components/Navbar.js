import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, Name, NameMiddle, NameBackdrop } from "./NavbarElements";
import ResumePDF from "../_resources/NathanKoehler_Resume.pdf";

function Navbar({ setHandleNav }) {
  const [click, setClick] = useState(false); // declares a state variable click
  const handleClick = () => setClick(!click); // arrow function that reverses the state of click
  const [scrollNav, setScrollNav] = useState(false);

 const handleExternalNavchange = () => {
    if (window.location.pathname === "/") {
      setScrollNav(false);
    } else {
      setScrollNav(true);
    }
  }

  
  

  const closeMobileMenu = () => {
    setClick(false);
  }

  const changeNav = () => {
    if (window.location.pathname === "/") {
      if (window.scrollY >= 200) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
  };

  // /* potentially changes navbar on page change */
  // useEffect(() => {
    
  // }, [triggerNav]);

  
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    setHandleNav(handleExternalNavchange);
    return () => {
      window.removeEventListener("scroll", changeNav);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="navbar-invisible-box" />
      <Nav scrollNav={scrollNav} className={click ? "navbar active" : "navbar"}>
        <section className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu} /* close mobile menu when topleft is clicked */
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
                HOME
              </Link>
            </li>
            <li className="nav-item" /* second element in the navbar */>
              <a
                href={ResumePDF} // takes you to the resume pdf
                target="_blank"
                rel="noopener noreferrer"
                /* changes the URL */ className="nav-links"
              >
                RESUME
              </a>
            </li>
            <li className="nav-item" /* third element in the navbar */>
              <Link
                to="/artwork"
                /* changes the URL */ className="nav-links"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item" /* third element in the navbar */>
              <Link
                to="/about-me"
                /* changes the URL */ className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </section>
      </Nav>
    </React.Fragment>
  );
}
export default Navbar;
