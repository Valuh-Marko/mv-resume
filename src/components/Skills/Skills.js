import React from "react";
import useTraverse from "../../useTraverse";
import useLoop from "../../useLoop";
import { Box } from "./Box/Box";

import "./skills.scss";
import { useWindowDimensions } from "../../useWindowDimensions";

export default function Skills() {
  useTraverse("wheel");
  const boxes = useLoop(1, 12, <Box />);

  return (
    <div className="container">
      <div className="skills_content">
        <div className="skills_text_container">
          <h2 className="skills_title">Skills</h2>
          <p className="skills_subtitle">
            I use some of the most popuar libraries and frameworks to make your
            ideas come to life!
          </p>
          <ul>
            <li>1.5 Years of proffesional experience</li>
            <li>Proficient with ReactJS</li>
            <li>Highly experienced with HTML, CSS and JS</li>
            <li>Long history in web design</li>
          </ul>
        </div>
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
