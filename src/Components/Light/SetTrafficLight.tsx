import { useEffect } from "react";
import SetLight from "./SetLight";
import lightsStore from "Helpers/lightsStore";

export default function SetTrafficLight() {
  const cycle = lightsStore((state) => state.cycle);
  const setCurrentStage = lightsStore((state) => state.setCurrentStage);
  const setEditStage = lightsStore((state) => state.setEditStage);
  const editStage = lightsStore((state) => state.editStage);

  const addStage = lightsStore((state) => state.addStage);
  const addLightRow = lightsStore((state) => state.addLightRow);
  const addLightCol = lightsStore((state) => state.addLightCol);
  const addRow = lightsStore((state) => state.addRow);
  const addCol = lightsStore((state) => state.addCol);
  const removeModule = lightsStore((state) => state.removeModule);
  const removeStage = lightsStore((state) => state.removeStage);

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
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
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
            key={i}
            style={{
              ...buttonStyle,
              backgroundColor: i === editStage ? "blue" : "black",
            }}
            onClick={() => {
              setEditStage(i);
              setCurrentStage(i);
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
      {cycle[editStage].lights.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
        >
          {row.map((signal, signalIndex) => (
            <div
              key={signalIndex}
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
                    key={lightRowIndex}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {lightRow &&
                      lightRow.map((light, lightIndex) => (
                        <SetLight
                          key={[
                            rowIndex,
                            signalIndex,
                            lightRowIndex,
                            lightIndex,
                          ]}
                          coords={[
                            rowIndex,
                            signalIndex,
                            lightRowIndex,
                            lightIndex,
                          ]}
                          color={light.color}
                          arrow={light.arrow}
                          flashing={light.flashing}
                          on={light.on}
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
                style={buttonStyle}
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
}
