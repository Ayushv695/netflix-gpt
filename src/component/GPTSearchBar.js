import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import geminiai from "../utils/gemini-ai";
import { API_OPTIONS } from "../utils/constant";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesInTMDB = async (movie) => {
    const result = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await result.json();
    // console.log(json);
    return json;
  };

  const handleGeminiSearchClick = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies fro the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, SpiderMan";

    const geminiResults = await geminiai.interactions.create({
      model: "gemini-3.8-flash",
      input: query,
    });

    const movies = geminiResults.output_text.split(",");
    // console.log(movies);
    const promiseArray = movies.map((movie) => searchMoviesInTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGPTMovieResult({ movieNames: movies, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlacceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
