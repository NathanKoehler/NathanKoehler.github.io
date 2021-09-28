import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";


function Cards() {
  return (
    <section className="cards">
      <h1 className="card__title">Work</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/AHS-Robotics.png"
              srcAlt="images/AHS-Robotics-Background.png"
              text="Web design and illustration work to redesign the website and digital marketing for the Alpharetta Robotics Team. My role as head of marketing was to redesign the online webpage and the social media platforms."
              label="UI / UX"
              path="/services"
            />
            <CardItem
              src="images/TheAscentTitleScreen.png"
              srcAlt="images/TheAscent-Background.png"
              text="Illustration and C# coding for the Ascent, a 2D platformer built in built in Unity Game Engine. I led the project to win 1st at the Georgia FBLA 2020 Conference for Game Development and Simulation."
              label="Game Design"
              path="/services"
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
              path="/products"
            />
            <CardItem
              src="images/CurrencyMockup.png"
              srcAlt="images/CurrencyMockup-Background.png"
              text="Drafting and illustration work two sets of mock currency during the spring and summer of 2021, later posted for a UGA illustration and design portfolio within the Dodd School of Art."
              label="Graphics Design"
              path="/sign-up"
            />
            <CardItem
              src="images/UGAHacks6.png"
              srcAlt="images/UGAHacks6-Background.png"
              text="Graphics Design and C# coding work for the coop indie game Swap. I led the project with my work in art and programming and was featured on the 2021 UGAHacks6 Hackathion social media page."
              label="Game Design"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cards;
