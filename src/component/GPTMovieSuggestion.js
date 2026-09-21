import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { gptMovieResults, gptMovieNames } = useSelector((store) => store.gpt);

  if (!gptMovieNames) return null;

  return (
    <div className="m-4 p-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieResults[index].results}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
