import { motion } from "framer-motion";
import React from "react";
import "../../../App.css";
import "./_projects.scss";
import Footer from "../../Footer";
import pageVariants, { pageTransition } from "../../Transition";
// need an image
import ImgOneEmpathyBytes from "../../../_images/EmpathyBytes.jpg";
import ImgTwoEmpathyBytes from "../../../_images/EmpathyBytes-Background.jpg";
import ImgThreeEmpathyBytes from "../../../_images/EmpathyBytesOne.jpg";
import ImgFourEmpathyBytes from "../../../_images/EmpathyBytesTwo.jpg";
import ImgFiveEmpathyBytes from "../../../_images/EmpathyBytesThree.png";
import { Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import ProjectBanner from "./ProjectBanner";
import ProjectImageList from "./ProjectImageList";
import ProjectTimeline from "./ProjectTimeline";

const imageListData = [
  {
    img: ImgThreeEmpathyBytes,
    title: "Interview Team Prototype",
    rows: 10,
    cols: 3,
  },
  {
    img: ImgFourEmpathyBytes,
    title: "AR/VR Team Prototype",
    rows: 10,
    cols: 3,
  },
  {
    img: ImgFiveEmpathyBytes,
    title: "Site Audit And Design Process",
    rows: 6,
    cols: 3,
  },
  {
    img: ImgOneEmpathyBytes,
    title: "Empathy Bytes VIP",
    rows: 3,
    cols: 3,
  },
  {
    img: ImgTwoEmpathyBytes,
    title: "Empathy Bytes Team Logo",
    rows: 3,
    cols: 3,
  },
];

const timelineData = [
  {
    title: "Identify",
    date: "January 2022",
    description: (
      <p>
        I joined a web team of 4 students within the Empathy Bytes Vertically
        Integrated Program. I helped <strong>establish a project timeline</strong> and <strong>identify the team's
        goals and objectives</strong>, which were to build a site to better connect the
        teams within the organization.
      </p>
    ),
  },
  {
    title: "Clean & Define",
    date: "Feburary 2022",
    description: (
      <p>
        As a team over three weeks, we developed a roadmap for creating a
        platform that allows for better access to the interviews, articles, and
        media that is stored on their WordPress site. To best understand how to
        design this site iteration, I spent a week <strong>outlining every pain point I
        found with the current site through guerrilla UX testing to document
        changes I would make from immediate problems to minor user experience
        optimizations.</strong>
      </p>
    ),
  },
  {
    title: "Design & Collaborate",
    date: "March 2022",
    description: (
      <p>
        I used <strong>Figma</strong> to establish the design of new pages as the Team had
        members refining designs within both <strong>Figma</strong> and <strong>Adobe XD</strong>. I familiarized
        myself with both to best suit the teams, and <strong>we collectively worked
        through my earlier site audit to add interactivity and increase usability of current site</strong>. We also began collaborating
        with the other teams within Empathy Bytes to collect data for the About
        Us pages.
      </p>
    ),
  },
  {
    title: "Prototype",
    date: "April 2022",
    description: (
      <p>
        While the Empathy Bytes Web team wrapped up the designs of the pages, <strong>I
        prototyped the AR/VR team's About US page within Wordpress through my
        knowledge of the platform (Wordpress)</strong>, <strong>CSS</strong>, and <strong>PHP</strong>. I also worked with
        the design lead to iterate on the <strong>design documents</strong> and <strong>styling
        guidelines</strong> for future and current Empathy Bytes pages.
      </p>
    ),
  },
  {
    title: "Pitch",
    date: "May 2022",
    description: (
      <p>
        Once the pages were designed, <strong>I proposed the idea of a site overhaul</strong> to
        address certain roadblocks the team faced with designing and
        impliementing the pages. I leveraged my knowledge of <strong>React.js</strong> and <strong>Framer
        Motion</strong> to pitch a prototype of a site that would improve site retention, unify
        design decisions, and diversify interactions within the user experience.
      </p>
    ),
  },
];

export default function EmpathyBytes() {
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
        maxWidth={"xs"}
        image={ImgOneEmpathyBytes}
        title="EMPATHY BYTES ABOUT US"
        titleColor="#ffffff"
        background="#326ba8"
        roles={[
          { role: "Software Engineer", color: "#a931b6" },
          { role: "UX Designer", color: "#a931b6" },
        ]}
      />
      <div className="content" style={{ "--project-color": "#326ba8" }}>
        <Container maxWidth="lg" id="content">
          <div className="two-column">
            <div className="left-column">
              <Divider />
              <Grid container className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle">PROBLEMS - </div>
                  <ul className="section-capture list my-1 mr-2">
                    <li>
                      How can we modernize our older site pages within WordPress
                      6.0?
                    </li>
                    <li>
                      What are current issues on the site that need to be
                      addressed?
                    </li>
                    <li>
                      Is it worth exploring different web frameworks (React.js)?
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <div className="section-subtitle">ROLE - </div>
                    <ul className="list my-1">
                      <li>UI/UX Designer</li>
                      <li>Programmer</li>
                    </ul>
                  </div>
                  <div className="my-2">
                    <div className="section-subtitle">TEAM - </div>
                    <div className="my-1">Empathy Bytes Web UX Team</div>
                  </div>
                  <div>
                    <div className="section-subtitle">DATE - </div>
                    <div className="my-1">January 2022 - May 2022</div>
                  </div>
                </Grid>
              </Grid>
              <Divider />
              <div className="my-2">
                <div className="section-subtitle my-1">EMPATHY BYTES - </div>
                <p className="my-1 text">
                  Empathy Bytes is a Georgia Institute of Technology
                  organization that focuses on building an immersivedigital
                  archive of interviews, photographs, multimedia, and writings
                  from diverse communities. Theyexplore the connections these
                  communities have to Georgia Tech research and creative
                  endeavors.
                </p>
              </div>
              <Divider />
              <div className="my-2">
                <div className="section-subtitle my-1">TIMELINE - </div>
                <ProjectTimeline data={timelineData} />
              </div>
              <Divider />
              <Grid container className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle my-1">
                    ABOUT US PAGE RESTRUCTURE GOALS -
                  </div>
                  <ul className="list my-1">
                    <li>
                      1. Modernize the aesthetic of the overall Empathy Bytes
                      Platform
                    </li>
                    <li>
                      2. Merge and shorten the content held within each page
                    </li>
                    <li>
                      3. Outline current projects within Empathy Bytes (Org
                      Goal)
                    </li>
                    <li>
                      4. Build pages that support future development (Web UX
                      Team Goal)
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
                  <div className="section-subtitle my-1">TOOLS -</div>
                  <Grid container>
                    <Grid item xs={6}>
                      <ul className="list">
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>WordPress 6.0</li>
                        <li>React.js</li>
                      </ul>
                    </Grid>
                    <Grid item xs={6}>
                      <ul className="list">
                        <li>[Design]</li>
                        <li><br></br></li>
                        <li>[Programming]</li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <div className="my-2">
                <div className="section-subtitle my-1">OVERVIEW -</div>
                <p className="text">
                  The Empathy Bytes Web team was primarily interested in
                  creating a platformthat allows for better access to the
                  interviews, articles, and media that isstored on their
                  WordPress site.
                  <br />
                  <br />
                  Collectively, we pitched the idea of creating about-us pages
                  for each subteam of Empathy Bytes to document and showcase the
                  current projects in development within Empathy Bytes. I
                  created several Figma Pages and prototyped pages using
                  WordPress 6.0, primarily focusing on creating multiple
                  interactions between various team about-us pages:
                  https://educast.library.gatech.edu/app_promo/ .
                  <br />
                  <br />
                  We translated all existing pages into WordPress 6.0, and used
                  many of the new features in our efforts to modernize the
                  pages. During our upgrade, I also pitched several ideas for
                  new framework solutions, including using React.js, which
                  several members already had experience in. While this wasnot
                  approved, we established the platform and foundation for if we
                  wereto ever switch in the future, and created design documents
                  for futurepages, whenever they were added.
                </p>
              </div>
            </div>
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
                    target="_blank"
                    href="Empathy Bytes Page"
                    to="https://www.vip.gatech.edu/teams/vwc"
                  >
                    Empathy Bytes Page
                  </a>
                </ul>
              </Grid>
            </Grid>
            <div className="right-column"></div>
          </div>
        </Container>
      </div>
      <Footer />
    </motion.div>
  );
}
