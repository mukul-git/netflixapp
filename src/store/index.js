import { configureStore } from "@reduxjs/toolkit";
import netflixReducer from "./slice/netflixSlice";

export const store = configureStore({
  reducer: {
    netflix: netflixReducer,
  },
});
