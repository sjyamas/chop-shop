import { memo } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
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

const SetDefaultLight = memo(function SetDefaultLight() {
  console.log("setLight");

  const updateDefaultLight = lightsStore((state) => state.updateDefaultLight);
  const defaultLight = lightsStore((state) => state.defaultLight);

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
    updateDefaultLight(key, value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: "auto",
        width: "auto",
        gap: "0.2rem",
        backgroundColor: "grey",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          style={{
            ...aspectStyle,
            borderColor: defaultLight.on ? "white" : "black",
          }}
          onClick={() => {
            updateDefaultLight("on", defaultLight.on ? false : true);
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
            <span>{defaultLight.on ? "ON" : "OFF"} </span>
          </div>
        </button>
        <OptionButton
          init={defaultLight.size}
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
            borderColor: defaultLight.animate ? "white" : "black",
          }}
          onClick={() => {
            updateDefaultLight("animate", defaultLight.animate ? false : true);
          }}
        >
          <span style={{ color: "white" }}>
            <MdAnimation />
          </span>
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <OptionButton
            init={defaultLight.color}
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
            init={defaultLight.shape}
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
              {
                value: "bike",
                display: <FaBicycle size={iconSize} />,
              },
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
            init={defaultLight.flashing}
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

export default SetDefaultLight;
