import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../firebase';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../ContextAPI/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = useContext(AuthContext);

  const productID = doc(db, 'users', `${user?.email}`);
  const saveProduct = async () => {
    if (user?.email) {
      if (favorite) {
        return;
      }
      setFavorite(!favorite);
      setSaved(true);
      await updateDoc(productID, {
        savedFavorites: arrayUnion({
          id: data.id,
          title: data.title,
          img: {
            thumbs: [data.img.thumbs[0], data.img.thumbs[1]],
          },
          price: {
            oldPrice: data.price.oldPrice,
            newPrice: data.price.newPrice,
          },
          discount: data.discount,
        }),
      });
    } else {
      toast.error('Please login to add favorites');
    }
  };

  useEffect(() => {
    const checkFavorite = async () => {
      const docSnapshot = await getDoc(productID);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        const isFavorite = userData.savedFavorites.some(
          (product) => product.id === data?.id
        );
        setFavorite(isFavorite);
      }
    };

    if (user?.email) {
      checkFavorite();
    }
  }, [user?.email, data?.id]);

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
                onClick={saveProduct}
              />
            ) : (
              <FavoriteBorderIcon
                className="absolute top-2 left-2 text-black cursor-pointer"
                onClick={saveProduct}
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
