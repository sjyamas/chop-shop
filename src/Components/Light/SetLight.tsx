import { memo } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaTrashAlt,
  FaBicycle,
} from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import {
  PiArrowULeftDownBold,
  PiArrowUpLeftBold,
  PiArrowUpRightBold,
} from "react-icons/pi";

import lightsStore from "Helpers/lightsStore";
import OptionButton from "./OptionButton";

const SetLight = memo(function SetLight({
  row,
  col,
  y,
  x,
  color,
  shape,
  size = 12,
  flashing,
  on,
  animate = false,
  enabled = true,
}: any) {
  console.log("setLight");

  const updateLight = lightsStore((state) => state.updateLight);
  const removeLight = lightsStore((state) => state.removeLight);

  let iconSize = "16px";

  const aspectStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: 0,
    padding: 0,
    cursor: "pointer",
    height: "3rem",
    width: "3rem",
    backgroundColor: "black",
    borderWidth: "0.5rem",
    borderStyle: "solid",
  };

  const circleStyle = {
    height: "1.5rem",
    width: "1.5rem",
    borderRadius: "50%",
  };

  function handleChange(key, value) {
    updateLight(row, col, x, y, key, value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0.25rem",
        height: "auto",
        width: "auto",
        // border: "solid 0.5rem black",
        // backgroundColor: "grey",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          style={{
            ...aspectStyle,
            borderColor: on ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "on", on ? false : true);
          }}
        >
          <div
            style={{
              ...circleStyle,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <span>{on ? "ON" : "OFF"} </span>
          </div>
        </button>
        <OptionButton
          init={size}
          options={[
            null,
            { value: 10, display: <span>10</span> },
            null,
            null,
            { value: 12, display: <span>12</span> },
            null,
            null,
            { value: 8, display: <span>8</span> },
            null,
          ]}
          funcKey="size"
          setFunc={handleChange}
        />
        <button
          style={{
            ...aspectStyle,
            borderColor: animate ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "animate", animate ? false : true);
          }}
        >
          <span style={{ color: "white" }}>
            <MdAnimation />
          </span>
        </button>
        <button
          style={{
            ...aspectStyle,
          }}
          onClick={() => {
            removeLight(row, col, x, y);
          }}
          disabled={!enabled}
        >
          <FaTrashAlt color="white" size={iconSize} />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <OptionButton
            init={color}
            options={[
              null,
              {
                value: "red",
                display: (
                  <div style={{ ...circleStyle, backgroundColor: "red" }} />
                ),
              },
              null,
              null,
              {
                value: "yellow",
                display: (
                  <div style={{ ...circleStyle, backgroundColor: "yellow" }} />
                ),
              },
              null,
              null,
              {
                value: "green",
                display: (
                  <div style={{ ...circleStyle, backgroundColor: "green" }} />
                ),
              },
              null,
            ]}
            funcKey="color"
            setFunc={handleChange}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <OptionButton
            init={shape}
            options={[
              {
                value: "upLeft",
                display: <PiArrowUpLeftBold size={iconSize} />,
              },
              { value: "up", display: <FaArrowUp size={iconSize} /> },
              {
                value: "upRight",
                display: <PiArrowUpRightBold size={iconSize} />,
              },
              { value: "left", display: <FaArrowLeft size={iconSize} /> },
              {
                value: "solid",
                display: (
                  <div style={{ ...circleStyle, backgroundColor: "white" }} />
                ),
              },
              { value: "right", display: <FaArrowRight size={iconSize} /> },
              null,
              {
                value: "uTurn",
                display: <PiArrowULeftDownBold size={iconSize} />,
              },
            ]}
            funcKey="shape"
            setFunc={handleChange}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <OptionButton
            init={flashing}
            options={[
              null,
              { value: "flashing", display: <HiLightBulb size={iconSize} /> },
              null,
              null,
              {
                value: "solid",
                display: (
                  <div style={{ ...circleStyle, backgroundColor: "white" }} />
                ),
              },
              null,
              null,
              { value: "alt", display: <HiOutlineLightBulb size={iconSize} /> },
              null,
            ]}
            funcKey="flashing"
            setFunc={handleChange}
          />
        </div>
      </div>
    </div>
  );
});

export default SetLight;
