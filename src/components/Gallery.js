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
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bpillar.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/pillar.png"),
    },
    {
      id: 2,
      height: 1333,
      width: 2400,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bglaveborn.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/glaveborn.png"),
    },
    {
      id: 3,
      height: 1400,
      width: 1400,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/banta.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/anta.png"),
    },
    {
      id: 4,
      height: 3600,
      width: 1500,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bnewrohcaw.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/newrohcaw.jpg"),
    },
    {
      id: 5,
      height: 1668,
      width: 2434,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bfire.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/fire.png"),
    },
    {
      id: 6,
      height: 612,
      width: 1500,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bmountain.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/mountain.png"),
    },
    {
      id: 7,
      height: 1853,
      width: 1133,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bwinter.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/winter.png"),
    },
    {
      id: 8,
      height: 2341,
      width: 3300,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/btree.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/tree.png"),
    },
    {
      id: 9,
      height: 3600,
      width: 1500,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bnewrohcawback.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/newrohcawback.jpg"),
    },
    {
      id: 10,
      height: 3300,
      width: 2550,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bfish.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/fish.png"),
    },
    {
      id: 11,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bfoundry.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/foundry.png"),
    },
    {
      id: 12,
      height: 2400,
      width: 1800,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bwall.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/wall.png"),
    },
    {
      id: 13,
      height: 1960,
      width: 1441,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bsit.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/sit.jpeg"),
    },
    {
      id: 14,
      height: 2550,
      width: 3300,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bwater.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/water.png"),
    },
    {
      id: 15,
      height: 3300,
      width: 2550,
      imgSrc: useProgressiveImg("https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/blurred/bsorcerer.jpg", "https://personal-react-aws-bucket.s3.amazonaws.com/album1/gallery/sorcerer.jpeg"),
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
          <h2>"Fresh from the head, delivered by hand."</h2>
        </div>
      </div>
      <div className="gallery">
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
