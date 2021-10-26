import React from "react";
import useTraverse from "../../useTraverse";
import useLoop from "../../useLoop";

export default function Skills() {
  useTraverse("wheel");

  // const loopThrough = (index, lenght, element) => {
  //   for(let i = index; i <= lenght; i++) {

  //   }
  // }

  return (
    <div className="container">
      <div className="skills_content">
        <div className="skills_text_container"></div>
        <div className="box_backdrop_conta">
          {useLoop(1, 10, <div>About</div>)}
        </div>
      </div>
    </div>
  );
}
