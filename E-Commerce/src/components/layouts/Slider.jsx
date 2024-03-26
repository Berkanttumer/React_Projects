import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../public/img/slider/slider1.jpg';
import img2 from '../../../public/img/slider/slider2.jpg';
import img3 from '../../../public/img/slider/slider3.jpg';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
  let swiper;
  return (
    <section className="slider mt-8 mb-12 relative">
      <Swiper
        slidesPerView={1}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiperInstance) => {
          swiper = swiperInstance;
        }}
      >
        <div className="slider-text container absolute z-50 top-[35%] text-black left-52">
          <div className="flex flex-col gap-5  mb-6">
            <h3 className="font-bold">SUMMER 2022</h3>
            <h1 className="text-6xl font-bold">Save up to 70%</h1>
          </div>
          <a href="#" className="pl-8 pr-8 pt-3 pb-3 bg-blue-700 text-white">
            Explore Now
          </a>
        </div>

        <button
          onClick={() => swiper.slidePrev()}
          className="slider-button absolute bg-white top-[50%] left-12 z-50 w-14 h-14 rounded-full flex items-center justify-center hover:bg-blue-600"
        >
          <ArrowBackIosNewIcon sx={{ color: 'gray' }} />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="slider-button absolute bg-white top-[50%] right-12  w-14 h-14 rounded-full z-50 flex items-center justify-center hover:bg-blue-600"
        >
          <ArrowForwardIosIcon sx={{ color: 'gray' }} />
        </button>
        <SwiperSlide className="img11 h-[600px] ">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img11">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="img11 ">
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
