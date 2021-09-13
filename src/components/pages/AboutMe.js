import { motion } from "framer-motion";
import React from "react";
import "../../App.css";
import pageVariants, { pageTransition } from "../Transition";

export default function AboutMe() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="sign-up">ABOUT ME</h1>
    </motion.div>
  );
}
