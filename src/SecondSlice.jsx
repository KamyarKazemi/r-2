import { createSlice } from "@reduxjs/toolkit";

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
});

export const { handleSecond } = secondSlice.actions;
export const secondReducer = secondSlice.reducer;
