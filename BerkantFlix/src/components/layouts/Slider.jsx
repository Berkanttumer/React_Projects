import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { Link } from 'react-router-dom';
import { PopularContext } from '../../context/PopularProvider';

const Slider = () => {
  const { popularMovies } = useContext(PopularContext);

  return (
    <div className="mt-36 mr-10 ml-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        {popularMovies.map((movie) => (
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
