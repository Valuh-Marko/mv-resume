import React, { useState } from "react";
import "./soloProject.scss";

// images import
import laptop from "../../../images/laptop.png";
import iphone from "../../../images/iphone.svg";
import ipad from "../../../images/ipad.svg";

import imageHolder from "../../../imageHolder";

export const SoloProject = ({ project }) => {
  const images = { laptop, iphone, ipad };
  const [device, setDevice] = useState("laptop");

  // Display Logic
  const displayProject = (project) => {
    switch (project) {
      case "movie_router":
        return displayDevice(device, project);

      case "expense_tracker":
        return displayDevice(device, project);

      case "todo_list":
        return displayDevice(device, project);

      case "seat_booking":
        return displayDevice(device, project);

      default:
        break;
    }
  };

  const displayDevice = (device, sentProject) => {
    switch (device) {
      case "laptop":
        return <LapTop displayProject={sentProject} />;

      case "iphone":
        return <Iphone displayProject={sentProject} />;

      case "ipad":
        return <Ipad displayProject={sentProject} />;

      default:
        break;
    }
  };
  // Display Logic - END

  // Devices
  const LapTop = ({ displayProject }) => {
    return (
      <div className="device_container laptop">
        {displayProject === "movie_router" ? (
          <img className="project_img" src={imageHolder.movieRouter.mrD} />
        ) : null}
        {displayProject === "expense_tracker" ? (
          <img className="project_img" src={imageHolder.expenseTracker.etD} />
        ) : null}
        {displayProject === "todo_list" ? (
          <img className="project_img" src={imageHolder.todoList.tdD} />
        ) : null}
        {displayProject === "seat_booking" ? (
          <img className="project_img" src={imageHolder.seatBooking.sbD} />
        ) : null}
        <img id="laptop" src={images.laptop} alt="" />
      </div>
    );
  };

  const Iphone = ({ displayProject }) => {
    return (
      <div className="device_container iphone">
        {displayProject === "movie_router" ? (
          <img className="project_img" src={imageHolder.movieRouter.mrP} />
        ) : null}
        {displayProject === "expense_tracker" ? (
          <img className="project_img" src={imageHolder.expenseTracker.etP} />
        ) : null}
        {displayProject === "todo_list" ? (
          <img className="project_img" src={imageHolder.todoList.tdP} />
        ) : null}
        {displayProject === "seat_booking" ? (
          <img className="project_img" src={imageHolder.seatBooking.sbP} />
        ) : null}
        <img id="iphone" src={images.iphone} alt="" />
      </div>
    );
  };

  const Ipad = ({ displayProject }) => {
    return (
      <div className="device_container ipad">
        {displayProject === "movie_router" ? (
          <img className="project_img" src={imageHolder.movieRouter.mrT} />
        ) : null}
        {displayProject === "expense_tracker" ? (
          <img className="project_img" src={imageHolder.expenseTracker.etT} />
        ) : null}
        {displayProject === "todo_list" ? (
          <img className="project_img" src={imageHolder.todoList.tdT} />
        ) : null}
        {displayProject === "seat_booking" ? (
          <img className="project_img" src={imageHolder.seatBooking.sbT} />
        ) : null}
        <img id="ipad" src={images.ipad} alt="" />
      </div>
    );
  };
  // Devices - END

  const DevicesNav = () => {
    return (
      <div className="devices_nav">
        <a href="#" className="device laptop_nav"></a>
        <a href="#" className="device prone_nav"></a>
        <a href="#" className="device tablet_nav"></a>
      </div>
    );
  };

  // Component Return
  return (
    <div className="solo_project">
      <h1>{displayProject(project)}</h1>
    </div>
  );
};
