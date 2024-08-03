import SingleLight from "Components/Light/SingleLight";
import { memo, useMemo } from "react";

const TrafficLight = memo(function TrafficLight({ light }: any) {
  console.log("TrafficLight");
  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ width: "1rem", color: "white" }}>{light.light_id}</p>

      <div
        style={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E1E1E",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        {light.state.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {row.map((item, itemIndex) => (
              <SingleLight
                key={itemIndex}
                size={item.size}
                color={item.color}
                shape={item.shape}
                flashing={item.flashing === "solid" ? false : item.flashing}
                altFlashing={item.flashing === "alt"}
                animate={item.animate}
                on={item.on}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TrafficLight;
