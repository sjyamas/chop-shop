import { create } from "zustand";
import { produce } from "immer";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const defaultLight = { color: "red", arrow: "solid", flashing: "solid", on: true }
const lightsStore = create(devtools(immer((set) => ({
    currentStage: 0,
    light_id: 4,
    editStage: 0,
    cycle: [{
        stage: 0,
        min_duration: 4,
        max_duration: 120,
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
    }],

    addStage: () => set((state) => {
        state.cycle.push(state.cycle[state.cycle.length - 1]); state.editStage++;
        state.currentStage++;
    }), //add edit and curr stage
    removeStage: () => set((state) => {

        if (state.cycle.length > 1) {
            if (state.editStage === state.cycle.length - 1) {
                state.editStage--;
                state.currentStage--;
                //TODO: SEPRATE CURRENT AND EDIT STAGE LOGIC 
            }
            state.cycle.pop()
        }
    }),
    setEditStage: (stage) => set({ editStage: stage }),
    setCurrentStage: (stage) => set({ currentStage: stage }),
    // setEditable: (stage) => set({ editable: !(state.editStage === 0 && state.cycle.length === 1) }),

    updateLight: (row, col, x, y, key, value) => set((state) => { state.cycle[state.editStage].lights[col][row].state[y][x][key] = value }),

    addCol: () => set((state) => { state.light_id++; state.cycle[state.editStage].lights.push([{ light_id: state.light_id, state: [[defaultLight]] }]) }),
    addRow: (col) => set((state) => { state.light_id++; state.cycle[state.editStage].lights[col].push({ light_id: state.light_id, state: [[defaultLight]] }) }),
    removeModule: (row, col) => set((state) => {
        if (state.cycle[state.editStage].lights[col].length === 1) {
            if (state.cycle[state.editStage].lights.length === 1) {

            } else {
                state.cycle[state.editStage].lights.splice(col, 1)
            }
        } else { state.cycle[state.editStage].lights[col].splice(row, 1); }
    }),

    addLightCol: (row, col) => set((state) => { state.cycle[state.editStage].lights[col][row].state.push([defaultLight]) }),
    addLightRow: (row, col, y) => set((state) => { state.cycle[state.editStage].lights[col][row].state[y].push(defaultLight) }),

    removeLight: (row, col, x, y) => set((state) => {
        if (state.cycle[state.editStage].lights[col][row].state[y].length === 1) {
            if (state.cycle[state.editStage].lights[col][row].state.length === 1) {
                state.cycle[state.editStage].lights[col].splice(row, 1)
            } else {
                state.cycle[state.editStage].lights[col][row].state.splice(y, 1)
            }
        } else { state.cycle[state.editStage].lights[col][row].state[y].splice(x, 1); }
    }),

    flashing: true,
    setFlashing: () => set(state => ({ flashing: !state.flashing })),

    flash: true,
    setFlash: () => set(state => ({ flash: !state.flash }))
}))));

export default lightsStore;