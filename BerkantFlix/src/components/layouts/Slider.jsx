import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularMovies,
  getPopularMoviesData,
} from '../../redux/TMDB/tmdbApiSlice';

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const movies = useSelector(getPopularMoviesData);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      freeMode={true}
      loop={true}
      autoplay={true}
    >
      <div>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Slider;
