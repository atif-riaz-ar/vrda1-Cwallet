import {createSlice,PayloadAction} from "@reduxjs/toolkit";

const counterSlice =createSlice({
  name:"counter",
  initialState:{
    counter:0,
  },
  reducers:{
    increment:(state,action)=>{
      state.counter = state.counter + 2
    },
    decrement:(state,action)=>{
      state.counter=state.counter-action.payload
    }
  }
})
export const {increment,decrement}=counterSlice.actions;
export const counterReducer = counterSlice.reducer;
