import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import searchIcon from "./search-icon.svg";

function App() {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable
  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  return (
    <div className="h-screen flex flex-col font-body justify-center items-center bg-blue">
      <div className="flex flex-col items-center xl:mt-1 w-[87%] xl:w-[31%]">
        <h1 className="text-xl xl:text-[2rem] lg:text-2xl mb-[1.38rem] xl:mb-8 text-white">
          search for any movies/shows
        </h1>
        <div
          className="border-[1px] w-[84%] lg:w-[37%] xl:w-full mb-14 xl:mb-[4.88rem] cursor-pointer flex flex-row rounded-[5px] px-3 xl:px-5 py-[.38rem] xl:py-[.38rem] text-light-green"
          autoComplete="off"
        >
          <input
            className="bg-transparent w-full flex justify-center items-center focus:outline-none focus:ring-0 placeholder:text-white placeholder:text-xs xl:placeholder:text-base xl:mb-[.13rem] text-xs xl:text-base text-white"
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
              className="size-[.9rem] xl:size-5"
              src={searchIcon}
              alt="Search icon"
            />
          </button>
        </div>
      </div>
      <div className="w-[85%] lg:w-[45%] lg:h-[16.2rem] xl:w-[40%] h-[19rem] mb-24 lg:mb-5 xl:h-[20rem]">
        <ReactPlayer url={videoURL} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
}

export default App;
