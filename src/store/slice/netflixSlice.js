import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, TMDB_BASE_URL } from "../../utils/constants";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoading: false,
  genres: [],
  error: [],
};

export const getgenres = createAsyncThunk("getgenres", async () => {
  const { data: genres } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=515d018f9057e0e819026e5a994cfe7a"
  );
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US'${
        paging ? `&page=${i}` : ""
      }`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTVkMDE4ZjkwNTdlMGU4MTkwMjZlNWE5OTRjZmU3YSIsInN1YiI6IjY1YzAwZDIyMTJjNjA0MDE3YzAyZThlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hkWgosxH06YCy4JbOYyH0SqyB2Of7pVognF-d7SGNnc",
        },
      }
    );
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);

export const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getgenres.fulfilled, (state, action) => {
      state.genresLoading = false;
      state.genres = action.payload;
    });
    builder.addCase(getgenres.pending, (state, action) => {
      state.genresLoading = true;
    });
    builder.addCase(getgenres.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default netflixSlice.reducer;
export const { setgenres, setMovies } = netflixSlice.actions;
