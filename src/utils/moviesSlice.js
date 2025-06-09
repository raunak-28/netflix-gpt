import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
    trailerVideo: null,
    popularMovies: null,
    trendingMovies: null,
    upcommingMovies: null,
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
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
  },
});

export const {
  addLatestMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addUpcommingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
