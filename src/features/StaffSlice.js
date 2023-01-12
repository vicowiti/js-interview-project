import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  staff: [],
  isLoading: false,
  isError: false,
};

export const getStaff = createAsyncThunk("/staff/getStaff", async () => {
  //Fetch data
  const response = await axios.get(
    "https://touchinspiration-0ada.restdb.io/rest/sample",
    {
      headers: {
        "x-apikey": "63be7360969f06502871ad7f",
      },
    }
  );
  console.log(response);
  return response.data;
});

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: {
    [getStaff.fulfilled]: (state, { payload }) => {
      state.staff = payload;
    },
    [getStaff.pending]: (state) => {
      state.isLoading = true;
    },
    [getStaff.rejected]: (state, { payload }) => {
      state.isError = true;
    },
  },
});

export default staffSlice.reducer;

export const staffSelector = (state) => state.staff;
