import React from "react";
import useTraverse from "../../useTraverse";

export default function Skills() {
  useTraverse("wheel");
  return (
    <div className="overlay">
      <h1>This is Skill</h1>
    </div>
  );
}
