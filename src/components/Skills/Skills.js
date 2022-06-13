import React from "react";
import useTraverse from "../../useTraverse";
import { Box } from "./Box/Box";
import { motion } from "framer-motion";

import "./skills.scss";
import useEventListener from "../../useEventListener";

const container = {
  hidden: { x: "-150%" },
  show: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut",
      damping: 10,
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

const item = {
  hidden: { x: "-150%" },
  show: { x: 0 },
};

const boxContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const box = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Skills() {
  
  useTraverse("keydown");
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="container">
      <div className="skills_content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="skills_text_container">
          <motion.h2 variants={item} className="skills_title">
            Skills
          </motion.h2>
          <motion.p variants={item} className="skills_subtitle">
            I use some of the most popuar libraries and frameworks to make your
            ideas come to life!
          </motion.p>
          <motion.ul variants={container}>
            <motion.li variants={item}>
              1.5 Years of proffesional experience
            </motion.li>
            <motion.li variants={item}>Proficient with ReactJS</motion.li>
            <motion.li variants={item}>
              Highly experienced with HTML, CSS and JS
            </motion.li>
            <motion.li variants={item}>Long history in web design</motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          variants={boxContainer}
          initial="hidden"
          animate="show"
          exit="exit"
          className="box_backdrop_container">
          {array.map((index) => {
            return (
              <motion.div
                variants={box}
                whileHover={{
                  zIndex: 30,
                }}
                className="box_wrapper"
                id={`box${index}`}>
                <Box key={index} index={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
