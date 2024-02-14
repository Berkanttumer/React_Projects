import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularShowsData } from '../../redux/TMDB/showsSlice';
import ShowsCard from './showsCard';

const PopularTV = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularShowsData());
  }, [dispatch]);

  const shows = useSelector(getPopularShowsData);
  return (
    <>
      <h1 className="text-center uppercase text-2xl font-bold mb-12">
        PopularTV
      </h1>
      <div className="cards gap-5">
        {shows?.map((show) => (
          <ShowsCard key={show.id} show={show} />
        ))}
      </div>
    </>
  );
};

export default PopularTV;
