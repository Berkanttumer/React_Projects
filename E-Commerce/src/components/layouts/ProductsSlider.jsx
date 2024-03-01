import React from 'react';

import StarIcon from '@mui/icons-material/Star';
import { products } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

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
                  <li className="flex flex-col items-center">
                    <div className="relative">
                      <a href="">
                        <img src={data.img.thumbs[0]} alt="" />
                      </a>
                      <div className="rounded-full absolute top-2 right-2  bg-red-700 w-9 h-9 flex items-center justify-center">
                        <span className=" text-xs ">%{data.discount}</span>
                      </div>
                    </div>
                    <div className="product-info pt-5 items-center flex flex-col">
                      <div>
                        <h3>{data.title}</h3>
                      </div>
                      <div className="flex pt-3">
                        <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                        <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                        <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                        <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                        <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                      </div>
                      <div className="pt-3 flex gap-2">
                        <strong className="text-red-700 text-lg">
                          ${data.price.newPrice.toFixed(2)}
                        </strong>
                        <strong className="text-gray-600 text-xs line-through">
                          ${data.price.oldPrice.toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  </li>
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
