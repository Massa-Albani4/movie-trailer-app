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
    <div className="h-screen flex flex-col font-body justify-center items-center bg-black">
      <div className="flex flex-col items-center 2xl:mt-1 w-[87%] 2xl:w-[31%]">
        <h1 className="text-xl 2xl:text-[2rem] lg:text-2xl mb-[1.38rem] 2xl:mb-8 text-white">
          search for any movies/shows
        </h1>
        <div
          className="border-[1px] w-[84%] lg:w-[28%] md:w-[43%] xl:py-2 xl:px-4 2xl:w-full mb-14 2xl:mb-[4.88rem] cursor-pointer flex flex-row rounded-[5px] px-3 2xl:px-5 py-[.3rem] 2xl:py-[.5rem] text-light-green"
          autoComplete="off"
        >
          <input
            className="bg-transparent pt-[.1rem] w-full flex justify-center items-center focus:outline-none focus:ring-0 placeholder:text-white placeholder:text-sm 2xl:placeholder:text-base xl:placeholder:text-base 2xl:mb-[.13rem] text-xs lg:text-sm 2xl:text-xl text-white"
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
              className="size-5 2xl:size-5 2xl:h-10"
              src={searchIcon}
              alt="Search icon"
            />
          </button>
        </div>
      </div>
      <div className="w-[85%] lg:w-[45%] lg:h-[16.2rem] xl:w-[37%] xl:h-80 2xl:w-[20%] h-[19rem] mb-24 lg:mb-5 2xl:h-[20rem]">
        <ReactPlayer url={videoURL} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
}

export default App;
