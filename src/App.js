import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
/* Alt Shift Down to copy line down */
import Services from "./components/pages/Services";
/* Command D to select line and highlight instances of a word in a line*/
import Artwork from "./components/pages/Artwork";
import AboutMe from "./components/pages/AboutMe";

function App() {

  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/artwork" component={Artwork} />
            <Route path="/about-me" component={AboutMe} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
