import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

const Card = ({ movie }) => {
  return (
    <div>
      <div key={movie?.id} className="card">
        <Link to={`/MovieDetails/${movie?.id}`} className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
          />
        </Link>
        <div className="card-info">
          <h3>{movie?.title}</h3>
          <p>{movie?.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
