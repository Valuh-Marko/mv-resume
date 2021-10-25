import React from "react";
import useTraverse from "../../useTraverse";

export default function Home() {
  useTraverse("wheel");
  return (
    <div className="home">
      <h2>This is Home</h2>
    </div>
  );
}
