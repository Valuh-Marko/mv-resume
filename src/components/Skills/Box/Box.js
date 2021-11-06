import React from "react";
import cssImg from "../../../images/CssSVG.svg";
import htmlImg from "../../../images/HTMLSVG.svg";
import reactImg from "../../../images/ReactSVG.svg";
import typeScripImg from "../../../images/TypeScriptSVG.svg";
import { motion } from "framer-motion";
// styles
import "./box.scss";

const container = {
  hover: { scale: 1.55, transition: 0.3 },
};

const react = {
  hover: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const item = {
  hover: {
    scale: [1, 1.2, 1],
  },
};

let images = { cssImg, htmlImg, reactImg, typeScripImg };
let checker = false;

export const Box = ({ index }) => {
  if ((index === 4) | (index === 5) | (index === 6) | (index === 7)) {
    checker = true;
  }

  let indexChecker = (index) => {
    switch (index) {
      case 4:
        return (
          <motion.img
            alt=""
            variants={react}
            src={images.reactImg}
            className="box_img react"
          />
        );

      case 5:
        return (
          <motion.img
            alt=""
            variants={item}
            src={images.cssImg}
            className="box_img css"
          />
        );

      case 6:
        return (
          <motion.img
            alt=""
            variants={item}
            src={images.typeScripImg}
            className="box_img ts"
          />
        );

      case 7:
        return (
          <motion.img
            alt=""
            variants={item}
            src={images.htmlImg}
            className="box_img html"
          />
        );

      default:
        break;
    }
  };

  return (
    <motion.div
      whileHover="hover"
      variants={container}
      className="box"
      id={`box${index}`}>
      {checker ? indexChecker(index) : null}
    </motion.div>
  );
};
