import React from 'react';
import image from '../../assets/no-image.jpg';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';

const CardForFavorites = ({ result, type, movies }) => {
  const { user } = UserAuth();
  const movieRef = doc(db, 'users', `${user?.email}`);
  const deleteShow = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieRef, {
        savedMoviesOrShows: result,
      });
    } catch (error) {}
  };

  const noImage = image;
  return type === 'movie' ? (
    <div key={result?.id} className="card relative">
      <CloseIcon
        className="absolute top-3 left-2 hover:cursor-pointer hover:text-red-600"
        onClick={() => {
          deleteShow(result?.id);
        }}
      />
      <Link to={`/MovieDetails/${result?.id}`}>
        {result.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`}
            alt={result?.title}
          />
        ) : (
          <img src={noImage} />
        )}
      </Link>
      <h2 className="font-bold">{result?.title}</h2>
      <div className="card-info flex justify-between items-center"></div>
    </div>
  ) : (
    <div key={result?.id} className="card relative">
      <CloseIcon
        className="absolute top-3 left-2 hover:cursor-pointer hover:text-red-600"
        onClick={() => {
          deleteShow(result?.id);
        }}
      />
      <Link to={`/ShowDetails/${result?.id}`}>
        {result.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`}
            alt={result?.title}
          />
        ) : (
          <img src={noImage} />
        )}
      </Link>
      <h2 className="font-bold">{result?.title}</h2>
      <div className="card-info flex justify-between items-center"></div>
    </div>
  );
};

export default CardForFavorites;
