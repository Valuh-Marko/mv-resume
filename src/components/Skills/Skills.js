import React from "react";
import useTraverse from "../../useTraverse";
import useLoop from "../../useLoop";
import { Box } from "./Box/Box";
import { animate, motion } from "framer-motion";

import "./skills.scss";

const container = {
  hidden: { x: "-150%" },
  show: {
    x: 0,
    transition: {
      staggerChildren: 0.18,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-150%",
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

export default function Skills() {
  useTraverse("wheel");
  const boxes = useLoop(1, 12, <Box />);

  // Array of random Numbers
  let randNumber = [];
  boxes.forEach(() => {
    let number = Math.random();
    randNumber.push(number);
  });

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
        <div className="box_backdrop_container">
          {boxes.map((box, index) => {
            return (
              <div className="box_wrapper" id={`box${index}`} key={index}>
                <Box index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
