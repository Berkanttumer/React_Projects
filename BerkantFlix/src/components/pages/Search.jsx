import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Card from '../layouts/Card';

const SearchMovie = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search-term');

  const [search, setSearch] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [prev, setPrev] = useState(1);

  const searchFetchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=${currentPage}&api_key=${API_KEY}`
    );
    const data = res.data;
    setSearch(data.results);
    setTotalResults(data);
    console.log(totalResults.total_results);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    if (totalResults.total_results === 0) {
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    searchFetchData();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    searchFetchData();
  }, [searchTerm]);

  return (
    <div className="container">
      <h2 className="text-center mt-12 mb-12 text-3xl ">
        {search.length} of {totalResults.total_results} Results for{' '}
        <span className="text-[#dc1a28] font-bold uppercase">{searchTerm}</span>
      </h2>
      <div className="cards gap-5">
        {search.map((result) => {
          return (
            <Card key={result.id} result={result} type={result.media_type} />
          );
        })}
      </div>
      <div className="end-wrapper flex justify-between mt-12 items-center mb-12">
        <div className="buttons gap-5 flex">
          <button
            className={
              currentPage < 2 ? 'btn prev hover:cursor-not-allowed' : 'btn prev'
            }
            onClick={handlePrev}
            disabled={currentPage <= 1}
          >
            Prev
          </button>
          <button
            className={
              totalResults.total_results === 0
                ? 'btn next hover:cursor-not-allowed '
                : 'btn next'
            }
            onClick={handleNext}
            disabled={totalResults.total_results === 0}
          >
            Next
          </button>
        </div>
        <div className="page">
          <span>
            Page {currentPage} of {totalResults.total_pages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
