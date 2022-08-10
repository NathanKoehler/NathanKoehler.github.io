import React from "react";
import './Cards.css';
import CardItem from './CardItem';
import RollerRushImg from '../images/RollerRush.png';
import RollerRushBackgroundImg from '../images/RollerRush-Background.png';
import NCRHOSPImg from '../images/NCRHOSP.jpg';
import NCRHOSPBackgroundImg from '../images/NCRHOSP-Background.jpg';
import PostCardImg from '../images/PostCard.png';
import PostCardBackgroundImg from '../images/PostCard-Background.png';
import CurrencyMockupImg from '../images/CurrencyMockup.png';
import CurrencyMockupBackgroundImg from '../images/CurrencyMockup-Background.png';
import TodoImg from '../images/Todo.png';
import TodoBackgroundImg from '../images/Todo-Background.png';
import FingersCrossedImg from '../images/FingersCrossed.png';
import FingersCrossedBackgroundImg from '../images/FingersCrossed-Background.png';
import AframeImg from '../images/Aframe.png';
import AframeBackgroundImg from '../images/Aframe-Background.png';
import AHSRoboticsImg from '../images/AHS-Robotics.png';
import AHSRoboticsBackgroundImg from '../images/AHS-Robotics-Background.png';
import TheAscentImg from '../images/TheAscentTitleScreen.png';
import TheAscentBackgroundImg from '../images/TheAscent-Background.png';
import UGAHacksImg from '../images/UGAHacks6.png';
import UGAHacksBackgroundImg from '../images/UGAHacks6-Background.png';
import NCRRetailImg from '../images/NCRRETAIL.jpg';
import NCRRetailBackgroundImg from '../images/NCRRETAIL-Background.png';
import SliderImg from '../images/Slider.jpg';
import SliderBackgroundImg from '../images/Slider-Background.gif';
import RealityMediaImg from '../images/RealityMedia.png';
import RealityMediaBackgroundImg from '../images/RealityMedia-Background.png';






const RollerCard = (
  <CardItem
    src={RollerRushImg}
    srcAlt={RollerRushBackgroundImg}
    text="Created a multiplayer web game using Three.js and Cannon.js in tandem with vanilla CSS and HTML within GT's Computational Media design program. Click to try it out:"
    label='JavaScript'
    path='/'
    aPath={new URL('https://bluebokehs.github.io/rollerrush/')} // takes to another site
  />
);

const NCRHOSPCard = (
  <CardItem
    src={NCRHOSPImg}
    srcAlt={NCRHOSPBackgroundImg}
    text='Lead the UX design and software of the Aloha Cloud Interactive Demo within my Summer 2022 SWE and Product Marketing role at NCR. Implimented Marketo and Salesforce API integrations and programmed the webapp in React and MUI.'
    label='Middleware + React.js'
    path='/'
  />
);

const PostCardCard = (
  <CardItem
    src={PostCardImg}
    srcAlt={PostCardBackgroundImg}
    text='Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review.'
    label='Graphics Design'
    path='/'
  />
);

const CurrencyCard = (
  <CardItem
    src={CurrencyMockupImg}
    srcAlt={CurrencyMockupBackgroundImg}
    text='Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design competition within the Lamar Dodd School of Art the same year.'
    label='Graphics Design'
    path='/'
  />
);

const TodoCard = (
  <CardItem
    src={TodoImg}
    srcAlt={TodoBackgroundImg}
    text='Web design work for a Todo application built in React.js and TypeScript. Designed a modular Todo web app with streamlined sorting and editing. Click to try it out:'
    label='Web Dev'
    path='/'
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
  />
);

const AHSRoboticsCard = (
  <CardItem
    src={AHSRoboticsImg}
    srcAlt={AHSRoboticsBackgroundImg}
    text='Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms.'
    label='Web Dev'
    path='/'
  />
);

const TheAscentCard = (
  <CardItem
    src={TheAscentImg}
    srcAlt={TheAscentBackgroundImg}
    text='Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation.'
    label='Game Design'
    path='/'
  />
);

const UGAHacksCard = (
  <CardItem
    src={UGAHacksImg}
    srcAlt={UGAHacksBackgroundImg}
    text='Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page.'
    label='Game Design'
    path='/'
  />
);

const NCRRETAILCard = (
  <CardItem
    src={NCRRetailImg}
    srcAlt={NCRRetailBackgroundImg}
    text='React.js and Material UI programming and Figma UI design for the Retail Catalog UI within my summer 2022 SWE role within NCR Corporation. Also conducted API testing with Postman.'
    label='UI / UX + React.js'
    path='/'
  />
);

const SliderCard = (
  <CardItem
    src={SliderImg}
    srcAlt={SliderBackgroundImg}
    text='Led 2D Illustration and game design within the C# and Unity-based indie game Slider, currently published and available as a demo on Steam. Click visit our Steam Store page:'
    label='Game Development'
    path='/'
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
    aPath={new URL('https://realitymedia.digital/notLoggedIn/')} // takes to another site
  />
);

function Cards() {
  return (
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
  );
}

export default Cards;
