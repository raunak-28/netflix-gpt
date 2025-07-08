import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const MovieInfo = ({ movie, setShowDetails }) => {
  const [videoKey, setVideoKey] = useState(null);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const displayTrailer = trailers.length ? trailers[0] : json.results[0];
    setVideoKey(displayTrailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className="flex justify-center fixed top-10 left-10 w-[100%] h-[100%]">
      <div
        className="absolute z-[999] w-[70%] overflow-hidden whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-0 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
        aria-labelledby=":r3a:-label"
        aria-describedby="popover-with-image"
        id="popover-with-image"
        role="dialog"
      >
        <div
          className="absolute top-10 right-10 text-white text-2xl cursor-pointer z-999999 "
          onClick={() => {
            setShowDetails(false);
          }}
        >
          X
        </div>
        {videoKey && (
          <iframe
            className="w-[100%] aspect-video"
            src={
              "https://www.youtube.com/embed/" + videoKey + "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MovieInfo;
