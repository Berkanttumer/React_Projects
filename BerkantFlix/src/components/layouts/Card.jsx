import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

const Card = ({ movie }) => {
  return (
    <div key={movie?.id} className="card">
      <Link to={`/MovieDetails/${movie?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />
      </Link>
      <h2 className="font-bold">{movie?.title}</h2>
      <div className="card-info flex justify-between items-center">
        <div className="flex gap-2">
          <p>
            <i className="fas fa-star text-[#dc1a28]"></i>
          </p>
          <p>{movie.vote_average?.toFixed(1)}</p>
        </div>
        <div>
          <p>{movie.release_date?.split('-')[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
