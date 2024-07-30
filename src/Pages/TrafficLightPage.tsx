import PageHeader from "Global/PageHeader.js";
import TrafficLight from "Components/Light/TrafficLight";
import { useEffect, useState } from "react";
import CylceInput from "Components/Light/CycleInput";
import SetLight from "Components/Light/SetLight";
import SetTrafficLight from "Components/Light/SetTrafficLight";
import lightsStore from "Helpers/lightsStore";

class SignalStage {
  public stage: string | number;
  public duration: number;
  public lights: any;
  public next!: SignalStage;

  constructor(stage: string | number, duration: number, lights: any) {
    this.stage = stage;
    this.duration = duration;
    this.lights = lights;
    this.next;
  }
}

export default function TrafficLightPage() {
  const [lights, setLights] = useState([]);
  const [run, setRun] = useState(true);

  const flashing = lightsStore((state) => state.flashing);
  const setFlashing = lightsStore((state) => state.setFlashing);
  const flash = lightsStore((state) => state.flash);
  const setFlash = lightsStore((state) => state.setFlash);
  const currentStage = lightsStore((state) => state.currentStage);

  const blinkingInterval = 750;

  // useEffect(() => {
  //   let interval;
  //   if (flashing) {
  //     setFlash();
  //     interval = setInterval(() => {
  //       setFlash();
  //     }, blinkingInterval);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [flashing]);

  // const stage1 = new SignalStage(1, 8, [
  //   {
  //     light_id: 1,
  //     state: [
  //       [{ color: "red", arrow: false, on: true }],
  //       [
  //         { color: "yellow", arrow: "left", on: false },
  //         { color: "yellow", arrow: false, on: false },
  //       ],
  //       [
  //         { color: "green", arrow: "left", on: false },
  //         { color: "green", arrow: false, on: false },
  //       ],
  //     ],
  //   },
  //   {
  //     light_id: 2,
  //     state: [
  //       [{ color: "red", arrow: false, on: true }],
  //       [{ color: "yellow", arrow: false, on: false }],
  //       [{ color: "green", arrow: false, on: false }],
  //     ],
  //   },
  // ]);

  // const stage2pre = new SignalStage(4, 4, [
  //   {
  //     light_id: 1,
  //     state: [
  //       [{ color: "red", arrow: false, on: true }],
  //       [
  //         { color: "yellow", arrow: "left", on: true },
  //         { color: "yellow", arrow: false, on: true },
  //       ],
  //       [
  //         { color: "green", arrow: "left", on: false },
  //         { color: "green", arrow: false, on: false },
  //       ],
  //     ],
  //   },
  //   {
  //     light_id: 2,
  //     state: [
  //       [{ color: "red", arrow: false, on: true }],
  //       [{ color: "yellow", arrow: false, on: true }],
  //       [{ color: "green", arrow: false, on: false }],
  //     ],
  //   },
  // ]);

  // const stage2 = new SignalStage(2, 8, [
  //   {
  //     light_id: 1,
  //     state: [
  //       [{ color: "red", arrow: false, on: false }],
  //       [
  //         { color: "yellow", arrow: "left", on: false },
  //         { color: "yellow", arrow: false, on: false },
  //       ],
  //       [
  //         { color: "green", arrow: "left", on: true },
  //         { color: "green", arrow: false, on: true },
  //       ],
  //     ],
  //   },
  //   {
  //     light_id: 2,
  //     state: [
  //       [{ color: "red", arrow: false, on: false }],
  //       [{ color: "yellow", arrow: false, on: false }],
  //       [{ color: "green", arrow: false, on: true }],
  //     ],
  //   },
  // ]);

  // const stage3 = new SignalStage(3, 4, [
  //   {
  //     light_id: 1,
  //     state: [
  //       [{ color: "red", arrow: false, on: false }],
  //       [
  //         { color: "yellow", arrow: "left", on: true },
  //         { color: "yellow", arrow: false, on: true },
  //       ],
  //       [
  //         { color: "green", arrow: "left", on: false },
  //         { color: "green", arrow: false, on: false },
  //       ],
  //     ],
  //   },
  //   {
  //     light_id: 2,
  //     state: [
  //       [{ color: "red", arrow: false, on: false }],
  //       [{ color: "yellow", arrow: false, on: true }],
  //       [{ color: "green", arrow: false, on: false }],
  //     ],
  //   },
  // ]);

  // const stage4 = new SignalStage(5, 4, [
  //   {
  //     light_id: 1,
  //     state: [
  //       [{ color: "red", arrow: false, on: false }],
  //       [
  //         { color: "yellow", arrow: "left", on: false },
  //         { color: "yellow", arrow: false, on: false },
  //       ],
  //       [
  //         { color: "green", arrow: "left", on: true, flashing: "true" },
  //         { color: "green", arrow: false, on: true, flashing: "true" },
  //       ],
  //     ],
  //   },
  //   {
  //     light_id: 2,
  //     state: [
  //       [{ color: "red", arrow: false, on: false }],
  //       [{ color: "yellow", arrow: false, on: false }],
  //       [{ color: "green", arrow: false, on: true, flashing: "true" }],
  //     ],
  //   },
  // ]);

  // stage1.next = stage2pre;
  // stage2pre.next = stage2;
  // stage2.next = stage4;
  // stage4.next = stage3;
  // stage3.next = stage1;

  // async function lightCylcle(signalStage: SignalStage) {
  //   setLights(signalStage.lights);
  //   console.log("sig", signalStage.lights);
  //   if (run) {
  //     setTimeout(
  //       () => lightCylcle(signalStage.next),
  //       signalStage.duration * 1000
  //     );
  //   }
  // }
  const data = lightsStore((state) => state.cycle);

  // useEffect(() => {
  //   lightCylcle(stage1);
  // }, []);

  // useEffect(() => {
  //   console.log("not how ai works", JSON.stringify(lights));
  // }, [lights]);

  console.log("mix", data);
  return (
    <PageHeader>
      <div>
        {/* <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          {lights.map((item) => (
            <TrafficLight id={item.light_id} config={item.state} />
          ))}
        </div> */}

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {data[currentStage].lights.map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
            >
              {item.map((light) => (
                <TrafficLight
                  key={light.light_id}
                  id={light.light_id}
                  config={light.state}
                />
              ))}
            </div>
          ))}
        </div>

        <SetTrafficLight />
      </div>
    </PageHeader>
  );
}
