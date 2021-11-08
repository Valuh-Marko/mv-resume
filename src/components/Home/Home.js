import React from "react";
import useTraverse from "../../useTraverse";
import image from "../../images/name.png";
import { motion } from "framer-motion";

// Styles
import "./home.scss";

const item = {
  hidden: {
    y: 140,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.6,
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

export default function Home() {
  const name = image;
  useTraverse("wheel");
  useTraverse("keydown");
  return (
    <div className="container">
      <div className="home_content">
        <div className="home_img_wrapper">
          <motion.img
            src={name}
            alt=""
            className="name"
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
          />
        </div>
        <div className="title_wrapper">
          <motion.h2
            className="title"
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit">
            Front-End Developer
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
