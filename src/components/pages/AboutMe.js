import { motion } from "framer-motion";
import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Profile from "../Profile";
import pageVariants, { pageTransition } from "../Transition";

export default function AboutMe() {
  return (
    <motion.div
      style={{ position: "absolute", width: "100%" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Profile />
      <Footer />
    </motion.div>
  );
}
