import React from 'react';
import Card from '../layouts/Card';
import { products } from '../../data';

const Favorites = ({ data }) => {
  return (
    <section className="mt-12">
      <div className="container">
        <div>
          <h1 className="text-3xl mb-6">My Favorites</h1>
          <div className="favorites-card border-t pt-6 pb-6 flex gap-5 ">
            {products.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
