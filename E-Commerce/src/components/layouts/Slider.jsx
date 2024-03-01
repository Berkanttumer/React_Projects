import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/img/slider/slider1.jpg';
import img2 from '../../assets/img/slider/slider2.jpg';
import img3 from '../../assets/img/slider/slider3.jpg';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const Slider = () => {
  return (
    <div className="mt-12 mb-12">
      <Swiper
        slidesPerView={1}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} style={{}} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
