import { configureStore } from '@reduxjs/toolkit';
import { emailReducer, nameReducer } from "./nameSlice";
import {counterReducer} from "./counterSlice";

export const store = configureStore({
  reducer: {
    nameReducer,
    counterReducer,
    emailReducer,
  },
});

