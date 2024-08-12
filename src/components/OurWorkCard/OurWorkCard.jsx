/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Buuton } from "../Buuton";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import "./style.css";

export const OurWorkCard = ({
  property1,
  className,
  image = "https://c.animaapp.com/VZNw3juI/img/image.png",
  frameClassName,
  divClassName,
  text = "Bebos Mobile Mechanic",
  propertyDefaultWrapperFrame = "https://c.animaapp.com/VZNw3juI/img/frame-870-9.svg",
  propertyDefaultWrapperImg = "https://c.animaapp.com/VZNw3juI/img/frame-869-9.svg",
  img = "https://c.animaapp.com/VZNw3juI/img/image-1.png",
  group = "https://c.animaapp.com/VZNw3juI/img/group-8.png",
  frameClassNameOverride,
  divClassNameOverride,
  text1 = "01",
  buutonFrame = "https://c.animaapp.com/VZNw3juI/img/frame-869-13.svg",
  buutonImg = "https://c.animaapp.com/VZNw3juI/img/frame-870-13.svg",
}) => {
  return (
    <div className={`our-work-card ${className}`}>
      <div className="frame-11">
        <div className="frame-12">
          <div className="rectangle" />
          <div className="rectangle-2" />
        </div>
        <div className="frame-13">
          <div className="rectangle-2" />
          <div className="rectangle" />
        </div>
        <div className="image">
          <img className="image-2" alt="Image" src={property1 === "hover" ? img : image} />
        </div>
      </div>
      <div className={`frame-14 property-1-0-${property1}`}>
        {property1 === "normal" && (
          <div className={`frame-15 ${frameClassName}`}>
            <div className="frame-16">
              <div className={`element-2 ${divClassName}`}>{text1}</div>
              <div className="frame-17">
                <div className="bebos-mobile">{text}</div>
                <p className="text-wrapper-8">Our no-meetings approach maximizes quality and efficiency.</p>
              </div>
            </div>
            <PropertyDefaultWrapper
              className="instance-node"
              divClassName="buuton-3"
              frame3={propertyDefaultWrapperImg}
              frame4={propertyDefaultWrapperFrame}
              frameClassName="buuton-2"
              imgClassName="buuton-4"
              property1="variant-4"
              text="View Full Case Study"
            />
          </div>
        )}

        {property1 === "hover" && (
          <>
            <img className="group-7" alt="Group" src={group} />
            <div className={`frame-18 ${frameClassNameOverride}`}>
              <div className="frame-16">
                <div className={`element-2 ${divClassNameOverride}`}>{text1}</div>
                <div className="frame-17">
                  <div className="bebos-mobile">{text}</div>
                  <p className="text-wrapper-8">Our no-meetings approach maximizes quality and efficiency.</p>
                </div>
              </div>
              <Buuton
                className="instance-node"
                divClassName="buuton-5"
                frame={buutonFrame}
                img={buutonImg}
                property1="black"
                text="View Full Case Study"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

OurWorkCard.propTypes = {
  property1: PropTypes.oneOf(["hover", "normal"]),
  image: PropTypes.string,
  text: PropTypes.string,
  propertyDefaultWrapperFrame: PropTypes.string,
  propertyDefaultWrapperImg: PropTypes.string,
  img: PropTypes.string,
  group: PropTypes.string,
  text1: PropTypes.string,
  buutonFrame: PropTypes.string,
  buutonImg: PropTypes.string,
};
