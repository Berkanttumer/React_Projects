import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from './TMDB/tmdbApiSlice';
import popularShowsReducer from './TMDB/showsSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularShows: popularShowsReducer,
  },
});
