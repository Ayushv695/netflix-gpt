import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constant";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img src={BG_URL} alt="" className="w-screen" />
      </div>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
  );
};

export default GPTSearch;
