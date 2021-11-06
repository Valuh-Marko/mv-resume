import React from "react";
import "./soloProject.scss";

// images import
import laptop from "../../../images/laptop.png";
import iphone from "../../../images/phone.png";
import ipad from "../../../images/tablet.png";

import imageHolder from "../../../imageHolder";

export const SoloProject = React.memo(({ project, device }) => {
  const images = { laptop, iphone, ipad };

  // Display Logic
  const displayProject = (project, device) => {
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

      case "phone":
        return <Iphone displayProject={sentProject} />;

      case "tablet":
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
      <div className="device_container phone">
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
        <img id="phone" src={images.iphone} alt="" />
      </div>
    );
  };

  const Ipad = ({ displayProject }) => {
    return (
      <div className="device_container tablet">
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
        <img id="tablet" src={images.ipad} alt="" />
      </div>
    );
  };
  // Devices - END

  // Component Return
  return <div className="solo_project">{displayProject(project, device)}</div>;
});
