import React from "react";
import useTraverse from "../../useTraverse";
// Tooltip Imports
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { motion, useMotionValue, useTransform } from "framer-motion";

import "./contact.scss";
// Icons
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

// Framer Motion Variants
const container = {
  hidden: { x: "-100vw" },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
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

const containerBackdrop = {
  hidden: { x: "150%", opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
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

export default function Contact() {
  // Tooltip Customization
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#454545",
      color: "#fafafa",
      maxWidth: 220,
      fontSize: 16,
      fontWeight: "500",
      padding: "10px 20px",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: "#454545",
    },
  }));

  // Framer Motion Paralax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 1080], [15, -15]);
  const rotateY = useTransform(x, [0, 1920], [-25, 25]);

  const moveX = useTransform(x, [0, 1920], [-35, 35]);
  const moveY = useTransform(x, [0, 1080], [25, -25]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  // Scrolling
  useTraverse("wheel");
  useTraverse("keydown");

  return (
    <div className="contact" onMouseMove={handleMouse}>
      <div className="container">
        <div className="contact_content">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="contact_text_container"
            style={{
              translateX: rotateX,
              translateY: rotateY,
            }}>
            <motion.h4 variants={item} className="contact_tagline">
              I do JS and CSS <br />
              so you don't have to!
            </motion.h4>
            <motion.p variants={item} className="contact_text">
              If you would like to see more you can check out my Github page.{" "}
              <br />
              Also, you can contact me via{" "}
              <CustomTooltip arrow title="mvaluh@gmail.com">
                <a href="mailto: mvaluh@gmail.com" className="mail">
                  Email
                </a>
              </CustomTooltip>
              , or any other social media below!
            </motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="contact_socials_container"
            style={{
              translateX: moveY,
              translateY: moveX,
            }}>
            <CustomTooltip arrow title="LinkedIn">
              <motion.a
                whileHover={{
                  scale: 1.1,
                }}
                target="_blank"
                href="https://www.linkedin.com/in/marko-valuh/"
                className="socials_link"
                id="linkedin">
                <FaLinkedin className="social_icon" />
              </motion.a>
            </CustomTooltip>
            <CustomTooltip arrow title="GitHub">
              <motion.a
                whileHover={{
                  scale: 1.1,
                }}
                target="_blank"
                href="https://github.com/Valuh-Marko"
                className="socials_link"
                id="github">
                <FaGithubSquare className="social_icon" />
              </motion.a>
            </CustomTooltip>
            <CustomTooltip arrow title="Phone: +381693361653">
              <motion.a
                whileHover={{
                  scale: 1.1,
                }}
                href="tel: +381693361653"
                className="socials_link"
                id="whatsapp">
                <FaWhatsappSquare className="social_icon" />
              </motion.a>
            </CustomTooltip>
          </motion.div>
          <motion.h2
            variants={containerBackdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            className="contact_backdrop_text"
            style={{
              translateX: rotateY,
              translateY: rotateX,
            }}>
            {" "}
            Contact
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
