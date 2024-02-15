import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Card from '../layouts/Card';

const SearchMovie = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search-term');

  const [search, setSearch] = useState([]);
  const searchFetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );
    const data = res.data;
    setSearch(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    searchFetchData();
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="cards gap-5">
        {search.map((result) => {
          return (
            <Card key={result.id} result={result} type={result.media_type} />
          );
        })}
      </div>
    </div>
  );
};

export default SearchMovie;
