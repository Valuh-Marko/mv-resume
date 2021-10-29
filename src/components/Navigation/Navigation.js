import React from "react";
import "./navigation.scss";

export default function Navigation({ pageNum }) {
  return (
    <div className="navigation">
      <h1>{pageNum}</h1>
    </div>
  );
}
