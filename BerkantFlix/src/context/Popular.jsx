import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const PopularContext = createContext();

const initialState = {
  popularMovies: [],
  popularShows: [],
};

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const popularReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_MOVIES':
      return { ...state, popularMovies: action.payload };

    case 'FETCH_POPULAR_SHOWS':
      return { ...state, popularShows: action.payload };
    default:
      throw new Error(error);
  }
};

export const PopularProvider = ({ children }) => {
  const [state, dispatch] = useReducer(popularReducer, initialState);
  const popularContext = {
    popularMovies: state.popularMovies,
    popularShows: state.popularShows,
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = res.data;
      dispatch({ type: 'FETCH_POPULAR_MOVIES', payload: data.results });
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const fetchPopularShows = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = res.data;
      dispatch({ type: 'FETCH_POPULAR_SHOWS', payload: data.results });
    };

    fetchPopularShows();
  }, []);

  return (
    <PopularContext.Provider value={popularContext}>
      {children}
    </PopularContext.Provider>
  );
};

export default PopularProvider;
