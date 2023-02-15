import React, { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./_pages/Home";
import Services from "./_pages/Services";
import Artwork from "./_pages/Artwork";
import AboutMe from "./_pages/AboutMe";
import NCRInteractiveDemo from "./_pages/_projects/NCRInteractiveDemo";
import FingersCrossed from './_pages/_projects/FigureCrossed';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: "NCR Interactive Demo",
    path: "/ncr-interactive-demo",
    function: <NCRInteractiveDemo />,
  },
  {
    name: "Fingers Crossed",
    path: "/fingers-crossed",
    function: <FingersCrossed />,
  },
]

function AnimatedRoutes() {
const location = useLocation();
const prevLoc = React.useRef(location);
const homeScrollY = React.useRef(0);
const preventScroll = React.useRef(false);



useLayoutEffect(() => {
  
  if (location) { 
    if (prevLoc.current.pathname === "/" && location.pathname !== "/") {
      homeScrollY.current = window.scrollY;
    }
    
    if(location.pathname === "/" && projects.some((project) => project.path === prevLoc.current.pathname)) {
      window.scrollTo(0, homeScrollY.current);
      preventScroll.current = true;
    }
    prevLoc.current = location;
  }
}, [location])

const handleExitComplete = () => {
  if (preventScroll.current) {
    preventScroll.current = false;
  } else {
    window.scrollTo(0, 0);
  }
}

  return (
    <ParallaxProvider>
        <AnimatePresence initial={false} mode="wait" onExitComplete={handleExitComplete}>
                <Routes location={location} key={location.pathname}>
                    <Route exact path={`/`} element={<Home/>} />
                    <Route exact path={`/services`} element={<Services/>} />
                    <Route exact path={`/artwork`} element={<Artwork/>} />
                    <Route exact path={`/about-me`} element={<AboutMe/>} />
                    {
                      projects.map((project) => {
                        return (
                          <Route exact path={project.path} element={project.function} />
                        )
                      })
                    }
                </Routes>
        </AnimatePresence>
    </ParallaxProvider>
  )
}

export default AnimatedRoutes