import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
    const movieQuery = searchText.current.value;
    // const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : ${searchText.current.value} . only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    //chatgpt was not showing result due to limitation so directly called tmdb api

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieQuery}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    const tmdbResults = json.results;
    dispatch(addGptMovieResult({ movieNames: [], movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today "
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
          onClick={() => {
            handleGptSearchClick();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
