import { create } from "zustand";
import { produce } from "immer";

const defaultLight = { color: "red", arrow: "solid", flashing: "solid", on: true }
const lightsStore = create((set) => ({
    light_id: 4,
    lights: [
        [
            {
                light_id: 1,
                state:
                    [
                        [{ color: "red", arrow: "solid", flashing: "solid", on: true }],
                        [
                            { color: "yellow", arrow: "left", flashing: "solid", on: true },
                            { color: "yellow", arrow: "solid", flashing: "solid", on: true },
                        ],
                        [
                            { color: "green", arrow: "left", flashing: "solid", on: true },
                            { color: "green", arrow: "solid", flashing: "solid", on: true },
                        ],
                    ],
            },
            {
                light_id: 2,
                state:
                    [
                        [{ color: "red", arrow: "solid", flashing: "solid", on: true }],
                        [{ color: "yellow", arrow: "solid", flashing: "solid", on: true }],
                        [{ color: "green", arrow: "solid", flashing: "solid", on: true }],
                    ],
            }
        ],
        [{
            light_id: 3,
            state:
                [
                    [{ color: "red", arrow: "solid", flashing: "solid", on: true }],
                    [
                        { color: "yellow", arrow: "left", flashing: "solid", on: true },
                        { color: "yellow", arrow: "solid", flashing: "solid", on: true },
                    ],
                    [
                        { color: "green", arrow: "left", flashing: "solid", on: true },
                        { color: "green", arrow: "solid", flashing: "solid", on: true },
                    ],
                ]
        },
        ],
    ],


    updateLight: (row, col, x, y, key, value) => set(produce((state) => { state.lights[col][row].state[y][x][key] = value })),

    addCol: () => set(produce((state) => { state.light_id++; state.lights.push([{ light_id: state.light_id, state: [[defaultLight]] }]) })),
    addRow: (col) => set(produce((state) => { state.light_id++; state.lights[col].push({ light_id: state.light_id, state: [[defaultLight]] }) })),
    removeModule: (row, col) => set(produce((state) => {
        if (state.lights[col].length === 1) {
            if (state.lights.length === 1) {

            } else {
                state.lights.splice(col, 1)
            }
        } else { state.lights[col].splice(row, 1); }
    })),

    addLightCol: (row, col) => set(produce((state) => { state.lights[col][row].state.push([defaultLight]) })),
    addLightRow: (row, col, y) => set(produce((state) => { state.lights[col][row].state[y].push(defaultLight) })),

    removeLight: (row, col, x, y) => set(produce((state) => {
        if (state.lights[col][row].state[y].length === 1) {
            if (state.lights[col][row].state.length === 1) {
                state.lights[col].splice(row, 1)
            } else {
                state.lights[col][row].state.splice(y, 1)
            }
        } else { state.lights[col][row].state[y].splice(x, 1); }
    })),

    flashing: true,
    setFlashing: () => set(state => ({ flashing: !state.flashing })),

    flash: true,
    setFlash: () => set(state => ({ flash: !state.flash }))
}));

export default lightsStore;