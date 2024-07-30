import SingleLight from "Components/Light/SingleLight";

export default function TrafficLight({ id, config }: any) {
  // console.log("fan", config);
  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ width: "1rem", color: "white" }}>{id}</p>

      <div
        style={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#111111",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        {config.map((row, rowIndex) => (
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
                color={item.color}
                arrow={item.arrow === "solid" ? false : item.arrow}
                flashing={item.flashing === "solid" ? false : item.flashing}
                altFlashing={item.flashing === "alt"}
                on={item.on}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
