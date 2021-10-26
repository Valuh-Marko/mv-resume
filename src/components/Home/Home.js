import React from "react";
import useTraverse from "../../useTraverse";
import image from "../../images/name.png";
import "./home.scss";

export default function Home() {
  const name = image;
  useTraverse("wheel");
  return (
    <div className="container">
      <div className="home_content">
        <div className="home_img_wrapper">
          <img src={name} alt="" className="name" />
        </div>
        <div className="title_wrapper">
          <h2 className="title">Front-End Developer</h2>
        </div>
      </div>
    </div>
  );
}
