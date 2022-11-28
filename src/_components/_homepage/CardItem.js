import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { Card } from "./StyledCard";


function CardItem({path, src, srcAlt, text, label, aPath, handleCardDrawer, cardDrawerContents}) {
  const elementRef = useRef(null);
  const [elemWidth, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(elementRef.current ? elementRef.current.offsetWidth : 0);
    };

    if (elementRef.current) {
      setWidth(elementRef.current ? elementRef.current.offsetWidth : 0);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef]);

  const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);
    useEffect(() => {
      if (show) setVisible(true);
    }, [show]);
    const onAnimationEnd = () => {
      if (!show) setVisible(false);
    };
    const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };
    const fadeProps = {
      style,
      onAnimationEnd,
    };
    return [isVisible, setShow, fadeProps];
  };

  const [isVisible, setVisible, fadeProps] = useFade();

  return (
    <>
        <Card show="true">
          <li className="cards__item">
            <Link /* when hovering over a card, display more info and a new image/video */
              className="cards__item__link"
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              onClick={() => { // for rare cards that take you to a new page entirely
                handleCardDrawer(true, cardDrawerContents);
                // if (aPath != null) {
                //   window.open(aPath, '_blank')
                // }
              }}
              to={path}
            >
              <div
                ref={elementRef}
                className="cards__inner__box" /* the content within the card */
              >
                <figure
                  className="cards__item__pic-wrap" /* the image wrapper */
                  data-category={label}
                >
                  <img
                    src={src}
                    alt="Work"
                    className="cards__item__img"
                  />
                  <img
                    src={srcAlt}
                    alt="Work"
                    className="cards__item__img__background"
                  />
                </figure>
                {isVisible && (
                  <div {...fadeProps} className="cards__item__info">
                    <h5
                      style={{ fontSize: elemWidth / 22 }}
                      className="cards__item__text"
                    >
                      {text}
                    </h5>
                  </div>
                )}
              </div>
            </Link>
          </li>
        </Card>
    </>
  );
}

export default CardItem;