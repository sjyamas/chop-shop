import { produce } from "immer";


class Light {
    color: "red" | "yellow" | "green";
    arrow: "none" | "left" | "right" | "up";
    blinking: "solid" | "true" | "alt";
    on: boolean;

    constructor(color: "red" | "yellow" | "green", arrow: "none" | "left" | "right" | "up", blinking: "solid" | "true" | "alt",
      on: boolean
    ) {
      this.color = color
      this.arrow = arrow
      this.blinking = blinking
      this.on = on
    }

    setValue(attribute: "color" | "arrow" | "blinking " | "on", value: string): void {
      (this as any)[attribute] = value;
    }
  }

class LightModule {
  lights: Light[][]

  constructor(initialLights:Light [][] | undefined){
    if(!initialLights){
      let l1 = new Light("red", "none", "solid", true)
      this.lights = [[l1]]
    } else {
      this.lights = initialLights
    }
  }
  addModule(col: number, row: number, lights: Light): void {
    this.lights[col][row] = lights
  }
  removeModule(col: number, row: number): void {
    this.lights[col].splice(row, 1)
  }
}