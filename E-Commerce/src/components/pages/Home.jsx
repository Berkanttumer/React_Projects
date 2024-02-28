import React from 'react';
import Swiper from '../layouts/Swiper';
import Policy from '../layouts/Policy';
import Campaign from '../layouts/Campaign';
import Brands from '../layouts/Brands';

const Home = () => {
  return (
    <>
      <Swiper />
      <Brands />
      <Campaign />
      <Policy />
    </>
  );
};

export default Home;
