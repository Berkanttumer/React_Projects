import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { css } from '@emotion/react';
import { ModalContext } from '../../ContextAPI/ModalProvider';
import SearchIcon from '@mui/icons-material/Search';
import { products } from '../../data';
import Card from './Card';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Key } from '@mui/icons-material';

const SearchModal = () => {
  const { handleCloseSearch, openSearch } = useContext(ModalContext);
  const [searchValue, setSearchValue] = useState('');
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue);
  });

  useEffect(() => {
    setSearchValue('');
  }, [openSearch]);

  const style = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 540px;
    width: 800px;
    background-color: black;
    outline: none;

    // @media (max-width: 900px) {
    //   width: 550px;
    //   height: 440px;
    // }

    // @media (max-width: 1200px) {
    //   width: 550px;
    //   height: 440px;
    // }
    // @media (max-width: 1500px) {
    //   width: 600px;
    //   height: 440px;
    // }

    @media (max-width: 400px) {
      width: 350px;
      height: 450px;
      top: 50%;
      left: 50%;
      .modal-wrapper {
        display: flex;
        flex-direction: column;
      }
      img {
        display: none;
      }
    }
  `;
  return (
    <Modal
      className=" "
      open={openSearch}
      onClose={handleCloseSearch}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-wrapper p-9">
          <div className="w-full flex flex-col">
            <Typography
              id="modal-modal-title"
              variant="h5"
              className="!font-bold !text-3xl"
            >
              Search for products
            </Typography>
            <Typography
              id="modal-modal-subtitle"
              variant="span"
              className="!font-bold text-[14px] pb-3 text-gray-500 border-b border-gray-500"
            >
              Start typing to see products you are looking for.
            </Typography>
            <form action="" className="mt-6  border-gray-500 relative ">
              <input
                type="text"
                className="w-full outline-none text-black p-4 max-h-8 text-[14px]"
                onChange={(e) =>
                  setSearchValue(e.target.value.trim().toLowerCase())
                }
              />

              <button className="absolute right-2 top-1 text-black ">
                <SearchIcon />
              </button>
            </form>
            <div className="mt-6 ">
              <h3 className="border border-gray-600 p-4 font-bold">
                RESULTS FROM PRODUCTS
              </h3>
              <div className="search-card flex gap-4 ">
                {searchValue
                  ? filteredProducts.map((product) => {
                      return (
                        <div className="flex flex-col mt-6" key={product.id}>
                          <div className="products-img relative flex justify-center">
                            <Link
                              to={`/Details/${product.id}`}
                              onClick={handleCloseSearch}
                            >
                              <img
                                src={`/${product.img.thumbs[0]}`}
                                alt=""
                                className="image1"
                              />
                              <img
                                src={`/${product.img.thumbs[1]}`}
                                alt=""
                                className="image2"
                              />
                            </Link>
                            <div className="rounded-full absolute top-2 right-2  bg-red-700 w-9 h-9 flex items-center justify-center">
                              <span className=" text-xs ">
                                %{product.discount}
                              </span>
                            </div>
                            <div></div>
                          </div>
                          <div className="product-info pt-5 items-center flex flex-col">
                            <div>
                              <h3>{product.title}</h3>
                            </div>

                            <div className="pt-3 flex gap-2">
                              <strong className="text-red-700 text-lg">
                                ${product.price.newPrice.toFixed(2)}
                              </strong>
                              <strong className="text-gray-600 text-xs line-through">
                                ${product.price.oldPrice.toFixed(2)}
                              </strong>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : products.map((data) => {
                      return (
                        <div className="flex flex-col mt-6" key={data.id}>
                          <div className="products-img relative flex justify-center">
                            <Link
                              to={`/Details/${data.id}`}
                              onClick={handleCloseSearch}
                            >
                              <img
                                src={`/${data.img.thumbs[0]}`}
                                alt=""
                                className="image1"
                              />
                              <img
                                src={`/${data.img.thumbs[1]}`}
                                alt=""
                                className="image2"
                              />
                            </Link>
                            <div className="rounded-full absolute top-2 right-2  bg-red-700 w-9 h-9 flex items-center justify-center">
                              <span className=" text-xs ">
                                %{data.discount}
                              </span>
                            </div>
                            <div></div>
                          </div>
                          <div className="product-info pt-5 items-center flex flex-col">
                            <div>
                              <h3>{data.title}</h3>
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
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
        <CloseIcon
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleCloseSearch}
        />
      </Box>
    </Modal>
  );
};

export default SearchModal;
