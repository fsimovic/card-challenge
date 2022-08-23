import { configureStore } from "@reduxjs/toolkit";
import subscribersSlice from "../features/subscribers/subscribersSlice";

export const store = configureStore({
  reducer: {
    subscribers: subscribersSlice,
  },
});
