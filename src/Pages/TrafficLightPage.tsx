import { useEffect } from "react";
import PageHeader from "Global/PageHeader.js";
import TrafficLight from "Components/Light/TrafficLight";

import CylceInput from "Components/Light/CycleInput";
import SetLight from "Components/Light/SetLight";
import SetTrafficLight from "Components/Light/SetTrafficLight";
import lightsStore from "Helpers/lightsStore";
import OptionButton from "Components/Light/OptionButton";

export default function TrafficLightPage() {
  const on = lightsStore((state) => state.on);
  const flashing = lightsStore((state) => state.flashing);
  const setFlash = lightsStore((state) => state.setFlash);
  const currentStage = lightsStore((state) => state.currentStage);
  const addTime = lightsStore((state) => state.addTime);
  const time = lightsStore((state) => state.time);
  const resetTime = lightsStore((state) => state.resetTime);
  const incStage = lightsStore((state) => state.incStage);
  const setFlashing = lightsStore((state) => state.setFlashing);

  const blinkingInterval = 750;
  const cycleInterval = 1000;

  //TODO: trigger only when there is a light that has flashing

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

  const cycle = lightsStore((state) => state.cycle);

  return (
    <div style={{ backgroundColor: "grey" }}>
      <PageHeader />
      {/* <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          {lights.map((item) => (
            <TrafficLight id={item.light_id} config={item.state} />
          ))}
        </div> */}

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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

      <SetTrafficLight />
    </div>
  );
}
