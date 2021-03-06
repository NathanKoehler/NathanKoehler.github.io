import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./Gallery.css";
import { GalleryCard } from "./GalleryElements";
import useProgressiveImg from "./useProgressiveImg";

const Gallery = () => {

  const images = [
    {
      id: 1,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg("images/gallery/blurred/bpillar.jpg", "images/gallery/pillar.png"),
    },
    {
      id: 2,
      height: 2341,
      width: 3300,
      imgSrc: useProgressiveImg("images/gallery/blurred/btree.jpg", "images/gallery/tree.png"),
    },
    {
      id: 3,
      height: 1400,
      width: 1400,
      imgSrc: useProgressiveImg("images/gallery/blurred/banta.jpg", "images/gallery/anta.png"),
    },
    {
      id: 4,
      height: 3600,
      width: 1500,
      imgSrc: useProgressiveImg("images/gallery/blurred/bnewrohcaw.jpg", "images/gallery/newrohcaw.jpg"),
    },
    
    {
      id: 5,
      height: 1333,
      width: 2400,
      imgSrc: useProgressiveImg("images/gallery/blurred/bglaveborn.jpg", "images/gallery/glaveborn.png"),
    },
    {
      id: 6,
      height: 612,
      width: 1500,
      imgSrc: useProgressiveImg("images/gallery/blurred/bmountain.jpg", "images/gallery/mountain.png"),
    },
    {
      id: 7,
      height: 1853,
      width: 1133,
      imgSrc: useProgressiveImg("images/gallery/blurred/bwinter.jpg", "images/gallery/winter.png"),
    },
    {
      id: 8,
      height: 1668,
      width: 2434,
      imgSrc: useProgressiveImg("images/gallery/blurred/bfire.jpg", "images/gallery/fire.png"),
    },
    {
      id: 9,
      height: 2128,
      width: 2856,
      imgSrc: useProgressiveImg("images/gallery/blurred/bbarter.jpg", "images/gallery/barter.png"),
    },
    {
      id: 10,
      height: 2808,
      width: 2152,
      imgSrc: useProgressiveImg("images/gallery/blurred/btemple.jpg", "images/gallery/temple.png"),
    },
    {
      id: 11,
      height: 3600,
      width: 1500,
      imgSrc: useProgressiveImg("images/gallery/blurred/bnewrohcawback.jpg", "images/gallery/newrohcawback.jpg"),
    },
    {
      id: 12,
      height: 3300,
      width: 2550,
      imgSrc: useProgressiveImg("images/gallery/blurred/bfish.jpg", "images/gallery/fish.png"),
    },
    {
      id: 13,
      height: 1285,
      width: 1285,
      imgSrc: useProgressiveImg("images/gallery/blurred/bbubblebakers.jpg", "images/gallery/bubblebakers.png"),
    },
    {
      id: 14,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg("images/gallery/blurred/bfoundry.jpg", "images/gallery/foundry.png"),
    },
    {
      id: 15,
      height: 1960,
      width: 1441,
      imgSrc: useProgressiveImg("images/gallery/blurred/bsit.jpg", "images/gallery/sit.jpeg"),
    },
    {
      id: 16,
      height: 2550,
      width: 3300,
      imgSrc: useProgressiveImg("images/gallery/blurred/bwater.jpg", "images/gallery/water.png"),
    },
    {
      id: 17,
      height: 1101,
      width: 845,
      imgSrc: useProgressiveImg("images/gallery/blurred/bpirate.jpg", "images/gallery/pirate.png"),
    },
    {
      id: 18,
      height: 2956,
      width: 2683,
      imgSrc: useProgressiveImg("images/gallery/blurred/bcrown.jpg", "images/gallery/crown.png"),
    },
    {
      id: 19,
      height: 2956,
      width: 2683,
      imgSrc: useProgressiveImg("images/gallery/blurred/bice.jpg", "images/gallery/ice.png"),
    },
    {
      id: 20,
      height: 2244,
      width: 1452,
      imgSrc: useProgressiveImg("images/gallery/blurred/bmononokeredesign.jpg", "images/gallery/mononokeredesign.png"),
    },
    {
      id: 21,
      height: 1964,
      width: 1538,
      imgSrc: useProgressiveImg("images/gallery/blurred/bthehollowknight.jpg", "images/gallery/thehollowknight.png"),
    },
    {
      id: 22,
      height: 3300,
      width: 2550,
      imgSrc: useProgressiveImg("images/gallery/blurred/bsorcerer.jpg", "images/gallery/sorcerer.jpeg"),
    },
    {
      id: 23,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg("images/gallery/blurred/bwall.jpg", "images/gallery/wall.png"),
    },
  ];

  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? "model open" : "model"}>
        <img src={tempImgSrc} alt="Focus" />
        <i
          className="fas fa-times"
          onClick={() => setModal(false)}
        ></i>
      </div>
      <section className="gallery-page">
      <div className="gallery-title">
        <div className="gallery-title-box">
          <div className="gallery-title-text">
            <h1>Image Gallery</h1>
          </div>
          <h2>"Done in Photoshop, Illustrator, and Traditional Mediums"</h2>
        </div>
      </div>
      <div className="gallery-wrapper">
        {images &&
          images.map((item, index) => {
            

            return (
              <ReactVisibilitySensor
                key={index}
                partialVisibility={true}
                offset={{ top: 200 }}
                intervalDelay="300"
                intervalCheck="false"
                delayedCall="true"
                onChange={(isVisible) => imageVisibleChange(index, isVisible)}
              >
                <GalleryCard show={imagesShownArray[index]}>
                  <div 
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.imgSrc[0])}
                  >
                    <img 
                      className="images"
                      src={item.imgSrc[0]}
                      height={item.height}
                      width={item.width}
                      alt="Gallery"
                      style={{
                        filter: item.imgSrc[1] ? "blur(20px)" : "none",
                        transition: item.imgSrc[1] ? "none" : "filter 0.3s ease-out"
                      }}
                    />
                    </div>
                </GalleryCard>
              </ReactVisibilitySensor>
            );
          })}
      </div>
      </section>
    </>
  );
};

export default Gallery;
