import React, { useState } from "react";
import './Cards.css';
import CardItem from './CardItem';
import RollerRushImg from '../../_images/RollerRush.png';
import RollerRushBackgroundImg from '../../_images/RollerRush-Background.png';
import NCRHOSPImg from '../../_images/NCRHOSP.jpg';
import NCRHOSPBackgroundImg from '../../_images/NCRHOSP-AnimBackground.gif';
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
import RealityMediaBackgroundImg from '../../_images/RealityMedia-AnimBackground.gif';
import EmpathyBytesImg from '../../_images/EmpathyBytes.jpg';
import EmpathyBytesBackgroundImg from '../../_images/EmpathyBytes-Background.jpg';

import CardDialog from "../_dialogs/CardDialog";

function Cards() {
  const [cardDrawerOpen, setCardDrawerOpen] = useState(false);
  const [cardDrawerContent, setCardDrawerContent] = useState(null);

  const handleCardDrawer = (open, content) => {
    setCardDrawerOpen(open);
    setCardDrawerContent(content);
  }


  const NCRHOSPCard = (
    <CardItem
      src={NCRHOSPImg}
      srcAlt={NCRHOSPBackgroundImg}
      text='Aloha Cloud POS Software Demo for NCR in May to August 2022.'
      redText='Case Study'
      label='Middleware + React.js'
      path='/ncr-interactive-demo'
      handleCardDrawer={handleCardDrawer}
    />
  );

  
  const RealityMedia = (
    <CardItem
      src={RealityMediaImg}
      srcAlt={RealityMediaBackgroundImg}
      text='User Experience Design and Vue.js programming to create virtual reality museum spaces for the GT Augmented Environments Lab.'
      redText='Click to learn more:'
      label='User Experience'
      path='/'
      aPath={new URL('https://realitymedia.digital/notLoggedIn/')} // takes to another site
    />
  );

  const EmpathyBytes = (
    <CardItem
      src={EmpathyBytesImg}
      srcAlt={EmpathyBytesBackgroundImg}
      text='Web Development Work for Empathy Bytes from August 2021 to January 2022.'
      redText='Case Study'
      label='Web UI / UX'
      path='/empathy-bytes'
    />
  );
  
  const FingersCrossedCard = (
    <CardItem
      src={FingersCrossedImg}
      srcAlt={FingersCrossedBackgroundImg}
      text='Student-led game startup from Fall 2021 to Spring 2022.'
      redText='Case Study'
      label='UI / UX + 3D Illustration'
      path='/fingers-crossed'
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
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const RollerCard = (
    <CardItem
      src={RollerRushImg}
      srcAlt={RollerRushBackgroundImg}
      text="Created a multiplayer web game using Three.js and Cannon.js in tandem with vanilla CSS and HTML within GT's Computational Media design program."
      redText='Click to try it out:'
      label='JavaScript'
      path='/'
      handleCardDrawer={handleCardDrawer}
      aPath={new URL('https://bluebokehs.github.io/rollerrush/')} // takes to another site
    />
  );

  const TodoCard = (
    <CardItem
      src={TodoImg}
      srcAlt={TodoBackgroundImg}
      text='Web design work for a Todo application built in React.js and TypeScript. Designed a modular Todo web app with streamlined sorting and editing.'
      redText='Click to try it out:'
      label='Web Dev'
      path='/'
      handleCardDrawer={handleCardDrawer}
      aPath='/fall2021-dev-takehome/'
    />
  );
  
  
  
  const AframeCard = (
    <CardItem
      src={AframeImg}
      srcAlt={AframeBackgroundImg}
      text='Created a virtual VR environment utilizing Aframe, Autodesk Maya Arnold procedural generation and Blender UV wrapping for class demonstration.'
      redText='Click to try it out:'
      label='AR / VR'
      path='/'
      aPath='/Aframe-3D-Replica/'
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
      handleCardDrawer={handleCardDrawer}
    />
  );
  
  const SliderCard = (
    <CardItem
      src={SliderImg}
      srcAlt={SliderBackgroundImg}
      text='2D Illustration and game programming within the C# and Unity indie title Slider, available as a demo on Steam. Currently an Indepedent Games Festival 2023 finalist.'
      redText='Click visit the Steam Store page:'
      label='Game Development'
      path='/'
      handleCardDrawer={handleCardDrawer}
      aPath={new URL('https://store.steampowered.com/app/1916890/Slider/')} // takes to another site
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
              
              
              {NCRHOSPCard}
              {FingersCrossedCard}
              
              
              
            </ul>
            <ul
              className='cards__items' /* makes the 3 item row in the second column */
            >
              {EmpathyBytes}
              {SliderCard}
              {RealityMedia}
            </ul>
            <h1 className='card__title'>Projects</h1>
            <ul
              className='cards__items' /* makes the 2 item container in the 3rd row */
            >
              
              
              {NCRRETAILCard}
              {RollerCard}
              {AframeCard}
              
              
              
            </ul>
            <ul
              className='cards__items' /* makes the 2 item container in the 4th row */
            >
              
              {PostCardCard}
              {TodoCard}
              {CurrencyCard}
              
              
            </ul>
            <ul id='cards' className='cards__items'>
              {TheAscentCard}
              
              {UGAHacksCard}
              {AHSRoboticsCard}
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Cards;
