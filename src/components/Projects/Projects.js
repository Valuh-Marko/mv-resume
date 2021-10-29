import React, { useState } from "react";
import useTraverse from "../../useTraverse";
import "./projects.scss";

// Images Import
import Bookmark from "../../images/Bookmark.svg";
import CalendarBlank from "../../images/CalendarBlank.svg";
import CreditCard from "../../images/CreditCard.svg";
import PaperPlaneRight from "../../images/PaperPlaneRight.svg";
import { SoloProject } from "./SoloProject/SoloProject";

export default function Projects() {
  const [project, setProject] = useState("movie_router");

  const projectHandler = (e) => {
    if (e.target.id) {
      setProject(e.target.id);
    }
  };

  const images = {
    Bookmark,
    CalendarBlank,
    CreditCard,
    PaperPlaneRight,
  };
  useTraverse("wheel");
  return (
    <div className="container">
      <div className="projects_content">
        <div className="projects_text_container">
          <h2 className="projects_title">Projects</h2>
          <p className="projects_subtitle">
            Some of the things I’ve been working on during my proffesional
            career in the industry
          </p>
          <a
            className={
              project == "movie_router"
                ? "active_project project_link"
                : "project_link"
            }
            id="movie_router"
            onClick={projectHandler}>
            <img src={images.PaperPlaneRight} alt="" /> Movie Router
          </a>
          <a
            className={
              project == "expense_tracker"
                ? "active_project project_link"
                : "project_link"
            }
            id="expense_tracker"
            onClick={projectHandler}>
            <img src={images.CreditCard} alt="" /> Expense Tracker
          </a>
          <a
            className={
              project == "todo_list"
                ? "active_project project_link"
                : "project_link"
            }
            id="todo_list"
            onClick={projectHandler}>
            <img src={images.CalendarBlank} alt="" /> Todo List
          </a>
          <a
            className={
              project == "seat_booking"
                ? "active_project project_link"
                : "project_link"
            }
            id="seat_booking"
            onClick={projectHandler}>
            <img src={images.Bookmark} alt="" /> Seat Booking
          </a>
        </div>
        <div className="projects_images_container">
          <SoloProject project={project} />
        </div>
      </div>
    </div>
  );
}
