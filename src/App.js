import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
/* Alt Shift Down to copy line down */
import Services from "./components/pages/Services";
/* Command D to select line and highlight instances of a word in a line*/
import Artwork from "./components/pages/Artwork";
import AboutMe from "./components/pages/AboutMe";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence inital={false} exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
          <Switch location={location} key={location.pathname}>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/services`} component={Services} />
            <Route exact path={`/artwork`} component={Artwork} />
            <Route exact path={`/about-me`} component={AboutMe} />
          </Switch>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
