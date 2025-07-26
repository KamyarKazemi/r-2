import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getNum = createAsyncThunk("num/get", async ({ path }) => {
  const response = await axios.get(`http://localhost:3005/${path}`);

  await console.log(response.data);

  return response.data;
});

export { getNum };
