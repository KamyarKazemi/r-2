import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const submit = createAsyncThunk("num/add", async (num) => {
  const response = await axios.post("http://localhost:3005/length", {
    num,
  });

  return response.data;
});

export { submit };
