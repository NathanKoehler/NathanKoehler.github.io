import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const STYLES = ["btn--primary", "btn--outline", "btn--outline2", "btn--invisible"];
const SIZES = ["btn--medium", "btn--large", "btn--large--invisible"];

export const Button = ({
  children,
  type,
  goTo,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={goTo} className="btn-mobile">
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

export const SpecialButton = styled.button`
  --background: ${({ switcher }) =>
  switcher ? "rgb(238, 238, 238)" : "rgb(20, 20, 20)"};

  --purewhite: ${({ switcher }) =>
  switcher ? "#000000" : "#ffffff"};

  --darkgray: ${({ switcher }) =>
  switcher ? "#eeeeee" : "#dbdbdb"};

  transition: 0.8s all ease;
`;


/* allows it so that when the path is not specified (goTo is not set), the button goes nowhere */
Button.defaultProps = {
  goTo: "/",
};
