import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularMovies,
  getPopularMoviesData,
} from '../../redux/TMDB/tmdbApiSlice';

const PopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const movies = useSelector(getPopularMoviesData);

  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Popular Movies
      </h1>
      <div className="cards">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
