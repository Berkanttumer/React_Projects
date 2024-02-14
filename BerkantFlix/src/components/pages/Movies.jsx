import React from 'react';

import PopularMovies from '../layouts/PopularMovies';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';

const Movies = () => {
  return (
    <>
      <Slider />
      <PopularMovies />
      <Footer />
    </>
  );
};

export default Movies;
