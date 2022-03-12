import React, { useEffect, useState } from "react";
import "./Piano.css";

const KEY_TO_NOTE = {
  'q': 'f',
  'w': 'g',
  'e': 'a',
  'r': 'b',
  't': 'ch',
  'y': 'dh',
  'u': 'eh',
  'i': 'fh',
  'o': 'gh',
  'p': 'ah',
  '[': 'bh',
  '2': 'fs',
  '3': 'gs',
  '4': 'as',
  '6': 'csh',
  '7': 'dsh',
  '9': 'fsh',
  '0': 'gsh',
  '-': 'ash',

  'z': 'chh',
  'x': 'dhh',
  'c': 'ehh',
  'v': 'fhh',
  'b': 'ghh',
  'n': 'ahh',
  'm': 'bhh',
  's': 'cshh',
  'd': 'dshh',
  'g': 'fshh',
  'h': 'gshh',
  'j': 'ashh',
};

const KEY_TO_STYLE = {
  'q': "white f l",
  '2': "black fs l",
  'w': "white g l",
  '3': "black gs l",
  'e': "white a l",
  '4': "black as l",
  'r': "white b l",
  't': "white c",
  '6': "black cs",
  'y': "white d",
  '7': "black ds",
  'u': "white e",
  'i': "white f h",
  '9': "black fs h",
  'o': "white g h",
  '0': "black gs h",
  'p': "white a h",
  '-': "black as h",
  '[': "white b h",
  'z': "white c hh",
  's': "black cs hh",
  'x': "white d hh",
  'd': "black ds hh",
  'c': "white e hh",
  'v': "white f hh",
  'g': "black fs hh",
  'b': "white g hh",
  'h': "black gs hh",
  'n': "white a hh",
  'j': "black as hh",
  'm': "white b hh",
};

function Key(props) {
  const [isClicked, setClicked] = useState(false);
  const [isPressed, setPressed] = useState(false);

  const keyStyle = KEY_TO_STYLE[props.keyboard];
  const note = KEY_TO_NOTE[props.keyboard];

  if (isPressed && !props.pressedKeys.includes(note)) {
    setPressed(false);
  } else if (!isPressed && props.pressedKeys.includes(note)) {
    setPressed(true);
  }

  const keyClick = (e) => {
      e.preventDefault();
    setClicked(true);
    props.audio(note);
  };

  return (
    <li
      className={`${keyStyle} ${(isClicked || isPressed) ? "active" : ""}`}
      onMouseDown={(e) => keyClick(e)}
      onMouseLeave={() => setClicked(false)}
      onMouseUp={() => setClicked(false)}
    ><h3 className={`key-text ${(isClicked || isPressed) ? "active" : ""}`}>{props.keyboard}</h3></li>
  );
}

export default Key;
