/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buuton = ({
  property1,
  className,
  frame = "https://c.animaapp.com/VZNw3juI/img/frame-869-13.svg",
  text = "Let’s Talk Now",
  img = "https://c.animaapp.com/VZNw3juI/img/frame-870-13.svg",
  divClassName,
}) => {
  return (
    <div className={`buuton ${className}`}>
      <img
        className="img"
        alt="Frame"
        src={
          property1 === "default"
            ? "https://c.animaapp.com/VZNw3juI/img/frame-869-6.svg"
            : property1 === "variant-4"
            ? "https://c.animaapp.com/VZNw3juI/img/frame-869-9.svg"
            : frame
        }
      />
      <div className={`let-s-talk-now-wrapper ${property1}`}>
        <div className={`let-s-talk-now ${divClassName}`}>{text}</div>
      </div>
      <img
        className="frame-2"
        alt="Frame"
        src={
          property1 === "default"
            ? "https://c.animaapp.com/VZNw3juI/img/frame-870-6.svg"
            : property1 === "variant-4"
            ? "https://c.animaapp.com/VZNw3juI/img/frame-870-9.svg"
            : img
        }
      />
    </div>
  );
};

Buuton.propTypes = {
  property1: PropTypes.oneOf(["black", "normal", "variant-4", "default"]),
  frame: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};
