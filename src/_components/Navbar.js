import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Nav, Name, NameMiddle, NameBackdrop } from "./NavbarElements";
import ResumePDF from "../_resources/NathanKoehler_Resume.pdf";
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar } from "@mui/material";

function Navbar() {
  const [click, setClick] = useState(false); // declares a state variable click
  const handleClick = () => setClick(!click); // arrow function that reverses the state of click
  const [scrollNav, setScrollNav] = useState(false);
  const [backButton, setBackButton] = useState(false);

  
  

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

  /* potentially changes navbar on page change */
  const location = useLocation()

  useEffect(() => {
    // runs on location, i.e. route, change
      if (location.pathname === "/") {
        if (window.scrollY >= 200) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }

        if (backButton) {
          setBackButton(false);
        }
      } else {
        setScrollNav(true);

        if (!backButton && !['about-me', 'artwork', 'services'].includes(location.pathname)) {
          setBackButton(true);
        }
      }
      
  }, [location])
  

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="navbar-invisible-box" />
      <Nav scrollNav={scrollNav} className={click ? "navbar active" : "navbar"}>
        <AppBar color="transparent" sx={{ height: "80px" }}>
          <Toolbar sx={{ height: "100%", justifyContent: "space-between" }}>
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu} /* close mobile menu when topleft is clicked */
            >
              <div className="navbar-name">
                <Name className="navbar-name-front" scrollNav={scrollNav}>
                  NATE KOEHLER&nbsp;
                  <i className="fas fa-palette" /* text and icon for link*/></i>
                </Name>
                <NameMiddle scrollNav={scrollNav} className="navbar-name-middle">
                  NATE KOEHLER&nbsp;
                  <i className="fas fa-palette" /* text and icon for link*/></i>
                </NameMiddle>
                <NameBackdrop
                  scrollNav={scrollNav}
                  className="navbar-name-backdrop"
                >
                  NATE KOEHLER&nbsp;
                  <i className="fas fa-palette" /* text and icon for link*/></i>
                </NameBackdrop>
              </div>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className={`nav-item switch ${backButton ? 'active' : ''}` } /* first element in the navbar */>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  BACK
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
          </Toolbar>
        </AppBar>
      </Nav>
    </React.Fragment>
  );
}
export default Navbar;
