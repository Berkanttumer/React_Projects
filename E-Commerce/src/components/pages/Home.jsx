import React from 'react';

import Policy from '../layouts/Policy';
import Campaign from '../layouts/Campaign';
import Brands from '../layouts/Brands';
import Blog from './Blog';

import MultiCampaign from '../layouts/MultiCampaign';
import ProductsSlider from '../layouts/ProductsSlider';
import FeaturedProducts from '../layouts/FeaturedProducts';
import Slider from '../layouts/Slider';
import Categories from '../layouts/Categories';

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <FeaturedProducts />
      <MultiCampaign />
      <ProductsSlider type="products" />
      <Blog type="blogForHome" />
      <Brands />
      <Campaign />
      <Policy />
    </>
  );
};

export default Home;
