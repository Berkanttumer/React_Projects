import { Link } from 'react-router-dom';
import image from '../../assets/no-image.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ result, type }) => {
  const noImage = image;
  console.log(type);
  const [favorite, setFavorite] = useState(false);

  const addFavorite = () => {
    setFavorite(true);
  };

  return type === 'movie' ? (
    <div key={result?.id} className="card relative">
      {!favorite ? (
        <FavoriteBorderIcon
          className="absolute top-5 !w-[20px] !h-[20px] left-3 hover:cursor-pointer"
          onClick={addFavorite}
        />
      ) : (
        <FavoriteIcon
          className="absolute top-5 !w-[20px] !h-[20px] left-3 hover:cursor-pointer"
          onClick={addFavorite}
        />
      )}

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
      <div className="card-info flex justify-between items-center">
        <div className="flex gap-2">
          <p>
            <i className="fas fa-star text-[#dc1a28]"></i>
          </p>
          <p>{result?.vote_average?.toFixed(1)}</p>
        </div>
        <div>
          <p>{result?.release_date?.split('-')[0]}</p>
        </div>
      </div>
    </div>
  ) : (
    <div key={result?.id} className="card relative">
      {!favorite ? (
        <FavoriteBorderIcon
          className="absolute top-5 !w-[20px] !h-[20px] left-3 hover:cursor-pointer"
          onClick={addFavorite}
        />
      ) : (
        <FavoriteIcon
          className="absolute top-5 !w-[20px] !h-[20px] left-3 hover:cursor-pointer"
          onClick={addFavorite}
        />
      )}
      <Link to={`/ShowDetails/${result?.id}`}>
        {result.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`}
            alt={result?.name}
          />
        ) : (
          <img src={noImage} />
        )}
      </Link>
      <h2 className="font-bold">{result?.name}</h2>
      <div className="card-info flex justify-between items-center">
        <div className="flex gap-2">
          <p>
            <i className="fas fa-star text-[#dc1a28]"></i>
          </p>
          <p>{result?.vote_average?.toFixed(1)}</p>
        </div>
        <div>
          <p>{result?.first_air_date?.split('-')[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
