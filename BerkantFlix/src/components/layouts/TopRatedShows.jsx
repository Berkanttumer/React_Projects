import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const TopRatedShows = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const [shows, setShows] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    setShows(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Top Rated
      </h1>
      <div className="cards gap-5">
        {shows.map((show) => {
          return <Card key={show.id} result={show} type="show" />;
        })}
      </div>
    </div>
  );
};

export default TopRatedShows;
