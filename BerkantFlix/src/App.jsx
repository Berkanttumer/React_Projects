import { useState } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Swiper from './components/layouts/Swiper';
import PopularMovies from './components/layouts/PopularMovies';
import PopularTV from './components/layouts/PopularTV';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import TvShows from './components/pages/TvShows';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
      </Routes>
    </>
  );
}

export default App;
