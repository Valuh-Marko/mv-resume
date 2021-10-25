import React from "react";
import useTraverse from "../../useTraverse";

export default function About() {
  useTraverse("wheel");
  return (
    <div className="home">
      <h1>THis is About</h1>
    </div>
  );
}
