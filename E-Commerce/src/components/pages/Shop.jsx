import React from 'react';
import Categories from '../layouts/Categories';
import ProductsSlider from '../layouts/ProductsSlider';
import Campaign from '../layouts/Campaign';
import FeaturedProducts from '../layouts/FeaturedProducts';

const Shop = () => {
  return (
    <section className="mt-12">
      <Categories />
      <FeaturedProducts />
      <Campaign />
      <ProductsSlider type="products" />
    </section>
  );
};

export default Shop;
