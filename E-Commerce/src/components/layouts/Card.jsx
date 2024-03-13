import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  const handlefavorite = () => {
    setFavorite(true);
  };

  return (
    <div>
      <li className="flex flex-col items-center">
        <div className="products-img relative">
          <Link to={`/Details/${data.id}`}>
            <img src={data.img.thumbs[0]} alt="" className="image1" />
            <img src={data.img.thumbs[1]} alt="" className="image2" />
          </Link>
          <div className="rounded-full absolute top-2 right-2  bg-red-700 w-9 h-9 flex items-center justify-center">
            <span className=" text-xs ">%{data.discount}</span>
          </div>
          <div>
            {favorite ? (
              <FavoriteIcon
                className="absolute top-2 left-2 text-red-700 cursor-pointer"
                onClick={handlefavorite}
              />
            ) : (
              <FavoriteBorderIcon
                className="absolute top-2 left-2 text-black cursor-pointer"
                onClick={handlefavorite}
              />
            )}
          </div>
        </div>
        <div className="product-info pt-5 items-center flex flex-col">
          <div>
            <h3>{data.title}</h3>
          </div>
          <div className="flex pt-3">
            <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
            <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
            <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
            <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
            <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
          </div>
          <div className="pt-3 flex gap-2">
            <strong className="text-red-700 text-lg">
              ${data.price.newPrice.toFixed(2)}
            </strong>
            <strong className="text-gray-600 text-xs line-through">
              ${data.price.oldPrice.toFixed(2)}
            </strong>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
