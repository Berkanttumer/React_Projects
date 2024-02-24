import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { Link } from 'react-router-dom';
import { PopularContext } from '../../context/PopularProvider';

const SliderShows = () => {
  const { popularShows } = useContext(PopularContext);
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
        {popularShows.map((show) => (
          <SwiperSlide key={show.id}>
            <Link to={`/ShowDetails/${show.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderShows;
