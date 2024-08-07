import SingleLight from "Components/Light/SingleLight";
import { memo, useMemo } from "react";

const TrafficLight = memo(function TrafficLight({ light }: any) {
  console.log("TrafficLight");
  const mult = 0.5;
  const reflectorSize = 2;

  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <p style={{ width: "1rem", color: "white" }}>{light.light_id}</p> */}

      <div
        style={{
          // height: "auto",
          // width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: light.backplate ? "#1E1E1E" : "rgba(0,0,0,0)",
          border: light.backplate
            ? light.reflector
              ? `${reflectorSize * mult}rem solid #FEC802`
              : `${reflectorSize * mult}rem solid #1E1E1E`
            : "0.5rem solid rgba(0,0,0,0)",
          padding: `${4 * mult}rem`,
          borderRadius: "0.4rem",
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
                mult={mult}
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
