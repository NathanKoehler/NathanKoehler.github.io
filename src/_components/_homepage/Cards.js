import React, { useState } from "react";
import './Cards.css';
import CardItem from './CardItem';
import RollerRushImg from '../../_images/RollerRush.png';
import RollerRushBackgroundImg from '../../_images/RollerRush-Background.png';
import NCRHOSPImg from '../../_images/NCRHOSP.jpg';
import NCRHOSPBackgroundImg from '../../_images/NCRHOSP-Background.jpg';
import PostCardImg from '../../_images/PostCard.png';
import PostCardBackgroundImg from '../../_images/PostCard-Background.png';
import CurrencyMockupImg from '../../_images/CurrencyMockup.png';
import CurrencyMockupBackgroundImg from '../../_images/CurrencyMockup-Background.png';
import TodoImg from '../../_images/Todo.png';
import TodoBackgroundImg from '../../_images/Todo-Background.png';
import FingersCrossedImg from '../../_images/FingersCrossed.png';
import FingersCrossedBackgroundImg from '../../_images/FingersCrossed-Background.png';
import AframeImg from '../../_images/Aframe.png';
import AframeBackgroundImg from '../../_images/Aframe-Background.png';
import AHSRoboticsImg from '../../_images/AHS-Robotics.png';
import AHSRoboticsBackgroundImg from '../../_images/AHS-Robotics-Background.png';
import TheAscentImg from '../../_images/TheAscentTitleScreen.png';
import TheAscentBackgroundImg from '../../_images/TheAscent-Background.png';
import UGAHacksImg from '../../_images/UGAHacks6.png';
import UGAHacksBackgroundImg from '../../_images/UGAHacks6-Background.png';
import NCRRetailImg from '../../_images/NCRRETAIL.jpg';
import NCRRetailBackgroundImg from '../../_images/NCRRETAIL-Background.png';
import SliderImg from '../../_images/Slider.jpg';
import SliderBackgroundImg from '../../_images/Slider-Background.gif';
import RealityMediaImg from '../../_images/RealityMedia.png';
import RealityMediaBackgroundImg from '../../_images/RealityMedia-Background.png';

import CardDialog from "../_dialogs/CardDialog";

import DialogContents from "./DialogContents";


