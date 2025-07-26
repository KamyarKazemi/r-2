import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sendNum = createAsyncThunk("num/send", async (num, path) => {
  const response = await axios.post(`http://localhost:3005/${path}`, {
    num,
  });

  return response.data;
});

export { sendNum };
