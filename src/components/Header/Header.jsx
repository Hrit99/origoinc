/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Buuton } from "../Buuton";
import { NavIteam } from "../NavIteam";
import "./style.css";

export const Header = ({
  className,
  ellipse = "https://c.animaapp.com/VZNw3juI/img/ellipse-11.svg",
  img = "https://c.animaapp.com/VZNw3juI/img/ellipse-12.svg",
  ellipse1 = "https://c.animaapp.com/VZNw3juI/img/ellipse-14.svg",
  polygon = "https://c.animaapp.com/VZNw3juI/img/polygon-1.svg",
  subtract = "https://c.animaapp.com/VZNw3juI/img/subtract.svg",
  subtract1 = "https://c.animaapp.com/VZNw3juI/img/subtract-1.svg",
  buutonFrame = "https://c.animaapp.com/VZNw3juI/img/frame-869-13.svg",
  buutonImg = "https://c.animaapp.com/VZNw3juI/img/frame-870-13.svg",
}) => {
  return (
    <div className={`header ${className}`}>
      <div className="frame-3">
        <div className="LOGO">
          <div className="overlap-group">
            <img className="ellipse" alt="Ellipse" src={ellipse} />
            <img className="ellipse-2" alt="Ellipse" src={img} />
            <img className="ellipse-3" alt="Ellipse" src={ellipse1} />
            <img className="polygon" alt="Polygon" src={polygon} />
            <img className="subtract" alt="Subtract" src={subtract} />
            <img className="subtract-2" alt="Subtract" src={subtract1} />
          </div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">Origo Inc.</div>
        </div>
      </div>
      <div className="nav-menu">
        <NavIteam
          className="nav-iteam"
          divClassName="design-component-instance-node"
          frameClassName="nav-iteam-instance"
          state="active"
          text="Home"
        />
         <NavIteam
          className="nav-iteam"
          divClassName="design-component-instance-node"
          frameClassName="nav-iteam-instance"
          state="idle"
          text="About us"
        />
        <NavIteam
          className="design-component-instance-node-2"
          frameClassName="nav-iteam-2"
          state="idle"
          text="Marketing"
        />
        <NavIteam
          className="design-component-instance-node-2"
          frameClassName="nav-iteam-2"
          state="idle"
          text="Consulting"
        />
        <NavIteam
          className="design-component-instance-node-2"
          frameClassName="nav-iteam-2"
          state="idle"
          text="Portfolio"
        />
        <NavIteam className="design-component-instance-node-2" frameClassName="nav-iteam-2" state="idle" text="Blogs" />
      </div>
      <Buuton
        className="design-component-instance-node-2"
        frame={buutonFrame}
        img={buutonImg}
        property1="normal"
        text="Contact"
      />
    </div>
  );
};

Header.propTypes = {
  ellipse: PropTypes.string,
  img: PropTypes.string,
  ellipse1: PropTypes.string,
  polygon: PropTypes.string,
  subtract: PropTypes.string,
  subtract1: PropTypes.string,
  buutonFrame: PropTypes.string,
  buutonImg: PropTypes.string,
};
