/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Vector6 } from "../../icons/Vector6";
import { ButtonNormalWrapper } from "../ButtonNormalWrapper";
import "./style.css";

export const CallToAction = ({
  buttonNormalWrapperVector = "https://c.animaapp.com/VZNw3juI/img/vector-2-1.svg",
  buttonNormalWrapperImg = "https://c.animaapp.com/VZNw3juI/img/vector-1.svg",
  buttonNormalWrapperVector1 = "https://c.animaapp.com/VZNw3juI/img/vector-3-1.svg",
}) => {
  return (
    <div className="call-to-action">
      <div className="text-wrapper-5">Marketing Services</div>
      <div className="frame-9">
        <Vector6 className="vector-6-instance" color="#0B0A0A" />
        <div className="frame-10">
          <div className="text-wrapper-6">GET STARTED-</div>
          <p className="text-wrapper-7">Let us help you bring your vision to life.</p>
        </div>
      </div>
      <ButtonNormalWrapper
        button="button-3"
        className="buuton-instance"
        divClassName="group-3"
        frameClassName="group-2"
        img={buttonNormalWrapperVector}
        imgClassName="group-6"
        text="Explore All"
        vector={buttonNormalWrapperImg}
        vector1={buttonNormalWrapperVector1}
        vector2="https://c.animaapp.com/VZNw3juI/img/vector-4.svg"
        vectorClassName="group-4"
        vectorClassNameOverride="group-5"
      />
    </div>
  );
};

CallToAction.propTypes = {
  buttonNormalWrapperVector: PropTypes.string,
  buttonNormalWrapperImg: PropTypes.string,
  buttonNormalWrapperVector1: PropTypes.string,
};
