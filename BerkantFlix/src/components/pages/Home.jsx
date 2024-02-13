import React from 'react';
import Header from '../layouts/Header';
import PopularMovies from '../layouts/PopularMovies';
import PopularTV from '../layouts/PopularTV';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <PopularMovies />
      <PopularTV />
      <Footer />
    </>
  );
};

export default Home;
