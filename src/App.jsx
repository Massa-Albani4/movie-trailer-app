import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import searchIcon from "./search-icon.svg";

function App() {
  return (
    <div className="h-screen flex font-body justify-center bg-dark-green">
      <div className="flex flex-col items-center mt-44 w-[87%] xl:w-[31%]">
        <h1 className="text-xl xl:text-[2rem] mb-[1.38rem] xl:mb-[4.5rem] text-white">
          search for any movies/shows
        </h1>
        <div
          className="border-[1px] w-[84%] xl:w-full mb-14 xl:mb-8 cursor-pointer flex flex-row bg-dark-green rounded-[5px] px-[.65rem] xl:px-5 py-[.38rem] xl:py-[.38rem] text-light-green"
          autoComplete="off"
        >
          <input
            className="bg-transparent w-full flex justify-center items-center focus:outline-none focus:ring-0 placeholder:text-white placeholder:text-xs xl:placeholder:text-base xl:mb-[.13rem] text-xs xl:text-base text-white"
            type="text"
            placeholder="Search"
          />
          <img
            className="size-3 xl:size-4 xl:mt-1 mt-[.1rem]"
            src={searchIcon}
            alt=""
          />
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={"100%"}
          height={"19rem"}
        />
      </div>
    </div>
  );
}

export default App;
