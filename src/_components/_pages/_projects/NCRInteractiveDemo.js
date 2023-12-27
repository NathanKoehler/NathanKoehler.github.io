import { motion } from "framer-motion";
import React from "react";
import "../../../App.css";
import "./_projects.scss";
import Footer from "../../Footer";
import pageVariants, { pageTransition } from "../../Transition";
// need an image
import ImgOneNCRInteractiveDemo from "../../../_images/HOSPDemoOne.png";
import ImgTwoNCRInteractiveDemo from "../../../_images/HOSPDemoTwo.png";
import ImgThreeNCRInteractiveDemo from "../../../_images/HOSPDemoThree.png";
import ImgNCRFrontpage from "../../../_images/NCRHOSP-Background.jpg";
import ImgNCRFrontpageAnim from "../../../_images/NCRHOSP-AnimBackground.gif";
import { Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import ProjectBanner from "./ProjectBanner";
import ProjectImageList from "./ProjectImageList";
import ProjectTimeline from "./ProjectTimeline";

const imageListData = [
  {
    img: ImgOneNCRInteractiveDemo,
    title: "NCR Aloha Cloud Demo - Detailed Item View",
    rows: 3,
    cols: 6,
  },
  {
    img: ImgTwoNCRInteractiveDemo,
    title: "NCR Aloha Cloud Demo - Payments",
    rows: 3,
    cols: 6,
  },
  {
    img: ImgThreeNCRInteractiveDemo,
    title: "NCR Aloha Cloud Demo - Unique Features",
    rows: 3,
    cols: 6,
  },
];

const timelineData = [
  {
    title: "Define & Identify",
    date: "May 2022",
    description: (
      <p>
        The hospitality team requested improvements on Aloha Cloud Point of Sale
        product pages from a UI/UX perspective. I conducted a <strong>site audit</strong>, a
        hospitality POS <strong>competitior analysis</strong> (Toast, Square, Lightspace, Revel,
        Clover, etc.) to identify the problems and opportunities. I finalized
        May <strong>holding meetings with web team members across business units regarding
        site retention and customer relevance.</strong>
      </p>
    ),
  },
  {
    title: "Design & Prototype",
    date: "June 2022",
    description: (
      <p>
        I created a detailed design system and wireframes for the new site. I
        also integrated potential features into existing design documents of the
        Aloha POS with product team members using <strong>Figma</strong>. I finalized the design
        and prototype with NCR Hospitality marketing and product teams <strong>and presented it to
        executives of Hospitality at my June Project Pitch.</strong>
      </p>
    ),
  },
  {
    title: "Develop & Test",
    date: "July 2022",
    description: (
      <p>
        I developed the new site using <strong>React</strong>, <strong>Framer Motion</strong>, and <strong>Material UI</strong>,
        with assistance from the Hospitality Web and Product teams. I also
        recieved feedback from the NCR Emerald team and Head of Development for
        the Aloha POS product line. I finalized the site and set up a route to <strong>QA testing</strong> and 
        production with the Web Team and senior developers within the Hospitality Business Unit.
      </p>
    ),
  },
  {
    title: "Reflect & Document",
    date: "August 2022",
    description: (
      <p>
        I reflected on the project and the process while <strong>leaving documentation</strong> for 
        my project for potential deployment. I also presented the project
        within the internship showcase and spoke with the <strong>NCR Hospitality Aloha
        POS Team</strong>, <strong>NCR Retail Emerald POS Team</strong>, and briefly with members of the
        NCR executive team.
      </p>
    ),
  },
];

export default function NCRInteractiveDemo() {
  const [banner, setBanner] = React.useState(false);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ProjectBanner
        hide={banner}
        image={ImgNCRFrontpage}
        hoverImage={ImgNCRFrontpageAnim}
        title="ALOHA INTERACTIVE DEMO"
        background="#51b948"
        roles={[
          { role: "Project Lead", color: "#a931b6" },
          { role: "Software Engineer", color: "#a931b6" },
          { role: "UX Designer", color: "#a931b6" },
        ]}
      />
      <div className="content" style={{ "--project-color": "#51b948" }}>
        <Container maxWidth="lg" id="content">
          <div className="two-column">
            <div className="left-column">
              <Divider />
              <Grid container className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle">BUSINESS PROBLEMS - </div>
                  <ul className="section-capture list my-1 mr-2">
                    <li>
                      How do we decrease the distance between our customers and
                      our hardware?
                    </li>
                    <li>
                      How can we improve the NCR web experience of potential
                      sales leads?
                    </li>
                    <li>
                      How can we populate the website with quality, relevant
                      content?
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
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
                    <div className="my-1">
                      NCR Hospitality Marketing Web Team
                    </div>
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
                <ProjectTimeline data={timelineData} />
              </div>
              <Divider />
              <Grid container className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle my-1">
                    INTERACTIVE DEMO GOALS -
                  </div>
                  <ul className="list my-1">
                    <li>Increase Site Engagement</li>
                    <li>Shift Brand Perception</li>
                    <li>Drive Sustainable Growth (NCR Goal)</li>
                    <li>Obtain Higher Quality Leads (HOSP Goal)</li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
                  <div className="section-subtitle my-1">TOOLS -</div>
                  <Grid container>
                    <Grid item xs={6}>
                      <ul className="list">
                        <li>Figma (Design)</li>
                        <li>React (Platform)</li>
                        <li>Node.js (APIs)</li>
                        <li>Material UI</li>
                      </ul>
                    </Grid>
                    <Grid item xs={6}>
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
                  The Aloha Cloud POS The Interactive Demo would increase site
                  engagement as, within my competitor analysis and site audit, I
                  found that customers visit the NCR site to understand/try
                  NCR's products, why not let them try it?
                  <br />
                  <br />
                  I built out and designed the Aloha Cloud Interactive Demo
                  using frameworks familiar to the Web Team and other BSUs:
                  Figma, React.js, and Material UI 5. I worked closely with the
                  Aloha Cloud POS Product Team to add features beyond a replica
                  of the Aloha Cloud Hardware in a different programming
                  language: feature videos, integrated forms on the left
                  sidebar, descriptions of hardware features, and translations
                  of a swipeable interface into mouse and keyboard.
                  <br />
                  <br />
                  For APIs, I worked with the sales team and marketing team to
                  host marketo and salesforce APIs on a Node.js server. I also
                  worked with the Web Team to optimize the demo for the best
                  user experience. I tested the APIs using Postman and helped
                  finialize the demo with the Aloha POS Product Team.
                  <br />
                  <br />
                  I pitched the project several times with other teams to
                  pose the interactive demo as a cross-BSU project with
                  applications in marketing, sales, and product teams. I spoke
                  with senior developers to establish a quality assurance
                  pipeline during August and wrote out explanations for my code
                  and design documents to the Hospitality Marketing Web Team so
                  that it would continue into production after my internship. I
                  also spent my last day in conferences with web devs and
                  product managers to clarify any questions.
                </p>
              </div>
              <Divider />
              <Grid container spacing={4} className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle my-1">IMAGES -</div>
                  <ProjectImageList 
                    imageListData={imageListData} 
                    onChange={(value) => setBanner(value)} 
                  />
                </Grid>
                <Grid item xs={4}>
                  <div className="section-subtitle my-1">LINKS -</div>
                  <ul className="list my-1">
                    <a
                      href="https://www.natekoe.com/aloha-cloud-interactive-demo/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Aloha Cloud Demo Site"
                    >
                      July 2022 Prototype
                    </a>
                  </ul>
                </Grid>
              </Grid>
            </div>
            <div className="right-column"></div>
          </div>
        </Container>
      </div>
      <Footer />
    </motion.div>
  );
}
