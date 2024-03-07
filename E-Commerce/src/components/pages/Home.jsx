import React, { useEffect, useState } from 'react';

import Policy from '../layouts/Policy';
import Campaign from '../layouts/Campaign';
import Brands from '../layouts/Brands';
import Blog from './Blog';

import MultiCampaign from '../layouts/MultiCampaign';
import ProductsSlider from '../layouts/ProductsSlider';
import FeaturedProducts from '../layouts/FeaturedProducts';
import Slider from '../layouts/Slider';
import Categories from '../layouts/Categories';
import ModalPage from '../layouts/ModalPage';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleOpen = () => {};
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <ModalPage
          handleOpen={handleOpen}
          open={openModal}
          handleClose={handleClose}
        />
      )}

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
