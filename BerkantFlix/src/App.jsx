import { useState } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Swiper from './components/layouts/Swiper';
import PopularMovies from './components/layouts/PopularMovies';
import PopularTV from './components/layouts/PopularTV';

function App() {
  return (
    <>
      <Header />
      <Swiper />
      <PopularMovies />
      <PopularTV />
      <Footer />
    </>
  );
}

export default App;
