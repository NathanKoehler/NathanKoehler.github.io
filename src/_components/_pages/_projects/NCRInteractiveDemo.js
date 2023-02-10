import { motion } from "framer-motion";
import React from "react";
import "../../../App.css";
import "./_projects.scss";
import Footer from "../../Footer";
import pageVariants, { pageTransition } from "../../Transition";
// need an image
import ImgNCRInteractiveDemo from "../../../_images/AlohaCloudPOS.jpg";
import ImgNCRDemoFrontpage from "../../../_images/NCRHOSP-Background.jpg";
import { Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Parallax } from "react-scroll-parallax";
import { ScrollButton } from "../../Scroll";

export default function AboutMe() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="banner">
        <img className="banner-img" src={ImgNCRDemoFrontpage} alt="NCR Interactive Demo Frontpage" />
        <Parallax
          className="banner-title-container top"
          translateY={-3}
        >
          <h1 className="banner-title">NCR Interactive Demo</h1>
        </Parallax>
        <Parallax
          className="banner-title-container bottom"
          translateY={-3}
        >
          <h1 className="banner-title-bg">NCR Interactive Demo</h1>
        </Parallax>
        <Parallax
          className="banner-title-btn"
          translateY={-5}
        >
        <ScrollButton
          goTo="content"
          vDuration={800}
          vOffset={-230}
          className="btns"
          buttonStyle="btn--invisible"
          buttonSize="btn--large--invisible"
        >
          <div
            className="about-footer-arrow"
            aria-label="Scroll To Bottom"
          >
            <i style={{ color: 'rgba(255, 255, 255, 0.8)' }} className="fas fa-chevron-down"></i>
          </div>
        </ScrollButton>
        </Parallax>
      </div>
      <ul className="banner-dots width-spanned-list mb-8">
        <li style={{ backgroundColor: "#a931b6" }}>UI/UX</li>
        <li style={{ backgroundColor: "#a931b6" }}>Project Management</li>
        <li style={{ backgroundColor: "#a931b6" }}>Frontend</li>
      </ul>
      <div className="content">
        <Container maxWidth="lg" id="content" >
          <div className="two-column">
              <div className="left-column">
                  <Divider />
                  <Grid container className="my-2">
                    <Grid xs={8}>
                      <div className="section-subtitle">BUSINESS PROBLEMS - </div>
                      <div className="my-1">
                      <Typography className="my-1" variant="h4">How do we decrease the distance between our customers and our hardware?</Typography>
                      <Typography className="my-1" variant="h4">How can we improve the NCR web experience of potential sales leads?</Typography>
                      <Typography className="my-1" variant="h4">How can we populate the website with quality, relevant content?</Typography>
                      </div>
                    </Grid>
                    <Grid xs={4}>
                      <div>
                        <div className="section-subtitle">ROLE - </div>
                        <ul className="list my-1">
                          <li>Project Lead</li>
                          <li>UX Designer</li>
                          <li>Programmer</li>
                        </ul>
                      </div>
                      <div className="my-2">
                        <div className="section-subtitle">TEAM - </div> 
                        <div className="my-1">NCR Hospitadivty Marketing Web Team</div>
                      </div>
                      <div>
                        <div className="section-subtitle">DATE - </div> 
                        <div className="my-1">May 2022 - August 2022</div>
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <div className="my-2">
                    <div className="section-subtitle my-1">TIMELINE - </div>
                    <p className="my-1 text">
                      The Hospitality team asked for improvements on their product, the Aloha Cloud Point of Sale, pages from
                      a UI/UX perspective. I started with a site audit that cleaned high-traffic pages and spoke with web team
                      members about site retention. I correlated the decline in-site retention to the site pages lacking the
                      relevance customers asked for.
                      <br /><br />
                      Come June, I performed a competitor analysis of competitor web user experiences, including a
                      breakdown of what our competitors lacked on their pages. I organized conferences with the head of
                      hospitality marketing and product managers to pitch the idea of a Web Demo for the Aloha Cloud POS
                    </p>
                  </div>
                  <Divider />
                  <Grid container className="my-2">
                    <Grid xs={8}>
                      <div className="section-subtitle my-1">INTERACTIVE DEMO GOALS -</div>
                      <ul className="list my-1">
                        <li>Increase Site Engagement</li>
                        <li>Shift Brand Perception</li>
                        <li>Drive Sustainable Growth (NCR Goal)</li>
                        <li>Obtain Higher Quality Leads (HOSP Goal)</li>
                      </ul>
                    </Grid>
                    <Grid xs={4}>
                      <div className="section-subtitle my-1">TOOLS -</div>
                      <Grid container>
                        <Grid xs={6}>
                          <ul className="list">
                            <li>Figma (Design)</li>
                            <li>React (Platform)</li>
                            <li>Node.js (APIs)</li>
                            <li>Material UI</li>
                          </ul>
                        </Grid>
                        <Grid xs={6}>
                        <ul className="list">
                          <li>JavaScript</li>
                          <li>HTML</li>
                          <li>CSS</li>
                        </ul>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                  <div className="my-2">
                    <div className="section-subtitle my-1">OVERVIEW -</div>
                    <p className="text">
                      The Aloha Cloud POS The Interactive Demo would increase site engagement as, within my competitor
                      analysis and site audit, I found that customers visit the NCR site to understand/try NCR's products, why
                      not let them try it?
                      <br /><br />
                      I built out and designed the Aloha Cloud Interactive Demo using frameworks familiar to the Web Team
                      and other BSUs: Figma, React.js, and Material UI 5. I worked closely with the Aloha Cloud POS Product
                      Team to add features beyond a replica of the Aloha Cloud Hardware in a different programming language:
                      feature videos, integrated forms on the left sidebar, descriptions of hardware features, and translations
                      of a swipeable interface into mouse and keyboard.
                      <br /><br />
                      I pitched the project several times with other teams to pose the interactive demo as a cross-BSU project
                      with applications in marketing, sales, and product teams. I spoke with senior developers to establish a
                      quality assurance pipeline during August and wrote out explanations for my code and design documents
                      to the Hospitality Marketing Web Team so that it would continue into production after my internship. I
                      also spent my last day in conferences with web devs and product managers to clarify any questions.
                    </p>
                  </div>
              </div>
              <div className="right-column">
              </div>
          </div>
        </Container>
      </div>
      <Footer />
    </motion.div>
  );
}
