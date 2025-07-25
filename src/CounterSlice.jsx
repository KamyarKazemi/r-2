import { createSlice } from "@reduxjs/toolkit";
import { submit } from "./submitThunk";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    inputValue: "",
  },
  reducers: {
    increment(state, action) {
      state.value = state.value + 1;
    },
    decrement(state, action) {
      state.value = state.value - 1;
    },
    reset(state, action) {
      state.value = 0;
    },
    handleInput(state, action) {
      state.inputValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submit.fulfilled, (state, action) => {
      state.value = Number(state.action.num);
    });
  },
});

export const { increment, decrement, reset, handleInput } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
