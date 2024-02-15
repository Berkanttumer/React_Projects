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
import ShowDetails from './components/pages/ShowDetails';
import Search from './components/pages/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/ShowDetails/:id" element={<ShowDetails />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
