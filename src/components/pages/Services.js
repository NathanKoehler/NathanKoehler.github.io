import { motion } from "framer-motion";
import React from "react";
import "../../App.css";
import pageVariants, { pageTransition } from "../Transition";

export default function Services() {
  return (
    <motion.div
      style={{ position: "absolute", width: "100%" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="services">SERVICES</h1>
    </motion.div>
  );
}
