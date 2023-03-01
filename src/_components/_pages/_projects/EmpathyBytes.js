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


const imageListData = [
{
    img: ImgThreeEmpathyBytes,
    title: 'Interview Team Prototype',
    rows: 10,
    cols: 3,
},
{
    img: ImgFourEmpathyBytes,
    title: 'AR/VR Team Prototype',
    rows: 10,
    cols: 3,
},
{
    img: ImgFiveEmpathyBytes,
    title: 'Site Audit And Design Process',
    rows: 6,
    cols: 3,
},
{
    img: ImgOneEmpathyBytes,
    title: 'Empathy Bytes VIP',
    rows: 3,
    cols: 3,
    },
    {
    img: ImgTwoEmpathyBytes,
    title: 'Empathy Bytes Team Logo',
    rows: 3,
    cols: 3,
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
      <ProjectBanner hide={banner} maxWidth={"xs"} image={ImgOneEmpathyBytes} title="EMPATHY BYTES ABOUT US" titleColor="#ffffff" background="#326ba8" roles={[
        { role: "Software Engineer", color: "#a931b6" },
        { role: "UX Designer", color: "#a931b6" },
      ]}  />
      <div className="content">
        <Container maxWidth="lg" id="content" >
          <div className="two-column">
              <div className="left-column">
                  <Divider />
                  <Grid container className="my-2">
                    <Grid item xs={8}>
                      <div className="section-subtitle">PROBLEMS - </div>
                      <ul className="section-capture list my-1 mr-2">
                        <li>How can we modernize our older site pages within WordPress 6.0?</li>
                        <li>What are current issues on the site that need to be addressed?</li>
                        <li>Is it worth exploring different web frameworks (React.js)?</li>
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
                        <div className="my-1">August 2021 - January 2022</div>
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <div className="my-2">
                    <div className="section-subtitle my-1">EMPATHY BYTES - </div>
                        <p className="my-1 text">
                            Empathy Bytes is a Georgia Institute of Technology organization that focuses on building an immersivedigital 
                            archive of interviews, photographs, multimedia, and writings from diverse communities. Theyexplore the connections 
                            these communities have to Georgia Tech research and creative endeavors.
                        </p>
                    </div>
                  <Divider />
                  <div className="my-2">
                    <div className="section-subtitle my-1">TIMELINE - </div>
                    <p className="my-1 text">
                        The Empathy Bytes Web team was primarily interested in creating a platformthat allows for better access to the 
                        interviews, articles, and media that isstored on their WordPress site.
                      <br /><br />
                        To best understand how I could improve the site, I spent a week outliningevery problem I found with the current 
                        site to document changes I wouldmake from immediate problems to minor user experience optimizations. I used Figma 
                        to propose many of the design changes as the Team hadmembers handling designs within both Figma and Adobe XD. 
                        I familiarized myself with both to best suit the teams.
                      <br /><br />
                        Collectively, we pitched the idea of creating about-us pages for each subteam of Empathy Bytes todocument and 
                        showcase the current projects in development within Empathy Bytes.
                    </p>
                  </div>
                  <Divider />
                  <Grid container className="my-2">
                    <Grid item xs={8}>
                      <div className="section-subtitle my-1">ABOUT US PAGE RESTRUCTURE GOALS -</div>
                      <ul className="list my-1">
                        <li>1. Modernize the aesthetic of the overall Empathy Bytes Platform</li>
                        <li>2. Merge and shorten the content held within each page</li>
                        <li>3. Outline current projects within Empathy Bytes (Org Goal)</li>
                        <li>4. Build pages that support future development (Web UX Team Goal)</li>
                      </ul>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="section-subtitle my-1">TOOLS -</div>
                      <Grid container>
                        <Grid item xs={6}>
                          <ul className="list">
                            <li>Figma</li>
                            <li>WordPress 6.0</li>
                            <li>React.js</li>
                          </ul>
                        </Grid>
                        <Grid item xs={6}>
                        <ul className="list">
                          <li>[Design]</li>
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
                        I created several Figma Pages and prototyped pages using WordPress 6.0,primarily focusing on creating multiple 
                        interactions between various team about-us pages: https://educast.library.gatech.edu/app_promo/ . 
                        <br /><br />
                        We translated 
                        all existing pages into WordPress 6.0, and used many of the new features in our efforts to modernize the pages. 
                        During our upgrade, I also pitched several ideas for new framework solutions, including using React.js, which 
                        several members already had experience in. While this wasnot approved, we established the platform and foundation 
                        for if we wereto ever switch in the future, and created design documents for futurepages, whenever they were added.
                    </p>
                  </div>
              </div>
              <Grid container spacing={4} className="my-2">
                    <Grid item xs={8}>
                        <div className="section-subtitle my-1">IMAGES -</div>
                          <ProjectImageList imageListData={imageListData} onChange={(value) => setBanner(value)} />
                    </Grid>
                    <Grid item xs={4}>
                        <div className="section-subtitle my-1">LINKS -</div>
                        <ul className="list my-1">
                        <a target="_blank" href="Empathy Bytes Page" to="https://www.vip.gatech.edu/teams/vwc">Empathy Bytes Page</a>
                        </ul>
                    </Grid>
                </Grid>
            <div className="right-column">
            </div>
          </div>
        </Container>
      </div>
      <Footer  />
    </motion.div>
  );
}

