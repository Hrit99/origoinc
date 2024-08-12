/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ButtonNormalWrapper = ({
  button,
  className,
  frameClassName,
  divClassName,
  text = "Let’s Talk Now",
  vectorClassName,
  vector = "https://c.animaapp.com/VZNw3juI/img/vector-1-4.svg",
  vectorClassNameOverride,
  img = "https://c.animaapp.com/VZNw3juI/img/vector-2-5.svg",
  imgClassName,
  vector1 = "https://c.animaapp.com/VZNw3juI/img/vector-3-5.svg",
  vector2 = "https://c.animaapp.com/VZNw3juI/img/vector-4-6.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    button: button || "normal",
  });

  return (
    <div
      className={`button-normal-wrapper ${state.button} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["button-3", "hover", "normal"].includes(state.button) && (
        <>
          <div className={`frame-7 ${frameClassName}`}>
            <div className={`text-wrapper-3 ${divClassName}`}>{text}</div>
          </div>
          <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
          <img className={`vector-2 ${vectorClassNameOverride}`} alt="Vector" src={img} />
          <img className={`vector-3 ${imgClassName}`} alt="Vector" src={vector1} />
          <img className="vector-4" alt="Vector" src={vector2} />
        </>
      )}

      {state.button === "group-1" && (
        <div className="overlap-group-2">
          <div className="frame-8">
            <div className="text-wrapper-3">Menu</div>
          </div>
          <img className="vector-5" alt="Vector" src="https://c.animaapp.com/VZNw3juI/img/vector-1-4.svg" />
          <img className="vector-6" alt="Vector" src="https://c.animaapp.com/VZNw3juI/img/vector-2-5.svg" />
          <img className="vector-7" alt="Vector" src="https://c.animaapp.com/VZNw3juI/img/vector-3-5.svg" />
          <img className="vector-8" alt="Vector" src="https://c.animaapp.com/VZNw3juI/img/vector-4-6.svg" />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        button: "hover",
      };
  }

  return state;
}

ButtonNormalWrapper.propTypes = {
  button: PropTypes.oneOf(["button-3", "hover", "group-1", "normal"]),
  text: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
};
