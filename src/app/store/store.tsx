import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies/movieSlice"
import tvShowsReducer from "./reducers/tvShows/tvShowSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        tvShows: tvShowsReducer      
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;