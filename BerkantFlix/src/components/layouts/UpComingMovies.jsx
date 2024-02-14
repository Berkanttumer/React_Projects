import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const UpcomingMovies = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
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
        Upcoming{' '}
      </h1>
      <div className="cards gap-5">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default UpcomingMovies;
