import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShows: [],
};

const tvShowSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    addTvShows: (state, { payload }) => {
      state.tvShows = payload;
    },
  },
});

export const { addTvShows } = tvShowSlice.actions;
export const getAllTvShows = (state: { tvShows: { tvShows: [] } }) =>
  state.tvShows.tvShows;
export default tvShowSlice.reducer;
