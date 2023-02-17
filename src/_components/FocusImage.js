import React from "react";
import "./FocusImage.scss";

export function FocusImage({ modal, tempImgSrc, setModal }) {
  return <div className={modal ? "model open" : "model"}>
    <img src={tempImgSrc} alt="Focus" />
    <i
      className="fas fa-times"
      onClick={() => setModal(false)}
    ></i>
  </div>;
}
