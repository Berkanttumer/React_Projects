import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from './TMDB/moviesSlice';
import popularShowsReducer from './TMDB/showsSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularShows: popularShowsReducer,
  },
});
