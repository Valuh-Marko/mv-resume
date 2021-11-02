import React from "react";
import laptopSVG from "../../images/laptopSVG.svg";
import tabletSVG from "../../images/tabletSVG.svg";
import phoneSVG from "../../images/phoneSVG.svg";

export const DeviceNav = ({ device, setDeviceHandler }) => {
  return (
    <div className="devices_nav">
      <div
        className={
          device === "laptop"
            ? "active_device device laptop_icon"
            : "device laptop_icon not_active_device"
        }>
        <input
          type="image"
          src={laptopSVG}
          id="laptop"
          onClick={setDeviceHandler}></input>
      </div>
      <div
        className={
          device === "phone"
            ? "active_device device phone_icon"
            : "device phone_icon not_active_device"
        }>
        <input
          type="image"
          src={phoneSVG}
          id="phone"
          onClick={setDeviceHandler}></input>
      </div>
      <div
        className={
          device === "tablet"
            ? "active_device device tablet_icon"
            : "device tablet_icon not_active_device"
        }>
        <input
          type="image"
          src={tabletSVG}
          id="tablet"
          onClick={setDeviceHandler}></input>
      </div>
    </div>
  );
};
