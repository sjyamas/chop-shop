import { memo, useEffect, useMemo } from "react";
import SetLight from "./SetLight";
import lightsStore from "Helpers/lightsStore";
import TextInput from "Global/TextInput";
import { FaPause, FaPlay } from "react-icons/fa";
import SetDefaultLight from "./SetDefaultLight";

const SetTrafficLight = memo(function SetTrafficLight() {
  console.log("SetTrafficLight");
  const cycle = lightsStore((state) => state.cycle);
  const setCurrentStage = lightsStore((state) => state.setCurrentStage);
  const setEditStage = lightsStore((state) => state.setEditStage);
  const editStage = lightsStore((state) => state.editStage);

  const currentStage = lightsStore((state) => state.currentStage);

  const addStage = lightsStore((state) => state.addStage);
  const addLightRow = lightsStore((state) => state.addLightRow);
  const addLightCol = lightsStore((state) => state.addLightCol);
  const addRow = lightsStore((state) => state.addRow);
  const addCol = lightsStore((state) => state.addCol);

  const removeModule = lightsStore((state) => state.removeModule);
  const removeStage = lightsStore((state) => state.removeStage);

  const setFlashing = lightsStore((state) => state.setFlashing);

  const setDuration = lightsStore((state) => state.setDuration);

  const time = lightsStore((state) => state.time);

  const on = lightsStore((state) => state.on);

  const toggleOn = lightsStore((state) => state.toggleOn);
  const setCycle = lightsStore((state) => state.setCycle);
  const updateLightConfig = lightsStore((state) => state.updateLightConfig);

  const buttonStyle = {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    outline: 0,
    padding: 0,
    cursor: "pointer",
    height: "2rem",
    width: "2rem",
    borderRadius: "15%",
    backgroundColor: "black",
    borderWidth: "0.5rem",
    borderStyle: "solid",
  };

  // useEffect(() => {
  //   console.log(JSON.stringify(cycle));
  // }, [cycle]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {/* STAGE SETTER */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <button
          style={buttonStyle}
          onClick={() => {
            removeStage(currentStage);
          }}
        >
          -
        </button>
        {[...Array(cycle.length)].map((e, i) => (
          <button
            key={"a" + i}
            style={{
              ...buttonStyle,
              backgroundColor: i === editStage ? "blue" : "black",
            }}
            onClick={() => {
              setEditStage(i);
              setCurrentStage(i);
              setFlashing();
            }}
          >
            {i}
          </button>
        ))}
        <button
          style={buttonStyle}
          onClick={() => {
            addStage(currentStage);
          }}
        >
          +
        </button>
      </div>

      {/* stage config */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          style={buttonStyle}
          onClick={() => {
            toggleOn();
          }}
        >
          {on ? <FaPause /> : <FaPlay />}
        </button>
        <span>Stage: {currentStage}</span>
        <span>
          Time: {time + 1}/{cycle[currentStage].duration}
        </span>
        <input
          style={{ width: "2rem" }}
          type="text"
          onChange={(e) => setDuration(currentStage, e.target.value)}
          value={cycle[currentStage].duration}
        />
        <SetDefaultLight />
      </div>

      {/* SAVE AND LOAD */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          style={{ ...buttonStyle, width: "auto" }}
          onClick={() => {
            localStorage.setItem("light", JSON.stringify(cycle));
          }}
        >
          SAVE
        </button>
        <button
          style={{ ...buttonStyle, width: "auto" }}
          onClick={() => {
            let local = localStorage.getItem("light");
            if (local) {
              setCycle(JSON.parse(local));
            }
          }}
        >
          LOAD
        </button>
      </div>

      {/* LIGHTS */}
      {cycle[editStage].lights.map((row, rowIndex) => (
        <div
          key={"b" + rowIndex}
          style={{ display: "flex", flexDirection: "row", gap: "0.3rem" }}
        >
          {row.map((signal, signalIndex) => (
            <div
              key={"c" + rowIndex + signalIndex}
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  flexDirection: "column",
                  gap: "0.2rem",
                  border: "solid 0.5rem black",
                  // backgroundColor: "black",
                }}
              >
                <p style={{ color: "white" }}>{signal.light_id}</p>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <button
                    style={{
                      ...buttonStyle,
                      width: "auto",
                      borderColor: signal.reflector ? " white" : "black",
                      borderRadius: "0",
                      padding: "0.2rem",
                    }}
                    onClick={() => {
                      updateLightConfig(
                        signalIndex,
                        rowIndex,
                        "reflector",
                        !signal.reflector
                      );
                    }}
                  >
                    reflector?
                  </button>
                  <button
                    style={{
                      ...buttonStyle,
                      width: "auto",
                      borderColor: signal.backplate ? "white" : "black",
                      borderRadius: "0",
                      padding: "0.2rem",
                    }}
                    onClick={() => {
                      updateLightConfig(
                        signalIndex,
                        rowIndex,
                        "backplate",
                        !signal.backplate
                      );
                    }}
                  >
                    backplate?
                  </button>
                </div>
                {signal.state.map((lightRow, lightRowIndex) => (
                  <div
                    key={"d" + rowIndex + signalIndex + lightRowIndex}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      // gap: "1rem",
                    }}
                  >
                    {lightRow.map((light, lightIndex) => (
                      <SetLight
                        key={
                          "e" +
                          rowIndex +
                          signalIndex +
                          lightRowIndex +
                          lightIndex
                        }
                        id={
                          "e" +
                          rowIndex +
                          signalIndex +
                          lightRowIndex +
                          lightIndex
                        }
                        col={rowIndex}
                        row={signalIndex}
                        y={lightRowIndex}
                        x={lightIndex}
                        size={light.size}
                        animate={light.animate}
                        color={light.color}
                        shape={light.shape}
                        flashing={light.flashing}
                        on={light.on}
                        enabled={cycle.length === 1 && editStage === 0}
                      />
                    ))}
                    <button
                      style={buttonStyle}
                      onClick={() =>
                        addLightRow(signalIndex, rowIndex, lightRowIndex)
                      }
                      disabled={!(editStage === 0 && cycle.length === 1)}
                    >
                      +
                    </button>
                  </div>
                ))}
                <button
                  style={{
                    ...buttonStyle,
                  }}
                  onClick={() => addLightCol(signalIndex, rowIndex)}
                  disabled={!(editStage === 0 && cycle.length === 1)}
                >
                  +
                </button>
              </div>
              <button
                style={{
                  ...buttonStyle,
                  borderRadius: 0,
                  borderColor: "black",
                  backgroundColor: "black",
                }}
                onClick={() => removeModule(signalIndex, rowIndex)}
                disabled={!(editStage === 0 && cycle.length === 1)}
              >
                X
              </button>
            </div>
          ))}

          <button
            style={{
              ...buttonStyle,
            }}
            onClick={() => addRow(rowIndex)}
            disabled={!(editStage === 0 && cycle.length === 1)}
          >
            ++
          </button>
        </div>
      ))}
      <button
        style={{
          ...buttonStyle,
        }}
        onClick={() => addCol()}
        disabled={!(editStage === 0 && cycle.length === 1)}
      >
        ++
      </button>
    </div>
  );
});

export default SetTrafficLight;
