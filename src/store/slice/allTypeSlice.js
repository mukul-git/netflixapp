import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB_BASE_URL } from "../../utils/constants";
import axios from "axios";

const initialState = {
  allTrending: [],
  genresLoading: false,
  genres: [],
  error: [],
};

export const fetchAllTrending = createAsyncThunk("allType", async () => {
  const { data: trendingAll } = await axios.get(
    `${TMDB_BASE_URL}/trending/all/day?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTVkMDE4ZjkwNTdlMGU4MTkwMjZlNWE5OTRjZmU3YSIsInN1YiI6IjY1YzAwZDIyMTJjNjA0MDE3YzAyZThlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hkWgosxH06YCy4JbOYyH0SqyB2Of7pVognF-d7SGNnc",
      },
    }
  );
  return trendingAll;
});

export const allTypeSlice = createSlice({
  name: "allType",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllTrending.fulfilled, (state, action) => {
      state.allTrending = action.payload;
    });
  },
});

export default allTypeSlice.reducer;
export const { setAllType } = allTypeSlice.actions;
