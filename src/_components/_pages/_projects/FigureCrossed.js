import { motion } from "framer-motion";
import React from "react";
import "../../../App.css";
import "./_projects.scss";
import Footer from "../../Footer";
import pageVariants, { pageTransition } from "../../Transition";
// need an image
import ImgOneFingersCrossed from "../../../_images/FingersCrossed.png";
import ImgTwoFingersCrossed from "../../../_images/FingersCrossed-Background.png";
import ImgThreeFingersCrossed from "../../../_images/FingersCrossedOne.jpg";
import ImgFourFingersCrossed from "../../../_images/FingersCrossedTwo.png";
import ImgFiveFingersCrossed from "../../../_images/FingersCrossedThree.jpg";
import ImgSixFingersCrossed from "../../../_images/FingersCrossedFour.png";
import ImgFingersCrossed from "../../../_images/FingersCrossed.png";
import { Divider, Grid, ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import InfoIcon from '@mui/icons-material/Info';
import ProjectBanner from "./ProjectBanner";


const itemData = [
  {
    img: ImgOneFingersCrossed,
    title: '3D Render',
    rows: 3,
    cols: 3,
  },
  {
    img: ImgTwoFingersCrossed,
    title: '3D Demo Prototype',
    rows: 3,
    cols: 3,
  },
  {
    img: ImgSixFingersCrossed,
    title: 'Tabletop Board',
    featured: true,
    rows: 3,
    cols: 4,
  },
  {
    img: ImgThreeFingersCrossed,
    title: 'Special Card Example',
    rows: 3,
    cols: 1,
  },
  {
    img: ImgFiveFingersCrossed,
    title: 'Role Card Example',
    rows: 3,
    cols: 1,
  },
  {
    img: ImgFourFingersCrossed,
    title: 'Instructions Guide',
    rows: 7,
    cols: 3,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function NCRInteractiveDemo() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ProjectBanner image={ImgFingersCrossed} title="FINGERS CROSSED" titleColor="#ffffff" background="#84b7d1" roles={[
        { role: "Marketing", color: "#ff427a" },
        { role: "UX Designer", color: "#a931b6" },
      ]}  />
      <div className="content">
        <Container maxWidth="lg" id="content" >
          <div className="two-column">
              <div className="left-column">
                  <Divider />
                  <Grid container className="my-2">
                    <Grid xs={8}>
                      <div className="section-subtitle">PROBLEMS - </div>
                      <ul className="section-capture list my-1 mr-2">
                        <li>How can we create an intuitive roleplaying experience for children 8 - 12?</li>
                        <li>What is the best way to intersect current roleplaying online-tabletop trends with novel experiences?</li>
                        <li>How can we make people aware of "Fingers Crossed", a game designed and created by Georgia Tech students?</li>
                      </ul>
                    </Grid>
                    <Grid xs={4}>
                      <div>
                        <div className="section-subtitle">ROLE - </div>
                        <ul className="list my-1">
                          <li>Marketing Lead</li>
                          <li>Project Manager</li>
                          <li>UX Designer</li>
                        </ul>
                      </div>
                      <div className="my-2">
                        <div className="section-subtitle">TEAM - </div> 
                        <div className="my-1">Student-Led Games Startup</div>
                      </div>
                      <div>
                        <div className="section-subtitle">DATE - </div> 
                        <div className="my-1">August 2021 - January 2022</div>
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                  <div className="my-2">
                    <div className="section-subtitle my-1">TIMELINE - </div>
                    <p className="my-1 text">
                      In August I joined a student-led games startup to help create a new roleplaying game for children and 
                      young teens. The team had already created an early prototype for the game and we iterated on the design
                      through September and had an Alpha completed by October 2021.
                      <br /><br />
                      During November of 2021, I helped reorganize the team's QA testing and established a project timeline and 
                      marketing strategy. 
                      <br /><br />
                      I worked with organizations at Georgia Tech, notably Georgia Tech VGDev and the
                      Augmented Environments Lab, to gather UX research and find a network for quality assurance testing.
                      <br /><br />
                      In December, I worked with the team to create a demo for the game and a marketing video, finialized the
                      design and marketing of the game, and began working on the kickstarter page and 3D game and marketing assets.
                      <br /><br />
                      I wrapped up the year by demoing the online tabletop game at student organizations and marketing the game
                      to the Georgia Tech community, and creating physical paper design mockups for the tabletop.
                      <br /><br />
                      In January, I worked with the team to create a kickstarter page for online marketing and helped plan and 
                      film a demo video. I finialized the kickstarter page for the game's launch and created flyers and posters
                      to increase awareness of the game in the early new year.
                    </p>
                  </div>
                  <Divider />
                  <Grid container className="my-2">
                    <Grid xs={8}>
                      <div className="section-subtitle my-1">PROJECT GOALS -</div>
                      <ul className="list my-1">
                        <li>Generate interest in social deduction tabletop games</li>
                        <li>Introduce skill and randomness into the social deduction game genre</li>
                        <li>Create valuable UX research and transform it into a 20% increase in player retention</li>
                        <li>Increase the game length and player retention from the prototype by 50%</li>
                        <li>Launch a successful kickstarter project for Finger's Crossed (Team Goal)</li>
                      </ul>
                    </Grid>
                    <Grid xs={4}>
                      <div className="section-subtitle my-1">TOOLS -</div>
                      <Grid container>
                        <Grid xs={6}>
                          <ul className="list">
                            <li>Figma</li>
                            <li>Paper Modeling</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Premiere</li>
                            <li>Autodesk Maya</li>
                            <li>Unity 3D</li>
                            <li>Blender</li>
                          </ul>
                        </Grid>
                        <Grid xs={6}>
                        <ul className="list">
                          <li>[Design]</li>
                          <li><br/></li>
                          <li>[Marketing]</li>
                          <li><br/></li>
                          <li>[3D]</li>
                        </ul>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                  <div className="my-2">
                    <div className="section-subtitle my-1">OVERVIEW -</div>
                    <p className="text">
                      Finger's Crossed is a turn based, social-deduction tabletop game for 8 - 12 year olds.
                      I joined the student-led project in August 2021 as a UX Designer and Project Manager. I was responsible for 
                      handling the marketing and design of a turn-based roleplaying game and tasked with building out mechanics
                      and a demo for the game. I was also responsible for creating a marketing strategy for the game through
                      social media, and integrating market trends into the game's core design.
                      <br /><br />
                      I quickly identified key project goals and began to build out a marketing strategy. For the design of
                      the project, I used 2020-2021 video game trends and UX Research from the Georgia Institute of Technology
                      Augmented Environments Lab to create a unique roleplaying experience that transforms real-time social
                      deduction into a turn-based, online and offline tabletop game, and increased the retention of players
                      by over 20% in the three months of testing.
                      <br /><br />
                      For marketing, the team spoke with local Atlanta Metro Area game stores and worked with student organizations
                      at Georgia Tech to generate interest and establish a network of QA testers. I also created a marketing
                      strategy for the game's launch, including a kickstarter launch plan, kickstarter page and 
                      flyposting campaign.
                      <br /><br />
                      During the final weeks of the project, I worked with the team to create a demo for the game and a marketing
                      video, collected UX research from controlled QA testing, and contributed to the final kickstarter page.
                      I also aided in the design of marketing and 3D game assets, including 3D models for the gameboard and game
                      pieces, along with demoing the online tabletop game at Georgia Tech student organizations like the Video
                      Game Development Club.
                    </p>
                  </div>
              </div>
              <div className="my-2">
              <div className="section-subtitle my-1">IMAGES -</div>
                <ImageList
                  variant="quilted"
                  cols={6}
                  rowHeight={121}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
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

