import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./_pages/Home";
import Services from "./_pages/Services";
import Artwork from "./_pages/Artwork";
import AboutMe from "./_pages/AboutMe";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
const location = useLocation();

  return (
    <ParallaxProvider>
        <AnimatePresence inital={false} exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                <Routes location={location} key={location.pathname}>
                    <Route exact path={`/`} element={<Home/>} />
                    <Route exact path={`/services`} element={<Services/>} />
                    <Route exact path={`/artwork`} element={<Artwork/>} />
                    <Route exact path={`/about-me`} element={<AboutMe/>} />
                </Routes>
        </AnimatePresence>
    </ParallaxProvider>
  )
}

export default AnimatedRoutes