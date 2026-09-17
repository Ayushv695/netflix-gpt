import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie Card" className="w-48" />
    </div>
  );
};

export default MovieCard;
