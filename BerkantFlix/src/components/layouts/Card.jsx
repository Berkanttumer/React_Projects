import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  console.log({ movie });
  return (
    <Link to={`/MovieDetails/${movie?.id}`} className="card">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </div>
      <h2 className="text-center text-2xl">{movie?.title}</h2>
    </Link>
  );
};

export default Card;
