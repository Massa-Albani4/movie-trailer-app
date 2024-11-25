import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";

function App() {
  return (
    <div className="h-screen flex font-body justify-center items-center bg-dark-green">
      <div className="flex flex-col">
        <h1 className="text-xl text-light-green">
          search for any movies/shows
        </h1>
        <input className="border-2 border-light-green" type="search" />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          controls={true}
        />
      </div>
    </div>
  );
}

export default App;
