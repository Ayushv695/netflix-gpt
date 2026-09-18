import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BG_URL} alt="" className="w-screen" />
      </div>
      <GPTSearchBar></GPTSearchBar>
    </div>
  );
};

export default GPTSearch;
