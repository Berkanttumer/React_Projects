import React from 'react';

import PopularMovies from '../layouts/PopularMovies';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';
import UpcomingMovies from '../layouts/UpcomingMovies';

const Movies = () => {
  return (
    <>
      <Slider />
      <UpcomingMovies />
      <PopularMovies />
      <Footer />
    </>
  );
};

export default Movies;
