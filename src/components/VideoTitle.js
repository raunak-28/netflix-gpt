import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white mx-2 rounded-md md:py-2 md:px-8 px-2 py-1 text-sm md:text-lg my-2 md:my-0 text-black hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-50 rounded-md py-2 px-8 text-lg text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
