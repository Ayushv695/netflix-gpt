import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovieResults: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieResults = movieResults;
      state.gptMovieNames = movieNames;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
