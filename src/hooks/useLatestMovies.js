import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addLatestMovies,
  addTrendingMovies,
  addUpcommingMovies,
} from "../utils/moviesSlice";

const useLatestMovies = () => {
  const dispatch = useDispatch();

  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1", // tmdb api
      API_OPTIONS
    );
    const latestMoviesJson = await data.json();
    const latestMovies = latestMoviesJson.results;
    dispatch(addLatestMovies(latestMovies));
  };

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day", // tmdb api
      API_OPTIONS
    );
    const latestMoviesJson = await data.json();
    const latestMovies = latestMoviesJson.results;
    dispatch(addTrendingMovies(latestMovies));
  };

  const getUpcommingMOvies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1", // tmdb api
      API_OPTIONS
    );
    const latestMoviesJson = await data.json();
    const latestMovies = latestMoviesJson.results;
    dispatch(addUpcommingMovies(latestMovies));
  };

  useEffect(() => {
    getLatestMovies();
    getTrendingMovies();
    getUpcommingMOvies();
  }, []);
};

export default useLatestMovies;
