import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularShows,
  getPopularShowsData,
} from '../../redux/TMDB/showsSlice';
import { Link } from 'react-router-dom';

const SliderShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularShows());
  }, [dispatch]);

  const Shows = useSelector(getPopularShowsData);

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
        {Shows.map((show) => (
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
