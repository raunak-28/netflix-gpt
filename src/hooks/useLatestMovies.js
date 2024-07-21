import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utils/moviesSlice";

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

  useEffect(() => {
    getLatestMovies();
  }, []);
};

export default useLatestMovies;
