import { memo, useEffect } from "react";
import lightsStore from "Helpers/lightsStore";
import TrafficLight from "Components/Light/TrafficLight";
import { FaPause, FaPlay } from "react-icons/fa";

const DemoModePage = memo(function DemoModePage() {
  const cycle = lightsStore((state) => state.cycle);
  const currentStage = lightsStore((state) => state.currentStage);

  const on = lightsStore((state) => state.on);
  const flashing = lightsStore((state) => state.flashing);
  const setFlash = lightsStore((state) => state.setFlash);
  const addTime = lightsStore((state) => state.addTime);
  const time = lightsStore((state) => state.time);
  const resetTime = lightsStore((state) => state.resetTime);
  const incStage = lightsStore((state) => state.incStage);
  const setFlashing = lightsStore((state) => state.setFlashing);

  const toggleOn = lightsStore((state) => state.toggleOn);

  const blinkingInterval = 500;
  const cycleInterval = 1000;
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

  useEffect(() => {
    setFlashing();
  }, []);

  useEffect(() => {
    let interval;
    if (flashing) {
      setFlash();
      interval = setInterval(() => {
        setFlash();
      }, blinkingInterval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [flashing]);

  useEffect(() => {
    let interval;
    if (on) {
      interval = setInterval(() => {
        addTime();
      }, cycleInterval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [on]);

  useEffect(() => {
    if (time >= cycle[currentStage].duration) {
      resetTime();
      incStage();
      setFlashing();
    }
  }, [time]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        height: "100vh",
        width: "100%",
        backgroundColor: "grey",
      }}
    >
      {cycle[currentStage].lights.map((item, i) => (
        <div
          key={i}
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
        >
          {item.map((light) => (
            <TrafficLight key={light.light_id} light={light} />
          ))}
        </div>
      ))}
    </div>
  );
});

export default DemoModePage;
