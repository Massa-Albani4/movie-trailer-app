import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import searchIcon from "./search-icon.svg";

function App() {
  return (
    <div className="h-screen flex font-body justify-center bg-dark-green">
      <div className="flex flex-col items-center mt-44 w-[87%]">
        <h1 className="text-xl mb-[1.38rem] text-light-green">
          search for any movies/shows
        </h1>
        <div
          className="border-[1px] w-[84%] mb-14 cursor-pointer flex flex-row bg-dark-green rounded-[5px] px-[.65rem] py-[.38rem] text-light-green"
          autoComplete="off"
        >
          <input
            className="bg-transparent w-full focus:outline-none focus:ring-0 placeholder:text-light-green placeholder:text-xs text-xs"
            type="text"
            placeholder="Search"
          />
          <img className="size-3 mt-[.1rem]" src={searchIcon} alt="" />
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={"100%"}
          height={"18rem"}
        />
      </div>
    </div>
  );
}

export default App;
