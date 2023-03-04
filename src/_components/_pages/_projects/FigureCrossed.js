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
import { Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import ProjectBanner from "./ProjectBanner";
import ProjectImageList from "./ProjectImageList";
import ProjectTimeline from "./ProjectTimeline";

const imageListData = [
  {
    img: ImgOneFingersCrossed,
    title: "3D Render",
    rows: 3,
    cols: 3,
  },
  {
    img: ImgTwoFingersCrossed,
    title: "3D Demo Prototype",
    rows: 3,
    cols: 3,
  },
  {
    img: ImgSixFingersCrossed,
    title: "Tabletop Board",
    featured: true,
    rows: 3,
    cols: 4,
  },
  {
    img: ImgThreeFingersCrossed,
    title: "Special Card Example",
    rows: 3,
    cols: 1,
  },
  {
    img: ImgFiveFingersCrossed,
    title: "Role Card Example",
    rows: 3,
    cols: 1,
  },
  {
    img: ImgFourFingersCrossed,
    title: "Instructions Guide",
    rows: 7,
    cols: 3,
  },
];

const timelineData = [
  {
    title: "Identify",
    date: "August 2021 - September 2021",
    description: (
      <p>
        I joined a student-led games startup to help create a new roleplaying
        game for children and young teens. I quickly <strong>identified key project
        goals</strong> and used 2020-2021 video game trends to gain insights about the
        target audience and <strong>established user stories</strong>.
      </p>
    ),
  },
  {
    title: "Define",
    date: "October 2021",
    description: (
      <p>
        I helped <strong>reorganize the team's QA testing</strong> and <strong>established a marketing
        strategy</strong>. I worked with organizations at Georgia Tech, notably <strong>Georgia
        Tech VGDev</strong> and the <strong>Augmented Environments Lab</strong>, to gather UX research and
        find a network for gameplay testing.
      </p>
    ),
  },
  {
    title: "Design",
    date: "November 2021",
    description: (
      <p>
        I worked with the team to <strong>create a demo</strong> for the game,
        finialized the game asset design and product plan of the game, and began
        working on the <strong>Kickstarter Page</strong> and 3D game and marketing assets.
      </p>
    ),
  },
  {
    title: "Protoype",
    date: "December 2022",
    description: (
      <p>
        I wrapped up the year by <strong>demoing the tabletop game at student
        organizations and marketing the game to the Georgia Tech community</strong>, and
        creating physical <strong>paper design mockups</strong> for the tabletop. I also worked
        on creating 3D game assets for an early online prototype.
      </p>
    ),
  },
  {
    title: "Test",
    date: "December 2022",
    description: (
      <p>
        I looked back at the core mechanics and project goals of our game, then
        decided to validate the design decisions that led us to our prototype. <strong>I
        used our established network of testers to collect data from controlled
        QA testing</strong> and used it to finalize design decisions.
      </p>
    ),
  },
  {
    title: "Refine",
    date: "January 2022",
    description: (
      <p>
        I spent time refining the marketing materials for the game. I worked
        with the team to finish the kickstarter page for <strong>online marketing</strong> and
        helped plan and film a demo video. I finialized the Kickstarter Page for
        the game's launch and <strong>designed flyers and posters to increase awareness</strong> of 
        the game in the early new year.
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
        image={ImgFingersCrossed}
        title="FINGERS CROSSED"
        titleColor="#ffffff"
        background="#84b7d1"
        roles={[
          { role: "Marketing", color: "#ff427a" },
          { role: "UX Designer", color: "#a931b6" },
        ]}
      />
      <div className="content" style={{ "--project-color": "#84b7d1" }}>
        <Container maxWidth="lg" id="content">
          <div className="two-column">
            <div className="left-column">
              <Divider />
              <Grid container className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle">PROBLEMS - </div>
                  <ul className="section-capture list my-1 mr-2">
                    <li>
                      How can we create an intuitive roleplaying experience for
                      children 8 - 12?
                    </li>
                    <li>
                      What is the best way to intersect current roleplaying
                      online-tabletop trends with novel experiences?
                    </li>
                    <li>
                      How can we make people aware of "Fingers Crossed", a game
                      designed and created by Georgia Tech students?
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
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
                <ProjectTimeline data={timelineData} />
              </div>
              <Divider />
              <Grid container className="my-2">
                <Grid item xs={8}>
                  <div className="section-subtitle my-1">PROJECT GOALS -</div>
                  <ul className="list my-1">
                    <li>
                      Generate interest in social deduction tabletop games
                    </li>
                    <li>
                      Introduce skill and randomness into the social deduction
                      game genre
                    </li>
                    <li>
                      Create valuable UX research and transform it into a 20%
                      increase in player retention
                    </li>
                    <li>
                      Increase the game length and player retention from the
                      prototype by 50%
                    </li>
                    <li>
                      Launch a successful kickstarter project for Finger's
                      Crossed (Team Goal)
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={4}>
                  <div className="section-subtitle my-1">TOOLS -</div>
                  <Grid container>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
                      <ul className="list">
                        <li>[Design]</li>
                        <li>
                          <br />
                        </li>
                        <li>[Marketing]</li>
                        <li>
                          <br />
                        </li>
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
                  Finger's Crossed is a turn based, social-deduction tabletop
                  game for 8 - 12 year olds. I joined the student-led project in
                  August 2021 as a UX Designer and Project Manager. I was
                  responsible for handling the marketing and design of a
                  turn-based roleplaying game and tasked with building out
                  mechanics and a demo for the game. I was also responsible for
                  creating a marketing strategy for the game through social
                  media, and integrating market trends into the game's core
                  design.
                  <br />
                  <br />
                  I quickly identified key project goals and began to build out
                  a marketing strategy. For the design of the project, I used
                  2020-2021 video game trends and UX Research from the Georgia
                  Institute of Technology Augmented Environments Lab to create a
                  unique roleplaying experience that transforms real-time social
                  deduction into a turn-based, online and offline tabletop game,
                  and increased the retention of players by over 20% in the
                  three months of testing.
                  <br />
                  <br />
                  For marketing, the team spoke with local Atlanta Metro Area
                  game stores and worked with student organizations at Georgia
                  Tech to generate interest and establish a network of QA
                  testers. I also created a marketing strategy for the game's
                  launch, including a kickstarter launch plan, kickstarter page
                  and flyposting campaign.
                  <br />
                  <br />
                  During the final weeks of the project, I worked with the team
                  to create a demo for the game and a marketing video, collected
                  UX research from controlled QA testing, and contributed to the
                  final kickstarter page. I also aided in the design of
                  marketing and 3D game assets, including 3D models for the
                  gameboard and game pieces, along with demoing the online
                  tabletop game at Georgia Tech student organizations like the
                  Video Game Development Club.
                </p>
              </div>
            </div>
            <div className="my-2">
              <div className="section-subtitle my-1">IMAGES -</div>
              <ProjectImageList
                imageListData={imageListData}
                onChange={(value) => setBanner(value)}
              />
            </div>
            <div className="right-column"></div>
          </div>
        </Container>
      </div>
      <Footer />
    </motion.div>
  );
}
