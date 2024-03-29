import React from 'react';

import PopularMovies from '../layouts/PopularMovies';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';
import UpcomingMovies from '../layouts/UpComingMovies';

const Movies = () => {
  return (
    <>
      <Slider />
      <UpcomingMovies />
      <PopularMovies />
    </>
  );
};

export default Movies;
