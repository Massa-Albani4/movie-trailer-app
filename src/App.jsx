import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";

function App() {
  return (
    <div className="h-screen flex font-body justify-center bg-dark-green">
      <div className="flex flex-col mt-44">
        <h1 className="text-xl text-light-green">
          search for any movies/shows
        </h1>
        <input className="border-2 border-light-green" type="search" />
      </div>
    </div>
  );
}

export default App;
