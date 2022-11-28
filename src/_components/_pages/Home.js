import React from "react";
import "../../App.css";
import Intro from "../_homepage/Intro";
import Cards from "../_homepage/Cards";
import Footer from "../Footer";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../Transition";
import Slider from "../_homepage/Slider";

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
