import React from 'react';

import StarIcon from '@mui/icons-material/Star';
import { products } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import Card from './Card';

const ProductsSlider = ({ type }) => {
  return (
    <section
      className={`mb-16 ${type == 'products' ? 'products' : 'featured'}`}
    >
      <div className="container">
        <div className="top-title flex items-center justify-center flex-col">
          <h3 className="text-3xl font-bold mb-1">
            {type == 'products' ? 'New Arrivals ' : 'Featured Products'}
          </h3>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div>
          <ul className="product-list mt-9">
            <Swiper
              initialSlide={0}
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
              {products.map((data) => (
                <SwiperSlide key={data.id}>
                  <Card data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
