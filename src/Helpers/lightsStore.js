import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const defaultLight = { color: "red", shape: "solid", flashing: "solid", on: true }
const lightsStore = create(immer((set) => ({
    on: false,

    toggleOn: () => set(state => ({ on: !state.on })),
    currentStage: 0,
    light_id: 4,
    editStage: 0,
    time: 0,
    addTime: () => set((state) => ({ time: state.time + 1 })),
    resetTime: () => set({ time: 0 }),

    cycle: [{
        stage: 0,
        duration: 4,
        max_duration: 120,
        lights: [
            [
                {
                    light_id: 1,
                    state:
                        [
                            [{ color: "red", shape: "solid", flashing: "solid", on: true }],
                            [
                                { color: "yellow", shape: "left", flashing: "solid", on: true },
                                { color: "yellow", shape: "solid", flashing: "solid", on: true },
                            ],
                            [
                                { color: "green", shape: "left", flashing: "solid", on: true },
                                { color: "green", shape: "solid", flashing: "solid", on: true },
                            ],
                        ],
                },
                {
                    light_id: 2,
                    state:
                        [
                            [{ color: "red", shape: "solid", flashing: "solid", on: true }],
                            [{ color: "yellow", shape: "solid", flashing: "solid", on: true }],
                            [{ color: "green", shape: "solid", flashing: "solid", on: true }],
                        ],
                }
            ],
        ],
    }],

    setCycle: (newCycle) => set((state) => { state.cycle = newCycle }),
    setDuration: (stage, duration) => set((state) => {
        state.cycle[stage].duration = duration
    }),

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
    setEditStage: (stage) => set((state) => {
        state.editStage = stage
    }),

    setCurrentStage: (stage) => set((state) => {
        state.currentStage = stage
    }),

    incStage: () => set((state) => {
        if (state.currentStage === state.cycle.length - 1) {
            state.currentStage = 0
            state.editStage = 0
        } else { state.currentStage++; state.editStage++; }
    }),
    // setEditable: (stage) => set({ editable: !(state.editStage === 0 && state.cycle.length === 1) }),

    updateLight: (row, col, x, y, key, value) => set((state) => { state.cycle[state.editStage].lights[col][row].state[y][x][key] = value }),

    addCol: () => set((state) => { state.cycle[state.editStage].lights.push([{ light_id: state.light_id++, state: [[defaultLight]] }]) }),
    addRow: (col) => set((state) => { state.cycle[state.editStage].lights[col].push({ light_id: state.light_id++, state: [[defaultLight]] }) }),
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
    setFlashing: () => set((state) => ({ flashing: !state.cycle[state.currentStage].lights.flatMap(arr => arr).flatMap(item => item.state).flatMap(row => row).filter(item => item.on).every(item => item.flashing === "solid") })),

    flash: true,
    setFlash: () => set(state => ({ flash: !state.flash }))
})));

export default lightsStore;