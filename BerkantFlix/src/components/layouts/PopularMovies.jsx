import React, { useContext, useEffect } from 'react';
import Card from './Card';

import { PopularContext } from '../../context/PopularProvider';

const PopularMovies = () => {
  const { popularMovies } = useContext(PopularContext);

  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Popular Movies
      </h1>
      <div className="cards gap-5">
        {popularMovies.map((movie) => (
          <Card key={movie.id} result={movie} type="movie" />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
