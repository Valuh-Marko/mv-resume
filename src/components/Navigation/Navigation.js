import React from "react";
import "./navigation.scss";

export default function Navigation({ pageNum }) {
  return (
    <div className="navigation">
      <h1 className="main_page_num">{pageNum}</h1>
    </div>
  );
}
