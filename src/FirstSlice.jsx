import { createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
  name: "first",
  initialState: {
    count: 0,
  },
  reducers: {
    handleFirst(state, action) {
      state.count = action.payload;
      console.log(state.count);
    },
  },
});

export const { handleFirst } = firstSlice.actions;
export const firstReducer = firstSlice.reducer;
