/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  frameClassName,
  frame = "https://c.animaapp.com/VZNw3juI/img/frame-869.svg",
  frameClassNameOverride,
  divClassName,
  imgClassName,
  img = "https://c.animaapp.com/VZNw3juI/img/frame-870.svg",
  frame1 = "https://c.animaapp.com/VZNw3juI/img/frame-869-2.svg",
  frame2 = "https://c.animaapp.com/VZNw3juI/img/frame-870-2.svg",
  frame3 = "https://c.animaapp.com/VZNw3juI/img/frame-869-3.svg",
  text = "Let’s Talk Now",
  frame4 = "https://c.animaapp.com/VZNw3juI/img/frame-870-3.svg",
}) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <img
        className={`frame-4 ${frameClassName}`}
        alt="Frame"
        src={property1 === "default" ? frame : property1 === "variant-4" ? frame3 : frame1}
      />
      <div className={`frame-5 property-1-0-${property1} ${frameClassNameOverride}`}>
        <div className={`let-s-talk-now-2 ${divClassName}`}>{text}</div>
      </div>
      <img
        className={`frame-6 ${imgClassName}`}
        alt="Frame"
        src={property1 === "default" ? img : property1 === "variant-4" ? frame4 : frame2}
      />
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["black", "normal", "variant-4", "default"]),
  frame: PropTypes.string,
  img: PropTypes.string,
  frame1: PropTypes.string,
  frame2: PropTypes.string,
  frame3: PropTypes.string,
  text: PropTypes.string,
  frame4: PropTypes.string,
};
