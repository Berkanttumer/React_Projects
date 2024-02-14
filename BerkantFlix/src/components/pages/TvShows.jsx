import React from 'react';
import SliderShows from '../layouts/SliderShows';
import TopRatedShows from '../layouts/TopRatedShows';
import PopularTV from '../layouts/PopularTV';

const TvShows = () => {
  return (
    <>
      <SliderShows />
      <TopRatedShows />
      <PopularTV />
    </>
  );
};

export default TvShows;
