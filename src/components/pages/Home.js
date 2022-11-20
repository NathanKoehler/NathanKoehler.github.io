import React from "react";
import "../../App.css";
import Intro from "../Intro";
import Cards from "../Cards";
import Footer from "../Footer";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../Transition";
import Slider from "../Slider";

function Home(props) {
  return (
    <motion.div
      initial="homeInit"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Intro navRef={props.navRef} />
      <Cards />
      <Slider />
      <Footer />
    </motion.div>
  );
}

export default Home;
