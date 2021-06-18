import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: ((state, action: PayloadAction<string>) => {
      state.name = action.payload;

    }),
    setEmail:((state,action)=>{
      state.email = action.payload;
    })
  },


});

export const { setName ,setEmail} = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
export const emailReducer = nameSlice.reducer;
