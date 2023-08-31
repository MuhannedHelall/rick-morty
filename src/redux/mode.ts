import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ModeState {
    isDark: Boolean;
}
let mode = localStorage.getItem("mode") === "true";
console.log(mode);

// Define the initial state using that type
const initialState: ModeState = {
    isDark: mode,
};

export const modeSlice = createSlice({
    name: "ModeSlicer",
    initialState,
    reducers: {
        ToggleDarkMode: (state) => {
            state.isDark = !state.isDark;
            localStorage.setItem("mode", state.isDark.toString());
        },
    },
});

export const { ToggleDarkMode } = modeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMode = (state: RootState) => state.Mode;

export default modeSlice.reducer;
