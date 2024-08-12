/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Vector6 } from "../../icons/Vector6";
import "./style.css";

export const Frame = ({
  property1,
  text = "01",
  icon = <Vector6 className="vector-14" color="#FAFAFA" />,
  text1 = "SEO Management_",
  group = "https://c.animaapp.com/VZNw3juI/img/group-7.png",
}) => {
  return (
    <div className={`frame property-1-2-${property1}`}>
      <div className="element">{text}</div>
      <div className="div-2">
        <div className="content">
          <div className="div-3">
            {property1 === "variant-2" && <>{icon}</>}

            {property1 === "default" && <Vector6 className="vector-14" color="#FAFAFA" />}

            <div className="SEO-management">{text1}</div>
            <p className="p">Pick a plan and load up as many requests as you would like.</p>
          </div>
        </div>
        {property1 === "variant-2" && <div className="text-wrapper-4">_ Learn More _</div>}
      </div>
      {property1 === "variant-2" && <img className="group" alt="Group" src={group} />}
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  group: PropTypes.string,
};
