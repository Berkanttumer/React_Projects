import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const ShowsCard = ({ show }) => {
  return (
    <div key={show?.id}>
      <Link to={`/ShowDetails/${show?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${show?.poster_path}`}
          alt={show?.title}
        />
      </Link>
      <h2 className="font-bold">{show?.title}</h2>
      <div className="card-info flex justify-between items-center">
        <div className="flex gap-2">
          <p>
            <i className="fas fa-star text-[#dc1a28]"></i>
          </p>
          <p>{show.vote_average?.toFixed(1)}</p>
        </div>
        <div>
          <p>{show.release_date?.split('-')[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowsCard;
