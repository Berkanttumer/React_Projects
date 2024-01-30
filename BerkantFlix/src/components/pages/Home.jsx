import React from 'react';
import Header from '../layouts/Header';
import Swiper from '../layouts/Swiper';
import PopularMovies from '../layouts/PopularMovies';
import PopularTV from '../layouts/PopularTV';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <>
      <Swiper />
      <PopularMovies />
      <PopularTV />
      <Footer />
    </>
  );
};

export default Home;
