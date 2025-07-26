import { createSlice } from "@reduxjs/toolkit";
import { handleFirst } from "./FirstSlice";

const secondSlice = createSlice({
  name: "second",
  initialState: {
    count: 0,
  },
  reducers: {
    handleSecond(state, action) {
      state.count = action.payload;
      console.log(state.count);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleFirst, (state, action) => {
      state.count;
    });
  },
});

export const { handleSecond } = secondSlice.actions;
export const secondReducer = secondSlice.reducer;
