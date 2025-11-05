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
    <div className="h-screen flex flex-col font-body md:pt-10 lg:pt-4 xl:pt-0 justify-center items-center bg-black">
      <div className="flex flex-col items-center justify-center w-full xl:gap-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-xl 2xl:text-[2rem] lg:text-2xl mb-[1.38rem] 2xl:mb-8 text-white">
            search for any movies/shows
          </h1>
          <div
            className="border-[1px] w-[84%] xl:w-[24%] lg:w-[28%] xl:px-3 mb-14 lg:mb-5 md:mb-2 xl:mb-2 cursor-pointer flex flex-row rounded-[5px] px-3 xl: pb-[.3rem] pt-[.1rem] text-light-green"
            autoComplete="off"
          >
            <input
              className="bg-transparent pt-[.1rem] w-full xl:w-full flex justify-center items-center focus:outline-none focus:ring-0 placeholder:text-white placeholder:text-sm 2xl:placeholder:text-base md:placeholder:text-sm xl:placeholder:text-base 2xl:mb-[.13rem] text-xs xl:text-base lg:text-sm 2xl:text-xl md:text-sm text-white"
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
              className="bg-transparent border-none focus:outline-none"
              onClick={handleSearch}
            >
              <img
                className="size-5 2xl:size-5 2xl:h-10 mt-1"
                src={searchIcon}
                alt="Search icon"
              />
            </button>
          </div>
        </div>
        <div className="w-[85%] md:w-[60%] md:h-[21rem] lg:h-[16.2rem] xl:w-[50%] xl:h-[22rem] 2xl:w-[20%] h-[19rem] mb-24 lg:mb-2 md:mb-5 2xl:h-[20rem]">
          <ReactPlayer url={videoURL} width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default App;
