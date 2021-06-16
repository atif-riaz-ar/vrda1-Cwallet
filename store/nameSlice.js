import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: "",
  },
  reducers: {
    setName: ((state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }),
  },
});

export const { setName } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
