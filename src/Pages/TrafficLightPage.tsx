import PageHeader from "Global/PageHeader.js";
import TrafficLight from "Components/Light/TrafficLight";
import { useEffect, useState } from "react";
import CylceInput from "Components/Light/CycleInput";
import SetLight from "Components/Light/SetLight";

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

  const stage1 = new SignalStage(1, 12, [
    {
      light_id: 1,
      state: [
        [{ color: "red", arrow: false, on: true }],
        [
          { color: "yellow", arrow: "left", on: false },
          { color: "yellow", arrow: false, on: false },
        ],
        [
          { color: "green", arrow: "left", on: false },
          { color: "green", arrow: false, on: false },
        ],
      ],
    },
    {
      light_id: 2,
      state: [
        [{ color: "red", arrow: false, on: true }],
        [{ color: "yellow", arrow: false, on: false }],
        [{ color: "green", arrow: false, on: false }],
      ],
    },
  ]);

  const stage2 = new SignalStage(2, 10, [
    {
      light_id: 1,
      state: [
        [{ color: "red", arrow: false, on: false }],
        [
          { color: "yellow", arrow: "left", on: false },
          { color: "yellow", arrow: false, on: false },
        ],
        [
          { color: "green", arrow: "left", on: true },
          { color: "green", arrow: false, on: true },
        ],
      ],
    },
    {
      light_id: 2,
      state: [
        [{ color: "red", arrow: false, on: false }],
        [{ color: "yellow", arrow: false, on: false }],
        [{ color: "green", arrow: false, on: true }],
      ],
    },
  ]);

  const stage3 = new SignalStage(3, 2, [
    {
      light_id: 1,
      state: [
        [{ color: "red", arrow: false, on: false }],
        [
          { color: "yellow", arrow: "left", on: true },
          { color: "yellow", arrow: false, on: true },
        ],
        [
          { color: "green", arrow: "left", on: true },
          { color: "green", arrow: false, on: false },
        ],
      ],
    },
    {
      light_id: 2,
      state: [
        [{ color: "red", arrow: false, on: false }],
        [{ color: "yellow", arrow: false, on: true }],
        [{ color: "green", arrow: false, on: false }],
      ],
    },
  ]);

  stage1.next = stage2;
  stage2.next = stage3;
  stage3.next = stage1;

  async function lightCylcle(signalStage: SignalStage) {
    setLights(signalStage.lights);
    console.log("sig", signalStage.lights);
    if (run) {
      setTimeout(
        () => lightCylcle(signalStage.next),
        signalStage.duration * 1000
      );
    }
  }

  useEffect(() => {
    lightCylcle(stage1);
  }, []);

  // useEffect(() => {
  //   console.log("not how ai works", JSON.stringify(lights));
  // }, [lights]);

  return (
    <PageHeader>
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          {lights.map((item) => (
            <TrafficLight id={item.light_id} config={item.state} />
          ))}
        </div>
        <SetLight />
      </div>
    </PageHeader>
  );
}
