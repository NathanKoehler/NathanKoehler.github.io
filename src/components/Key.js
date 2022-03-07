import React, { useState } from "react";
import "./Piano.css";

function Key(props) {
    /* const KEY_TO_NOTE = {
        'q': 'fh',
        'w': 'gh',
        'e': 'ah',
        'r': 'bh',
        't': 'ch',
        'y': 'dh',
        'u': 'eh',
        'i': 'fhh',
        'o': 'ghh',
        'p': 'ahh',
        '[': 'bhh',
      }; */

  const [isPressed, setPressed] = useState(false);

  const keyDown = (e) => {
      e.preventDefault();
    setPressed(true);
    props.audio(e, props.note);
  };

  return (
    <li
      className={`${props.defaultStyle} ${isPressed ? "active" : ""}`}
      onMouseDown={(e) => keyDown(e)}
      onMouseLeave={() => setPressed(false)}
      onMouseUp={() => setPressed(false)}
    ></li>
  );
}

export default Key;
