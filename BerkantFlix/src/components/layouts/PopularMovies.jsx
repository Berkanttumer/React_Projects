import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = '3e2ad5311da9fce573c7f1bfb30b2d81';

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = res.data;
    setMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Popular Movies
      </h1>
      <div className="cards">
        {movies.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
      ;
    </div>
  );
};

export default PopularMovies;
