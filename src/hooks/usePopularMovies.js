import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const json = await response.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
