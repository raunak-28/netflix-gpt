import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import MovieInfo from "./MovieInfo";

const MovieCard = ({ posterPath, movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMovieInfo = () => {
    setShowDetails(!showDetails);
    console.log(movie);
  };

  if (!posterPath) return null;
  return (
    <>
      <div
        className="w-36 md:w-48 pr-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1"
        onClick={() => handleMovieInfo()}
      >
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
      {showDetails && (
        <MovieInfo movie={movie} setShowDetails={setShowDetails} />
      )}
    </>
  );
};
export default MovieCard;
