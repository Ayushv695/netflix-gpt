import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constant";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="" className="h-screen w-screen object-cover" />
      </div>
      <div className="">
        <GPTSearchBar></GPTSearchBar>
        <GPTMovieSuggestion></GPTMovieSuggestion>
      </div>
    </>
  );
};

export default GPTSearch;
