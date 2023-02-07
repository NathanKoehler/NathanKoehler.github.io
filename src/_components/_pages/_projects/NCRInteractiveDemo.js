import { motion } from "framer-motion";
import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Profile from "../Profile";
import pageVariants, { pageTransition } from "../Transition";
// need an image
import ImgNCRInteractiveDemo from "../../../_images/AlohaCloudPOS.jpg";
import ImgNCRDemoFrontpage from "../../../_images/NCRHOSP-Background.jpg";
import { Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
        <div className="two-column">
            <div className="left-column">
                <img src={ImgNCRDemoFrontpage} alt="NCR Interactive Demo Frontpage" />
            </div>
            <div className="right-column">
                <Typography variant="h5">Problem Statement</Typography>
                <Typography variant="h4"></Typography>
            </div>
        </div>
      
      <Footer />
    </motion.div>
  );
}
