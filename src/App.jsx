import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import searchIcon from "./search-icon.svg";

function App() {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  /* A function to fetch the required URL
   and storing it inside the videoURL state variable */
  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black font-body md:pt-10 lg:gap-6 lg:pt-4 xl:gap-10 xl:pt-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-[1.38rem] text-xl text-white sm:mb-4 sm:text-lg lg:mb-4 lg:text-2xl 2xl:mb-8 2xl:text-[2rem]">
          search for any movies/shows
        </h1>
        <div
          className="text-light-green mb-14 flex w-[84%] cursor-pointer flex-row rounded-[5px] border-[1px] px-4 sm:mb-10 sm:h-8 sm:w-72 sm:px-3 md:mb-2 lg:mb-5 lg:w-80 xl:my-4 xl:mb-2 xl:h-10 xl:w-80 xl:rounded-md xl:px-4 xl:py-1"
          autoComplete="off"
        >
          <input
            className="flex w-full items-center justify-center bg-transparent text-xs text-white placeholder:text-sm placeholder:text-white focus:outline-none focus:ring-0 sm:text-sm sm:placeholder:text-sm md:text-sm md:placeholder:text-sm lg:w-[28rem] lg:text-sm xl:w-full xl:text-lg xl:placeholder:text-lg 2xl:mb-[.13rem] 2xl:text-xl 2xl:placeholder:text-base"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setVideo(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="border-none bg-transparent focus:outline-none"
            onClick={handleSearch}
          >
            <img
              className="size-5 sm:mb-0 sm:mt-[.2rem] sm:size-4 lg:mt-0 lg:size-7 xl:size-6"
              src={searchIcon}
              alt="Search icon"
            />
          </button>
        </div>
      </div>
      <div className="mb-24 h-[19rem] w-[85%] md:mb-5 lg:mb-2 lg:h-[21rem] lg:w-[58%] xl:h-[22rem] xl:w-[50%] 2xl:h-[20rem] 2xl:w-[20%]">
        <ReactPlayer url={videoURL} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
}

export default App;
