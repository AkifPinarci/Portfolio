import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import colorSlice from "../features/color/colorSlice";
import countrySlice from "../features/country/countrySlice";

export const store = configureStore({
  reducer: {
    country: countrySlice,
    color: colorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
