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
          className="text-light-green mb-14 flex w-[84%] cursor-pointer flex-row rounded-[5px] border-[1px] px-3 pb-[.3rem] pt-[.1rem] sm:mb-10 sm:h-8 sm:w-72 sm:px-3 sm:pb-1 md:mb-2 lg:mb-5 lg:w-80 xl:mb-2 xl:h-[2.1rem] xl:w-full xl:px-3 xl:pb-[.4rem]"
          autoComplete="off"
        >
          <input
            className="flex w-full items-center justify-center bg-transparent pt-[.1rem] text-xs text-white placeholder:text-sm placeholder:text-white focus:outline-none focus:ring-0 sm:pt-[.2rem] sm:text-sm sm:placeholder:text-sm md:text-sm md:placeholder:text-sm lg:w-[28rem] lg:text-sm xl:w-full xl:text-base xl:placeholder:text-base 2xl:mb-[.13rem] 2xl:text-xl 2xl:placeholder:text-base"
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
              className="size-5 sm:mb-0 sm:mt-[.2rem] sm:size-4 lg:mt-0 lg:size-7 xl:mt-1 xl:size-5"
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
