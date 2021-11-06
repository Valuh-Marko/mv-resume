import React from "react";
import laptopSVG from "../../images/laptopSVG.svg";
import tabletSVG from "../../images/tabletSVG.svg";
import phoneSVG from "../../images/phoneSVG.svg";
import { motion } from "framer-motion";

// Framer Motion Variants
const container = {
  hidden: { x: 0, y: "-50%", opacity: 0 },
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

const item = {
  hidden: { opacity: 0, x: 0 },
  show: { opacity: 1 },
};

export const DeviceNav = ({ device, setDeviceHandler }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="devices_nav">
      <motion.div
        variants={item}
        className={
          device === "laptop"
            ? "active_device device laptop_icon"
            : "device laptop_icon not_active_device"
        }>
        <input
          type="image"
          src={laptopSVG}
          id="laptop"
          onClick={setDeviceHandler}></input>
      </motion.div>
      <motion.div
        variants={item}
        className={
          device === "phone"
            ? "active_device device phone_icon"
            : "device phone_icon not_active_device"
        }>
        <input
          type="image"
          src={phoneSVG}
          id="phone"
          onClick={setDeviceHandler}></input>
      </motion.div>
      <motion.div
        variants={item}
        className={
          device === "tablet"
            ? "active_device device tablet_icon"
            : "device tablet_icon not_active_device"
        }>
        <input
          type="image"
          src={tabletSVG}
          id="tablet"
          onClick={setDeviceHandler}></input>
      </motion.div>
    </motion.div>
  );
};
