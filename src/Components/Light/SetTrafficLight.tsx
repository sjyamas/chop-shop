import { useEffect } from "react";
import SetLight from "./SetLight";
import lightsStore from "Helpers/lightsStore";

export default function SetTrafficLight() {
  const data = lightsStore((state) => state.lights);
  const addLightRow = lightsStore((state) => state.addLightRow);
  const addLightCol = lightsStore((state) => state.addLightCol);
  const addRow = lightsStore((state) => state.addRow);
  const addCol = lightsStore((state) => state.addCol);
  const removeModule = lightsStore((state) => state.removeModule);

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

  useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {data.map((row, rowIndex) => (
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          {row.map((signal, signalIndex) => (
            <div
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
                >
                  +
                </button>
              </div>
              <button
                style={buttonStyle}
                onClick={() => removeModule(signalIndex, rowIndex)}
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
      >
        ++
      </button>
    </div>
  );
}
