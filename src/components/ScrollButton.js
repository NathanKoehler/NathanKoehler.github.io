import React from "react";
import "./Button.css";
import { Link } from "react-scroll";

const STYLES = ["btn--primary", "btn--outline", "btn--outline2", "btn--invisible"];
const SIZES = ["btn--medium", "btn--large", "btn--large--invisible"];

export const ScrollButton = ({
    children,
    type,
    goTo,
    onClick,
    vOffset,
    vDuration,
    buttonStyle,
    buttonSize,
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];
  
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
      <Link
        to={goTo}
        spy={true}
        smooth={true}
        offset={vOffset}
        duration={vDuration}
        className="btn-mobile"
      >
        <button
          className={
            `btn ${checkButtonStyle} ${checkButtonSize}`
            /* allows the name to change dyamically */
          }
          onClick={onClick}
          type={type}
        >
          {
            children /* represents anything within 
                  Button and /Button going forward */
          }
        </button>
      </Link>
    );
  };

  /* allows it so that when the path is not specified (goTo is not set), the button goes nowhere */
  ScrollButton.defaultProps = {
    vDuration: 1800,
    vOffset: 100,
    goTo: "/",
  };
  
  