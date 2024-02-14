import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularMovies,
  getPopularMoviesData,
} from '../../redux/TMDB/moviesSlice';
import { Link } from 'react-router-dom';

const Slider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const movies = useSelector(getPopularMoviesData);

  return (
    <div className="mt-16 mr-10 ml-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        freeMode={true}
        loop={true}
        autoplay={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/MovieDetails/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
