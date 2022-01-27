import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <section className="cards">
            <h1 className="card__title">Work</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul id="cards" className="cards__items">
                        <CardItem
                            src="images/AHS-Robotics.png"
                            srcAlt="images/AHS-Robotics-Background.png"
                            text="Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms."
                            label="Web Dev"
                            path="/"
                        />
                        <CardItem
                            src="images/TheAscentTitleScreen.png"
                            srcAlt="images/TheAscent-Background.png"
                            text="Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation."
                            label="Game Design"
                            path="/"
                        />
                    </ul>
                    <ul
                        className="cards__items" /* makes the 3 item row in the second column */
                    >
                        <CardItem
                            src="images/PostCard.png"
                            srcAlt="images/PostCard-Background.png"
                            text="Graphics Design work for a series of digitally illustrated postcards and stamps. The series took an honorable mention within the Summer 2021 UGA Digital Illustration review."
                            label="Graphics Design"
                            path="/"
                        />
                        <CardItem
                            src="images/CurrencyMockup.png"
                            srcAlt="images/CurrencyMockup-Background.png"
                            text="Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design portfolio within the Dodd School of Art."
                            label="Graphics Design"
                            path="/"
                        />
                        <CardItem
                            src="images/UGAHacks6.png"
                            srcAlt="images/UGAHacks6-Background.png"
                            text="Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page."
                            label="Game Design"
                            path="/"
                        />
                    </ul>
                    <ul
                        className="cards__items" /* makes the 2 item container in the 3rd row */
                    >
                        <CardItem
                            src="images/FingersCrossed.png"
                            srcAlt="images/FingersCrossed-Background.png"
                            text="UX Design and 3D-Modeling work for a 8+ tabletop board game Fingers Crossed. I worked in graphics design prior to making 3D virtual and physical mockups for the game in Maya."
                            label="UI / UX"
                        />
                        <CardItem
                            src="images/Aframe.png"
                            srcAlt="images/Aframe-Background.png"
                            text="Created a virtual VR environment utilizing Aframe, Autodesk Maya Arnold procedural generation and Blender UV wrapping for class demonstration. Click to try it out:"
                            label="AR / VR"
                            path="/"
                            aPath="/Aframe-3D-Replica/"
                        />
                            
                    </ul>
                    <ul
                        className="cards__items" /* makes the 2 item container in the 4th row */
                    >
                        <CardItem
                          src="images/RollerRush.png"
                          srcAlt="images/RollerRush-Background.png"
                          text="Created a multiplayer web game using Three.js and Cannon.js in tandem with vanilla CSS and HTML as a part of the Computational Media interaction design track."
                          label="Javascript"
                          path="/"
                        />
                        <CardItem
                          src="images/Todo.png"
                          srcAlt="images/Todo-Background.png"
                          text="Web design work for a Todo application built in React.js. Designed a modular Todo web app with streamlined sorting and editing. Click to try it out:"
                          label="Web Dev"
                          path="/"
                          aPath="/fall2021-dev-takehome/"
                        /> 
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Cards;