function Cards() {
  const [cardDrawerOpen, setCardDrawerOpen] = useState(false);
  const [cardDrawerContent, setCardDrawerContent] = useState(null);

  const handleCardDrawer = (open, content) => {
    setCardDrawerOpen(open);
    setCardDrawerContent(content);
  }


  const RollerCard = (
    <CardItem
      src={RollerRushImg}
      srcAlt={RollerRushBackgroundImg}
      text="Created a multiplayer web game using Three.js and Cannon.js in tandem with vanilla CSS and HTML within GT's Computational Media design program. Click to try it out:"
      label='JavaScript'
      path='/'
      cardDrawerContents={new DialogContents("Roller Rush", RollerRushBackgroundImg, "Created a multiplayer web game using Three.js and Cannon.js in tandem with vanilla CSS and HTML within GT's Computational Media design program. Click to try it out:")}
      handleCardDrawer={handleCardDrawer}
      aPath={new URL('https://bluebokehs.github.io/rollerrush/')} // takes to another site
    />
  );
  
  const NCRHOSPCard = (
    <CardItem
      src={NCRHOSPImg}
      srcAlt={NCRHOSPBackgroundImg}
      text='Lead the UX design and software of the Aloha Cloud Interactive Demo within my Summer 2022 SWE and Product Marketing role at NCR. Implimented Marketo and Salesforce API integrations and programmed the webapp in React and MUI.'
      label='Middleware + React.js'
      path='/ncr-interactive-demo'
      cardDrawerContents={new DialogContents("NCR Aloha Cloud Interactive Demo", NCRHOSPBackgroundImg, "Lead the UX design and software of the Aloha Cloud Interactive Demo within my Summer 2022 SWE and Product Marketing role at NCR. Implimented Marketo and Salesforce API integrations and programmed the webapp in React and MUI.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const PostCardCard = (
    <CardItem
      src={PostCardImg}
      srcAlt={PostCardBackgroundImg}
      text='Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review.'
      label='Graphics Design'
      path='/'
      cardDrawerContents={new DialogContents("Postcard Series", PostCardBackgroundImg, "Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const CurrencyCard = (
    <CardItem
      src={CurrencyMockupImg}
      srcAlt={CurrencyMockupBackgroundImg}
      text='Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design competition within the Lamar Dodd School of Art the same year.'
      label='Graphics Design'
      path='/'
      cardDrawerContents={new DialogContents("Currency Mockups", CurrencyMockupBackgroundImg, "Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design competition within the Lamar Dodd School of Art the same year.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const TodoCard = (
    <CardItem
      src={TodoImg}
      srcAlt={TodoBackgroundImg}
      text='Web design work for a Todo application built in React.js and TypeScript. Designed a modular Todo web app with streamlined sorting and editing. Click to try it out:'
      label='Web Dev'
      path='/'
      cardDrawerContents={new DialogContents("Todo App", TodoBackgroundImg, "Web design work for a Todo application built in React.js and TypeScript. Designed a modular Todo web app with streamlined sorting and editing. Click to try it out:")}
      handleCardDrawer={handleCardDrawer}
      aPath='/fall2021-dev-takehome/'
    />
  );
  
  const FingersCrossedCard = (
    <CardItem
      src={FingersCrossedImg}
      srcAlt={FingersCrossedBackgroundImg}
      text='UX and 3D-Modeling for a 8+ tabletop board game Fingers Crossed. I led team visual design and created 3D virtual and physical mockups for the tabletop game in Maya, and worked to publish the game in 2021.'
      label='UI / UX + 3D Illustration'
      path='/'
      cardDrawerContents={new DialogContents("Fingers Crossed", FingersCrossedBackgroundImg, "UX and 3D-Modeling for a 8+ tabletop board game Fingers Crossed. I led team visual design and created 3D virtual and physical mockups for the tabletop game in Maya, and worked to publish the game in 2021.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const AframeCard = (
    <CardItem
      src={AframeImg}
      srcAlt={AframeBackgroundImg}
      text='Created a virtual VR environment utilizing Aframe, Autodesk Maya Arnold procedural generation and Blender UV wrapping for class demonstration. Click to try it out:'
      label='AR / VR'
      path='/'
      aPath='/Aframe-3D-Replica/'
      cardDrawerContents={new DialogContents("Aframe VR Environment", AframeBackgroundImg, "Created a virtual VR environment utilizing Aframe, Autodesk Maya Arnold procedural generation and Blender UV wrapping for class demonstration. Click to try it out:")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const AHSRoboticsCard = (
    <CardItem
      src={AHSRoboticsImg}
      srcAlt={AHSRoboticsBackgroundImg}
      text='Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms.'
      label='Web Dev'
      path='/'
      cardDrawerContents={new DialogContents("AHS Robotics", AHSRoboticsBackgroundImg, "Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const TheAscentCard = (
    <CardItem
      src={TheAscentImg}
      srcAlt={TheAscentBackgroundImg}
      text='Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation.'
      label='Game Design'
      path='/'
      cardDrawerContents={new DialogContents("The Ascent", TheAscentBackgroundImg, "Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const UGAHacksCard = (
    <CardItem
      src={UGAHacksImg}
      srcAlt={UGAHacksBackgroundImg}
      text='Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page.'
      label='Game Design'
      path='/'
      cardDrawerContents={new DialogContents("Swap", UGAHacksBackgroundImg, "Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const NCRRETAILCard = (
    <CardItem
      src={NCRRetailImg}
      srcAlt={NCRRetailBackgroundImg}
      text='React.js and Material UI programming and Figma UI design for the Retail Catalog UI within my summer 2022 SWE role within NCR Corporation. Also conducted API testing with Postman.'
      label='UI / UX + React.js'
      path='/'
      cardDrawerContents={new DialogContents("NCR Retail Catalog", NCRRetailBackgroundImg, "React.js and Material UI programming and Figma UI design for the Retail Catalog UI within my summer 2022 SWE role within NCR Corporation. Also conducted API testing with Postman.")}
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const SliderCard = (
    <CardItem
      src={SliderImg}
      srcAlt={SliderBackgroundImg}
      text='Led 2D Illustration and game design within the C# and Unity-based indie game Slider, currently published and available as a demo on Steam. Click visit our Steam Store page:'
      label='Game Development'
      path='/'
      cardDrawerContents={new DialogContents("Slider", SliderBackgroundImg, "Led 2D Illustration and game design within the C# and Unity-based indie game Slider, currently published and available as a demo on Steam. Click visit our Steam Store page:")}
      handleCardDrawer={handleCardDrawer}
      aPath={new URL('https://store.steampowered.com/app/1916890/Slider/')} // takes to another site
    />
  );
  
  const RealityMedia = (
    <CardItem
      src={RealityMediaImg}
      srcAlt={RealityMediaBackgroundImg}
      text='User Experience Design and Vue.js programming to create virtual reality museum spaces for the GT Augmented Environments Lab.  Click to try it out:'
      label='User Experience'
      path='/'
      cardDrawerContents={new DialogContents("Reality Media", RealityMediaBackgroundImg, "User Experience Design and Vue.js programming to create virtual reality museum spaces for the GT Augmented Environments Lab.  Click to try it out:")}
      handleCardDrawer={handleCardDrawer}
      aPath={new URL('https://realitymedia.digital/notLoggedIn/')} // takes to another site
    />
  );




  return (
    <React.Fragment>
      <CardDialog open={cardDrawerOpen} setOpen={setCardDrawerOpen} content={cardDrawerContent} />
      <section className='cards'>
        <h1 className='card__title'>Work</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul id='cards' className='cards__items'>
              
              {NCRRETAILCard}
              {FingersCrossedCard}
              
              {SliderCard}
            </ul>
            <ul
              className='cards__items' /* makes the 3 item row in the second column */
            >
              {CurrencyCard}
              {NCRHOSPCard}
              
              
            </ul>
            <ul
              className='cards__items' /* makes the 2 item container in the 3rd row */
            >
              {RollerCard}
              {AframeCard}
              {TodoCard}
            </ul>
            <ul
              className='cards__items' /* makes the 2 item container in the 4th row */
            >
              
              {PostCardCard}
              {TheAscentCard}
            </ul>
            <ul id='cards' className='cards__items'>
              {AHSRoboticsCard}
              {UGAHacksCard}
              {RealityMedia}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Cards;
