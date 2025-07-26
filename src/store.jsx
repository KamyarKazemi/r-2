import { configureStore } from "@reduxjs/toolkit";
import { firstReducer } from "./FirstSlice";
import { secondReducer } from "./SecondSlice";

const store = configureStore({
  reducer: {
    first: firstReducer,
    second: secondReducer,
  },
});

export { store };
