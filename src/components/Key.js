import React, { useEffect, useState } from "react";
import "./Piano.css";

function Key(props) {
  const [isClicked, setClicked] = useState(false);
  const [isPressed, setPressed] = useState(false);

  if (isPressed && !props.pressedKeys.includes(props.note)) {
    setPressed(false);
  } else if (!isPressed && props.pressedKeys.includes(props.note)) {
    setPressed(true);
  }

  const keyClick = (e) => {
      e.preventDefault();
    setClicked(true);
    props.audio(props.note);
  };

  return (
    <li
      className={`${props.defaultStyle} ${(isClicked || isPressed) ? "active" : ""}`}
      onMouseDown={(e) => keyClick(e)}
      onMouseLeave={() => setClicked(false)}
      onMouseUp={() => setClicked(false)}
    ><h3 className={`key-text ${(isClicked || isPressed) ? "active" : ""}`}>{props.keyboard}</h3></li>
  );
}

export default Key;
