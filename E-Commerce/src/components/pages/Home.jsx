import React from 'react';
import Swiper from '../layouts/Swiper';
import Policy from '../layouts/Policy';
import Campaign from '../layouts/Campaign';
import Brands from '../layouts/Brands';
import Blog from '../layouts/Blog';
import Products from '../layouts/Products';

const Home = () => {
  return (
    <>
      <Swiper />
      <Products />
      <Blog />
      <Brands />
      <Campaign />
      <Policy />
    </>
  );
};

export default Home;
