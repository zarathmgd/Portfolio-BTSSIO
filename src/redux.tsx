import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleOn: (state) => {
      state.mode = true;
    },
    toggleOff: (state) => {
      state.mode = false;
    },
  },
});

export const { toggleOn, toggleOff } = modeSlice.actions;

export const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
  },
});
