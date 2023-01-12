import { configureStore } from "@reduxjs/toolkit";
import StaffSlice from "../features/StaffSlice";

export const store = configureStore({
  reducer: {
    staff: StaffSlice,
  },
});
