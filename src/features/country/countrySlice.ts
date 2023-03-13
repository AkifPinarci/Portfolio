import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Country, CountryState } from "../../types/country";
import axios from "axios";
const initialState: CountryState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchCountry = createAsyncThunk(
  "fetchCountry",
  async (name: string) => {
    const response = await axios
      .get<Country[]>(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.data);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.loading = false;
        
        state.data = action.payload;
      })
      .addCase(fetchCountry.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching country";
      });
  },
});

export default countrySlice.reducer;
