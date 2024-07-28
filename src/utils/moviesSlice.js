import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { addLatestMovies, addTrailerVideo, addPopularMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
