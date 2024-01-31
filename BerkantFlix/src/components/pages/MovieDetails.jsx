import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  return (
    <>
      <h1>Movie Details Page</h1>
      <div>{movie?.overview}</div>
    </>
  );
};

export default MovieDetails;
