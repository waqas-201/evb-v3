import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  isModelOpen: boolean;
}

const initialState: CounterState = {
  isModelOpen: false,
};

export const counterSlice = createSlice({
  name: "studyModel",
  initialState,
  reducers: {
    toggleModel: (state: CounterState) => {
      state.isModelOpen = !state.isModelOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModel } = counterSlice.actions;

export default counterSlice.reducer;
