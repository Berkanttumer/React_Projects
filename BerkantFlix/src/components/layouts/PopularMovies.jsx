import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularMovies,
  getPopularMoviesData,
} from '../../redux/TMDB/moviesSlice';

const PopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const movies = useSelector(getPopularMoviesData);

  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Popular
      </h1>
      <div className="cards gap-5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
