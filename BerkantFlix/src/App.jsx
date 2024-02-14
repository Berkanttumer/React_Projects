import { useState } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import PopularMovies from './components/layouts/PopularMovies';
import PopularTV from './components/layouts/PopularTV';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import TvShows from './components/pages/TvShows';
import Movies from './components/pages/Movies';
import MovieDetails from './components/pages/MovieDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
