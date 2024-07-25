import SingleLight from "Components/Light/SingleLight";

export default function TrafficLight({ config }: any) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {config.map((row) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {row.map((item) => (
            <SingleLight
              color={item.color}
              arrow={item.arrow}
              flashing={item.flashing}
              altFlashing={item.altFlashing}
              on={item.on}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
