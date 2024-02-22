import React, { useContext, useEffect } from 'react';
import Card from './Card';

import { PopularContext } from '../../context/popular';

const PopularTV = () => {
  const { popularShows } = useContext(PopularContext);
  return (
    <div className="container">
      <h1 className="text-center uppercase text-2xl font-bold mb-12 mt-12">
        Popular Shows
      </h1>
      <div className="cards gap-5">
        {popularShows.map((show) => (
          <Card key={show.id} result={show} type="show" />
        ))}
      </div>
    </div>
  );
};

export default PopularTV;
