import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "../features/shoes/shoeSlice";

export const store = configureStore({
  reducer: {
    shoes: shoeReducer,
  },
});
