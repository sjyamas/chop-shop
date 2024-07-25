import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaTrashAlt,
} from "react-icons/fa";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

export default function SetLight() {
  let iconSize = "16px";
  let data = {
    color: "red",
    arrow: "none",
    flashing: "alt",
  };

  const aspectStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: "0px",
    outline: 0,
    padding: 0,
    cursor: "pointer",
    height: "3rem",
    width: "3rem",
    backgroundColor: "black",
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
        borderWidth: "3px",
        borderColor: "red",
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
            borderColor: data.color === "red" ? "white" : "black",
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
          }}
        >
          <div
            style={{
              ...circleStyle,
              backgroundColor: "green",
            }}
          />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <button
          style={{
            ...aspectStyle,
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
          }}
        >
          <FaArrowLeft color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
          }}
        >
          <FaArrowRight color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
          }}
        >
          <FaArrowUp color="white" size={iconSize} />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <button
          style={{
            ...aspectStyle,
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
          }}
        >
          <HiLightBulb color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
          }}
        >
          <HiOutlineLightBulb color="white" size={iconSize} />
        </button>
        <button
          style={{
            ...aspectStyle,
          }}
        >
          <FaTrashAlt color="white" size={iconSize} />
        </button>
      </div>
    </div>
  );
}
