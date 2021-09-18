import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../Transition";

function Home(props) {
  return (
    <motion.div
      style={{ position: "absolute", width: "100%" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection navRef={props.navRef} />
      <Cards />
      <Footer />
    </motion.div>
  );
}

export default Home;
