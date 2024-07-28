import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.latestMovies && (
      <div className="bg-black">
        <div className=" md:-mt-40 pl-4 md:pl-20 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.latestMovies} />
          <MovieList title={"Trending"} movies={movies.latestMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.latestMovies} />
          <MovieList title={"Horror"} movies={movies.latestMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
