/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavIteam = ({ state, className, frameClassName, divClassName, text = "Home" }) => {
  return (
    <div className={`nav-iteam ${state} ${className}`}>
      <div className={`div ${frameClassName}`}>
        {state === "active" && <div className={`home ${divClassName}`}>{text}</div>}

        {state === "idle" && <>{text}</>}
      </div>
    </div>
  );
};

NavIteam.propTypes = {
  state: PropTypes.oneOf(["active", "idle"]),
  text: PropTypes.string,
};
