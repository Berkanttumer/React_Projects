import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const ShowsCard = ({ show }) => {
  return (
    <div key={show?.id} className="card">
      <Link to={`/ShowDetails/${show?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${show?.poster_path}`}
          alt={show?.name}
        />
      </Link>
      <h2 className="font-bold">{show?.name}</h2>
      <div className="card-info flex justify-between items-center">
        <div className="flex gap-2">
          <p>
            <i className="fas fa-star text-[#dc1a28]"></i>
          </p>
          <p>{show.vote_average?.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowsCard;
