import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  staff: [],
  isLoading: false,
  isError: false,
};

// GET RESOURCE HANDLER
export const getStaff = createAsyncThunk("/staff/getStaff", async () => {
  //Fetch data
  const response = await axios.get(
    "https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users"
  );

  return response.data;
});

//PATCH REQUEST HANDLER
export const patchResource = createAsyncThunk(
  "staff/patchResource",
  async (data, thunkApi) => {
    const response = await axios.patch(
      ` https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${data.id}`,
      data
    );

    return response.data;
  }
);
const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: {
    [getStaff.fulfilled]: (state, { payload }) => {
      state.staff = payload;
      state.isLoading = false;
    },
    [getStaff.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getStaff.rejected]: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export default staffSlice.reducer;

export const staffSelector = (state) => state.staff;
