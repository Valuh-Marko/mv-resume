import React from "react";
import cssImg from "../../../images/CssSVG.svg";
import htmlImg from "../../../images/HTMLSVG.svg";
import reactImg from "../../../images/ReactSVG.svg";
import typeScripImg from "../../../images/TypeScriptSVG.svg";

// styles
import "./box.scss";

export const Box = ({ index }) => {
  let images = { cssImg, htmlImg, reactImg, typeScripImg };
  let checker = false;
  if ((index === 4) | (index === 5) | (index === 6) | (index === 7)) {
    checker = true;
  }

  let indexChecker = (index) => {
    switch (index) {
      case 4:
        return <img alt="" src={images.reactImg} className="box_img react" />;

      case 5:
        return <img alt="" src={images.cssImg} className="box_img css" />;

      case 6:
        return <img alt="" src={images.typeScripImg} className="box_img ts" />;

      case 7:
        return <img alt="" src={images.htmlImg} className="box_img html" />;

      default:
        break;
    }
  };

  return <div className="box">{checker ? indexChecker(index) : null}</div>;
};
