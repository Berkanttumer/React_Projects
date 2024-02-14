import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularShows,
  getPopularShowsData,
} from '../../redux/TMDB/showsSlice';
import ShowsCard from './showsCard';

const PopularTV = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularShows());
  }, [dispatch]);

  const shows = useSelector(getPopularShowsData);
  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Popular
      </h1>
      <div className="cards gap-5">
        {shows?.map((show) => (
          <ShowsCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default PopularTV;
