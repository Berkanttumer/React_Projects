import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from './TMDB/tmdbApiSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
  },
});
