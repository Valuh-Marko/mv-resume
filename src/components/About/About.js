import React from "react";
import useTraverse from "../../useTraverse";
import { motion } from "framer-motion";
import "./about.scss";

const left = {
  hidden: {
    opacity: 0,
    x: "-150%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

const right = {
  hidden: {
    opacity: 0,
    x: "150%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

export default function About() {
  useTraverse("wheel");
  useTraverse("keydown");
  return (
    <div className="about_content_wrapper">
      <div className="about_content">
        <motion.h4
          className="about_text"
          variants={left}
          initial="hidden"
          animate="show"
          exit="exit">
          I’m a Front-End developer who cares deeply about user experience.
          Striving for simplicity, elegance and a great challenge!
        </motion.h4>
        <motion.h2
          className="about_backdrop_text"
          variants={right}
          initial="hidden"
          animate="show"
          exit="exit">
          About me
        </motion.h2>
      </div>
    </div>
  );
}
