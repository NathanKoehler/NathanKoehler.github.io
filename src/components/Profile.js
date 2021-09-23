import React from "react";
import "./Profile.css";
import Parallax from "react-rellax";

function Profile() {
  return (
    <>
      <section className="profile">
        <div className="profile-top">
        <Parallax
          speed={3} className="text-over-image">
                <h1><mark className="light">My</mark> Name Is <mark className="light-red">Nate</mark></h1>
            </Parallax>
            <Parallax speed={-3}>
                <img src="/images/selfie.png" alt="Selfie" className="profile-img" />
            </Parallax>
            <Parallax speed={-5} className="profile-top-container">
                <div className="profile-top-text">
                    <h2>But you can call me <mark className="red">Nathan</mark>, <mark className="red">Nathaniel</mark>, or <mark className="red">曾雷生</mark> &#128516;</h2>
                    <p>I'm currenty a undergrad studying Media and Design at <mark className="small-red">Georgia Tech.</mark> &#128029; </p>
                    <p>I came from a trilingual household and enjoy working on code or art. &#128187; </p>
                    <p>If you are interested in hiring me, you can check out my <mark className="small-red">info below.</mark> &#128071; </p>
                    <p>I'm now available for <mark className="small-red">part-time roles</mark>, <mark className="small-red">internships</mark>, and <mark className="small-red">co-ops.</mark> &#128640; </p>
                    <p>If you're just browsing, check out my work in the art gallery, too. &#127912;</p>
                    <p>When not coding, you can find me <mark className="small-red">playing dnd</mark> or my <mark className="small-red">guitar.</mark> &#127928;</p>
                    <p>I also have a big addication to game jams and hackathons. &#128198;</p>
                    <p>If you want a website or app created today, <mark className="small-red">let me know!</mark> &#128075;</p>
                </div>
            </Parallax>
        </div>
      </section>
    </>
  );
}

export default Profile;
