import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieResults) return null;

  return (
    <div className="p-4 m-4  text-white ">
      <div>
        <MovieList title="Suggessions" movies={movieResults} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
