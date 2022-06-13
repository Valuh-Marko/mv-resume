import React, { useEffect, useState } from "react";
import useTraverse from "../../useTraverse";
import image from "../../images/name.png";
import arrowImg from "../../images/arrow.svg"
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

const controls = {
  hidden: {
    x: '-100%',
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
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
}

export default function Home() {
  const name = image;
  const arrow = arrowImg;
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
      console.log(showNav);
    }, 1500);
  },[]);

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
        {showNav &&
            <div className="show_navigation_help_wrapper">
              <motion.h5
              className="show_navigation_help"
              variants={controls}
              initial="hidden"
              animate="show"
              exit="exit">
                <img src={arrow} alt="" className="arrow_left" />
                <img src={arrow} alt="" className="arrow_top" />
                <img src={arrow} alt="" className="arrow_down" />
                <img src={arrow} alt="" className="arrow_right" />
                <span className="navigation_text">Use arrow keys to traverse the website</span>
              </motion.h5>
            </div>
        }
      </div>
    </div>
  );
}
