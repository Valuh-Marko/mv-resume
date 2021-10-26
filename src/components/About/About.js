import React from "react";
import useTraverse from "../../useTraverse";
import "./about.scss";

export default function About() {
  useTraverse("wheel");
  return (
    <div className="container">
      <div className="about_content">
        <h3 className="about_text">
          I’m a Front-End developer who cares deeply user experience. Striving
          for simplicity, elegance and a great challenge!
        </h3>
        <h2 className="about_backdrop_text">About me</h2>
      </div>
    </div>
  );
}
