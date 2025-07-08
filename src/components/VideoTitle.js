import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div></div>
    </div>
  );
};

export default VideoTitle;
