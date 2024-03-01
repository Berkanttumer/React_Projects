import React from 'react';

import Policy from '../layouts/Policy';
import Campaign from '../layouts/Campaign';
import Brands from '../layouts/Brands';
import Blog from '../layouts/Blog';

import MultiCampaign from '../layouts/MultiCampaign';
import ProductsSlider from '../layouts/ProductsSlider';
import FeaturedProducts from '../layouts/FeaturedProducts';
import Slider from '../layouts/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts />
      <MultiCampaign />
      <ProductsSlider type="products" />
      <Blog />
      <Brands />
      <Campaign />
      <Policy />
    </>
  );
};

export default Home;
