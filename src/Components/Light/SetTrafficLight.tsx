import { memo, useEffect, useMemo } from "react";
import SetLight from "./SetLight";
import lightsStore from "Helpers/lightsStore";
import TextInput from "Global/TextInput";

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

  const toggleOn = lightsStore((state) => state.toggleOn);
  const setCycle = lightsStore((state) => state.setCycle);

  const buttonStyle = {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    outline: 0,
    padding: 0,
    cursor: "pointer",
    height: "3rem",
    width: "3rem",
    borderRadius: "1rem",
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
            removeStage();
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
            addStage();
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
          START
        </button>
        <span>Stage: {currentStage}</span>
        <span>
          Time: {time + 1}/{cycle[currentStage].duration}
        </span>
        <input
          type="text"
          onChange={(e) => setDuration(currentStage, e.target.value)}
          value={cycle[currentStage].duration}
        />
        <button
          style={buttonStyle}
          onClick={() => {
            localStorage.setItem("light", JSON.stringify(cycle));
          }}
        >
          SAVE
        </button>
        <button
          style={buttonStyle}
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
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
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
                  gap: "1rem",
                  backgroundColor: "purple",
                }}
              >
                <p style={{ color: "white" }}>{signal.light_id}</p>
                {signal.state.map((lightRow, lightRowIndex) => (
                  <div
                    key={"d" + rowIndex + signalIndex + lightRowIndex}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
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
                  borderColor: "purple",
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
