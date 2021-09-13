import { motion } from "framer-motion";
import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Gallery from "../Gallery";
import pageVariants, { pageTransition } from "../Transition";

export default function Artwork() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Gallery />
      <Footer />
    </motion.div>
  );
}
