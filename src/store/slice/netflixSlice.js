import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoading: false,
  genres: [],
  error: [],
};

export const getGeneres = createAsyncThunk("getGeneres", async () => {
  const { data: generes } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=515d018f9057e0e819026e5a994cfe7a"
  );

  return generes;
});

export const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGeneres.fulfilled, (state, action) => {
      state.genresLoading = false;
      state.generes = action.payload;
    });
    builder.addCase(getGeneres.pending, (state, action) => {
      state.genresLoading = true;
    });
    builder.addCase(getGeneres.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default netflixSlice.reducer;
export const { setGeneres } = netflixSlice.actions;
