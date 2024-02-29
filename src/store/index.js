import { configureStore } from "@reduxjs/toolkit";
import netflixReducer from "./slice/moviesSlice";
import allTypeReducer from "./slice/allTypeSlice";

export const store = configureStore({
  reducer: {
    netflix: netflixReducer,
    allType: allTypeReducer,
  },
});
