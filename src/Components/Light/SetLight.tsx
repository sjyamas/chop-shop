import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaTrashAlt,
} from "react-icons/fa";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import lightsStore from "Helpers/lightsStore";

export default function SetLight({ coords, color, arrow, flashing, on }) {
  let iconSize = "16px";
  const cycle = lightsStore((state) => state.cycle);
  const editStage = lightsStore((state) => state.editStage);

  const updateLight = lightsStore((state) => state.updateLight);
  const removeLight = lightsStore((state) => state.removeLight);
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "color",
              "red"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "color",
              "yellow"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "color",
              "green"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "on",
              on ? false : true
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "arrow",
              "solid"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "arrow",
              "left"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "arrow",
              "right"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "arrow",
              "up"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "flashing",
              "solid"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "flashing",
              "true"
            );
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
            updateLight(
              coords[1],
              coords[0],
              coords[3],
              coords[2],
              "flashing",
              "alt"
            );
          }}
        >
          <HiOutlineLightBulb color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
          }}
          onClick={() => {
            removeLight(coords[1], coords[0], coords[3], coords[2]);
          }}
          disabled={!(editStage === 0 && cycle.length === 1)}
        >
          <FaTrashAlt color="white" size={iconSize} />
        </button>
      </div>
    </div>
  );
}
