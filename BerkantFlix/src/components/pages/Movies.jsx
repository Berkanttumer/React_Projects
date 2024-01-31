import React from 'react';
import Swiper from '../layouts/Swiper';
import PopularMovies from '../layouts/PopularMovies';
import Footer from '../layouts/Footer';

const Movies = () => {
  return (
    <>
      <Swiper />
      <PopularMovies />
      <Footer />
    </>
  );
};

export default Movies;
