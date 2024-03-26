import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextAPI/AuthContext';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { db } from '../../firebase';
import CloseIcon from '@mui/icons-material/Close';

const SavedFavorites = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setProducts(doc.data()?.savedFavorites);
    });
  }, [user?.email]);

  const deleteProduct = async (id) => {
    await updateDoc(doc(db, 'users', `${user?.email}`), {
      savedFavorites: products.filter((product) => product.id !== id),
    });
  };

  return products.map((data) => {
    return (
      <div key={data.id}>
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
              <CloseIcon
                className="absolute top-1 left-0 text-black cursor-pointer"
                onClick={() => deleteProduct(data.id)}
              />
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
  });
};

export default SavedFavorites;
