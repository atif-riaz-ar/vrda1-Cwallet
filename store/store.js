import { configureStore } from '@reduxjs/toolkit';
import {nameReducer} from './nameSlice';
import {counterReducer} from "./counterSlice";

export const store = configureStore({
  reducer: {
    nameReducer,
    counterReducer,
  },
});

