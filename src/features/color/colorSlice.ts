import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { ColorMode } from "../../types/color";

const initialState: ColorMode = {
  mode: "dark",
};

const colorSlice = createSlice({
  name: "color",
  initialState: initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const { toggleColorMode } = colorSlice.actions;
export default colorSlice.reducer;
