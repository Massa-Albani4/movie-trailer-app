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
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black font-body lg:gap-6 xl:gap-16 xl:pb-20 xl:pt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-7 text-xl text-white md:mb-9 md:text-3xl xl:mb-4 xl:text-3xl 2xl:mb-8 2xl:text-5xl">
          search for any movies/shows
        </h1>
        <div
          className="text-light-green mb-20 flex w-full max-w-full cursor-pointer flex-row rounded-md border-[1px] px-3 sm:mb-10 sm:h-10 md:mb-16 md:h-12 md:rounded-lg md:px-5 xl:my-4 xl:mb-2 xl:h-11 xl:w-80 xl:rounded-md xl:px-4 xl:py-0"
          autoComplete="off"
        >
          <input
            className="my-2 flex w-full items-center justify-center bg-transparent text-base text-white placeholder:text-base placeholder:text-white focus:outline-none focus:ring-0 md:mb-[.6rem] md:text-xl md:placeholder:text-xl lg:w-[28rem] lg:text-sm xl:text-lg xl:placeholder:text-lg 2xl:mb-[.13rem] 2xl:text-xl 2xl:placeholder:text-base"
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
              className="size-6 md:size-7 xl:size-10"
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
