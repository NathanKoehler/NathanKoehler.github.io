import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./Gallery.css";
import { GalleryCard } from "./GalleryElements";
import useProgressiveImg from "./useProgressiveImg";
import bpillar from "../_images/gallery/blurred/bpillar.jpg";
import pillar from "../_images/gallery/pillar.png";
import btree from "../_images/gallery/blurred/btree.jpg";
import tree from "../_images/gallery/tree.png";
import banta from "../_images/gallery/blurred/banta.jpg";
import anta from "../_images/gallery/anta.png";
import bnewrohcawback from "../_images/gallery/blurred/bnewrohcawback.jpg";
import newrohcawback from "../_images/gallery/newrohcawback.jpg";
import bglaveborn from "../_images/gallery/blurred/bglaveborn.jpg";
import glaveborn from "../_images/gallery/glaveborn.png";
import bmountain from "../_images/gallery/blurred/bmountain.jpg";
import mountain from "../_images/gallery/mountain.png";
import bwinter from "../_images/gallery/blurred/bwinter.jpg";
import winter from "../_images/gallery/winter.png";
import bfire from "../_images/gallery/blurred/bfire.jpg";
import fire from "../_images/gallery/fire.png";
import bbarter from "../_images/gallery/blurred/bbarter.jpg";
import barter from "../_images/gallery/barter.png";
import btemple from "../_images/gallery/blurred/btemple.jpg";
import temple from "../_images/gallery/temple.png";
import bnewrohcaw from "../_images/gallery/blurred/bnewrohcaw.jpg";
import newrohcaw from "../_images/gallery/newrohcaw.jpg";
import bfish from "../_images/gallery/blurred/bfish.jpg";
import fish from "../_images/gallery/fish.png";
import bbubblebakers from "../_images/gallery/blurred/bbubblebakers.jpg";
import bubblebakers from "../_images/gallery/bubblebakers.png";
import bfoundry from "../_images/gallery/blurred/bfoundry.jpg";
import foundry from "../_images/gallery/foundry.png";
import bsit from "../_images/gallery/blurred/bsit.jpg";
import sit from "../_images/gallery/sit.jpeg";
import bwater from "../_images/gallery/blurred/bwater.jpg";
import water from "../_images/gallery/water.png";
import bpirate from "../_images/gallery/blurred/bpirate.jpg";
import pirate from "../_images/gallery/pirate.png";
import bcrown from "../_images/gallery/blurred/bcrown.jpg";
import crown from "../_images/gallery/crown.png";
import bice from "../_images/gallery/blurred/bice.jpg";
import ice from "../_images/gallery/ice.png";
import bmononokeredesign from "../_images/gallery/blurred/bmononokeredesign.jpg";
import mononokeredesign from "../_images/gallery/mononokeredesign.png";
import bthehollowknight from "../_images/gallery/blurred/bthehollowknight.jpg";
import thehollowknight from "../_images/gallery/thehollowknight.png";
import bsorcerer from "../_images/gallery/blurred/bsorcerer.jpg";
import sorcerer from "../_images/gallery/sorcerer.jpeg";
import bwall from "../_images/gallery/blurred/bwall.jpg";
import wall from "../_images/gallery/wall.png";
import { Box } from "@mui/system";
import PortfolioPDF from "../_resources/NathanKoehler_UIUXPortfolio.pdf";
import { FocusImage } from "./FocusImage";

const Gallery = () => {

  const images = [
    {
      id: 1,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg(bpillar, pillar),
    },
    {
      id: 2,
      height: 2341,
      width: 3300,
      imgSrc: useProgressiveImg(btree, tree),
    },
    {
      id: 3,
      height: 1400,
      width: 1400,
      imgSrc: useProgressiveImg(banta, anta),
    },
    {
      id: 4,
      height: 3600,
      width: 1500,
      imgSrc: useProgressiveImg(bnewrohcaw, newrohcaw),
    },
    
    {
      id: 5,
      height: 1333,
      width: 2400,
      imgSrc: useProgressiveImg(bglaveborn, glaveborn),
    },
    {
      id: 6,
      height: 612,
      width: 1500,
      imgSrc: useProgressiveImg(bmountain, mountain),
    },
    {
      id: 7,
      height: 1853,
      width: 1133,
      imgSrc: useProgressiveImg(bwinter, winter),
    },
    {
      id: 8,
      height: 1668,
      width: 2434,
      imgSrc: useProgressiveImg(bfire, fire),
    },
    {
      id: 9,
      height: 2128,
      width: 2856,
      imgSrc: useProgressiveImg(bbarter, barter),
    },
    {
      id: 10,
      height: 2808,
      width: 2152,
      imgSrc: useProgressiveImg(btemple, temple),
    },
    {
      id: 11,
      height: 3600,
      width: 1500,
      imgSrc: useProgressiveImg(bnewrohcawback, newrohcawback),
    },
    {
      id: 12,
      height: 3300,
      width: 2550,
      imgSrc: useProgressiveImg(bfish, fish),
    },
    {
      id: 13,
      height: 1285,
      width: 1285,
      imgSrc: useProgressiveImg(bbubblebakers, bubblebakers),
    },
    {
      id: 14,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg(bfoundry, foundry),
    },
    {
      id: 15,
      height: 1960,
      width: 1441,
      imgSrc: useProgressiveImg(bsit, sit),
    },
    {
      id: 16,
      height: 2550,
      width: 3300,
      imgSrc: useProgressiveImg(bwater, water),
    },
    {
      id: 17,
      height: 1101,
      width: 845,
      imgSrc: useProgressiveImg(bpirate, pirate),
    },
    {
      id: 18,
      height: 2956,
      width: 2683,
      imgSrc: useProgressiveImg(bcrown, crown),
    },
    {
      id: 19,
      height: 2956,
      width: 2683,
      imgSrc: useProgressiveImg(bice, ice),
    },
    {
      id: 20,
      height: 2244,
      width: 1452,
      imgSrc: useProgressiveImg(bmononokeredesign, mononokeredesign),
    },
    {
      id: 21,
      height: 1964,
      width: 1538,
      imgSrc: useProgressiveImg(bthehollowknight, thehollowknight),
    },
    {
      id: 22,
      height: 3300,
      width: 2550,
      imgSrc: useProgressiveImg(bsorcerer, sorcerer),
    },
    {
      id: 23,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg(bwall, wall),
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
      <FocusImage modal={modal} tempImgSrc={tempImgSrc} setModal={setModal} />
      <section className="gallery-page">
      <div className="gallery-title">
        <div className="gallery-title-box">
          <div className="gallery-title-text">
            <h1>Image Gallery</h1>
          </div>
          <h2>"Art Hobbiest And Digital-Traditional Illustrator"</h2>
        </div>
      </div>
      <Box sx={{ pt: 2, pb: 8 }}>
        <div className="gallery-subtitle">
          <a
                href={PortfolioPDF} // takes you to the portfolio pdf
                target="_blank"
                rel="noopener noreferrer"
                /* changes the URL */ className="gallery-subtitle-links"
              >
                <h2>For A UI/UX Portfolio, Click Here:</h2>
              </a>
        </div>
      </Box>
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

