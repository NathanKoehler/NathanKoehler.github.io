import React, { useState } from "react";
import "./Piano.css";

const KEY_TO_NOTE = {
  'q': 'f00',
  'w': 'g00',
  'e': 'a00',
  'r': 'b00',
  't': 'c10',
  'y': 'd10',
  'u': 'e10',
  'i': 'f10',
  'o': 'g10',
  'p': 'a10',
  '[': 'b10',
  '2': 'f01',
  '3': 'g01',
  '4': 'a01',
  '6': 'c11',
  '7': 'd11',
  '9': 'f11',
  '0': 'g11',
  '-': 'a11',

  'z': 'c20',
  'x': 'd20',
  'c': 'e20',
  'v': 'f20',
  'b': 'g20',
  'n': 'a20',
  'm': 'b20',
  's': 'c21',
  'd': 'd21',
  'g': 'f21',
  'h': 'g21',
  'j': 'a21',
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
      className={`${KEY_TO_STYLE[props.keyboard]} ${(isClicked || isPressed) ? "active" : ""}`}
      onMouseDown={(e) => keyClick(e)}
      onMouseLeave={() => setClicked(false)}
      onMouseUp={() => setClicked(false)}
    ><h3 className={`key-text ${(isClicked || isPressed) ? "active" : ""}`}>{props.keyboard.toUpperCase()}</h3></li>
  );
}

export default Key;
