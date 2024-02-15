import { Link } from 'react-router-dom';

const Card = ({ result, type }) => {
  console.log(type);

  return type === 'movie' ? (
    <div key={result?.id} className="card">
      <Link to={`/MovieDetails/${result?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`}
          alt={result?.title}
        />
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
    <div key={result?.id} className="card">
      <Link to={`/ShowDetails/${result?.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${result?.poster_path}`}
          alt={result?.name}
        />
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
