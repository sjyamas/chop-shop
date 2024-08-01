import { memo } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaTrashAlt,
} from "react-icons/fa";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import lightsStore from "Helpers/lightsStore";

const SetLight = memo(function SetLight({
  row,
  col,
  y,
  x,
  color,
  arrow,
  flashing,
  on,
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

  return (
    <div
      style={{
        display: "inline-flex",
        padding: "1rem",
        height: "auto",
        width: "auto",
        gap: "0.2rem",
        backgroundColor: "pink",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <button
          style={{
            ...aspectStyle,
            borderColor: color === "red" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "color", "red");
          }}
        >
          <div
            style={{
              ...circleStyle,
              backgroundColor: "red",
            }}
          />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: color === "yellow" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "color", "yellow");
          }}
        >
          <div
            style={{
              ...circleStyle,
              backgroundColor: "yellow",
            }}
          />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: color === "green" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "color", "green");
          }}
        >
          <div
            style={{
              ...circleStyle,
              backgroundColor: "green",
            }}
          />
        </button>
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
              backgroundColor: "white",
            }}
          />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <button
          style={{
            ...aspectStyle,
            borderColor: arrow === "solid" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "arrow", "solid");
          }}
        >
          <div
            style={{
              ...circleStyle,
              backgroundColor: "white",
            }}
          />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: arrow === "left" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "arrow", "left");
          }}
        >
          <FaArrowLeft color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: arrow === "right" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "arrow", "right");
          }}
        >
          <FaArrowRight color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: arrow === "up" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "arrow", "up");
          }}
        >
          <FaArrowUp color="white" size={iconSize} />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <button
          style={{
            ...aspectStyle,
            borderColor: flashing === "solid" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "flashing", "solid");
          }}
        >
          <div
            style={{
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: flashing === "true" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "flashing", "true");
          }}
        >
          <HiLightBulb color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
            borderColor: flashing === "alt" ? "white" : "black",
          }}
          onClick={() => {
            updateLight(row, col, x, y, "flashing", "alt");
          }}
        >
          <HiOutlineLightBulb color="white" size={iconSize} />
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
    </div>
  );
});

export default SetLight;
