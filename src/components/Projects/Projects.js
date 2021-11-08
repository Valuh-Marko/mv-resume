import React, { useState } from "react";
import useTraverse from "../../useTraverse";
import "./projects.scss";

// Images Import
import Bookmark from "../../images/Bookmark.svg";
import CalendarBlank from "../../images/CalendarBlank.svg";
import CreditCard from "../../images/CreditCard.svg";
import PaperPlaneRight from "../../images/PaperPlaneRight.svg";
import { SoloProject } from "./SoloProject/SoloProject";
import { DeviceNav } from "./DeviceNav";
import { motion } from "framer-motion";

// Framer Motion Animation Variants
const pictureContainer = {
  hidden: {
    y: "150%",
  },
  show: {
    y: 0,
    transition: {
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

export default function Projects() {
  const [project, setProject] = useState("movie_router");
  const [device, setDevice] = useState("laptop");

  const projectHandler = (e) => {
    if (e.target.id) {
      setProject(e.target.id);
    }
  };

  const setDeviceHandler = (e) => {
    console.log(e.target.id);
    if (e.target.id) {
      setDevice(e.target.id);
    }
  };

  const images = {
    Bookmark,
    CalendarBlank,
    CreditCard,
    PaperPlaneRight,
  };

  useTraverse("wheel");
  useTraverse("keydown");

  return (
    <div className="container">
      <div className="projects_content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="projects_text_container">
          <motion.h2 variants={item} className="projects_title">
            Projects
          </motion.h2>
          <motion.p variants={item} className="projects_subtitle">
            Some of the things I’ve been working on during my proffesional
            career in the industry
          </motion.p>
          <motion.a
            variants={container}
            whileHover={{ scale: 1.1 }}
            className={
              project === "movie_router"
                ? "active_project project_link"
                : "project_link not_active_project"
            }
            id="movie_router"
            onClick={projectHandler}>
            <motion.img
              variants={item}
              src={images.PaperPlaneRight}
              alt="movie_router"
              className="icon"
            />{" "}
            Movie Router
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            variants={container}
            className={
              project === "expense_tracker"
                ? "active_project project_link"
                : "project_link not_active_project"
            }
            id="expense_tracker"
            onClick={projectHandler}>
            <motion.img
              variants={item}
              src={images.CreditCard}
              alt="expense_tracker"
              className="icon"
            />{" "}
            Expense Tracker
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            variants={container}
            className={
              project === "todo_list"
                ? "active_project project_link"
                : "project_link not_active_project"
            }
            id="todo_list"
            onClick={projectHandler}>
            <motion.img
              variants={item}
              src={images.CalendarBlank}
              alt="todo_list"
              className="icon"
            />{" "}
            Todo List
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            variants={container}
            className={
              project === "seat_booking"
                ? "active_project project_link"
                : "project_link not_active_project"
            }
            id="seat_booking"
            onClick={projectHandler}>
            <motion.img
              variants={item}
              src={images.Bookmark}
              alt="seat_booking"
              className="icon"
            />{" "}
            Seat Booking
          </motion.a>
        </motion.div>
        <motion.div
          variants={pictureContainer}
          initial="hidden"
          animate="show"
          exit="exit"
          className="projects_images_container">
          <SoloProject project={project} device={device} />
        </motion.div>
        <DeviceNav device={device} setDeviceHandler={setDeviceHandler} />
      </div>
    </div>
  );
}
