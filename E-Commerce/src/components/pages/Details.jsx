import React, { useState } from 'react';
import product1 from '../../assets/img/products/product1/1.png';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '../../data';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const product = products.find((data) => data.id === Number(id));
  const image = '/' + product.img.thumbs[0];
  const [Selectimage, setSelectImage] = useState(image);
  const [selectColor, setSelectColor] = useState(null);
  const [selectSize, setSelectSize] = useState();
  const [addToCart, setAddToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleImage = (imageUrl) => {
    setSelectImage(imageUrl);
  };

  const SelectColor = (index) => {
    setSelectColor(index);
  };

  const colors = ['blue', 'red', 'green', 'purple'];
  const selectedColor = colors[selectColor];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(colors[selectColor]);
  };

  const SelectSize = (value) => {
    setSelectSize(value);
  };

  const handleCart = () => {
    setAddToCart(true);
  };

  return (
    <section className="details mt-12">
      <div className="container">
        <nav>
          <ul className="flex text-[13px] gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex gap-12 ">
          <div className="img-col w-1/3">
            <div className="details-img">
              <img src={Selectimage} alt="" className="hover:cursor-zoom-in " />
            </div>
            <div className="w-3/4">
              <ol className="mt-6">
                <li>
                  <Swiper
                    className="swiper-details"
                    initialSlide={0}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={10}
                    freeMode={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    {product.img.thumbs.map((data, id) => {
                      return (
                        <SwiperSlide key={id}>
                          <img
                            src={'/' + data}
                            className={
                              Selectimage === '/' + data
                                ? 'border-2 border-[#1d4ed8]'
                                : ''
                            }
                            alt=""
                            onClick={() => handleImage('/' + data)}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </li>
              </ol>
            </div>
          </div>
          <div className="right-col flex flex-col gap-3 w-1/2">
            <div>
              <h1 className="text-3xl font-bold">Analogue Resin Strap</h1>
            </div>
            <div className=" flex items-center gap-5">
              <div>
                <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
              </div>
              <div className="text-xs font-bold ">2 reviews</div>
            </div>
            <div className="text-xl flex gap-5">
              <span className="line-through text-gray-400">$165.00</span>
              <span className="font-bold ">$108.00</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <form className="variations" onSubmit={handleSubmit}>
              <button>gönder</button>
              <div>
                <span>Color</span>
                <div className="colors flex gap-2 mt-2">
                  <div
                    className={`bg-blue-800 w-8 h-8  rounded-full ${
                      selectColor === 0 && 'active-color'
                    }`}
                    onClick={() => SelectColor(0)}
                  >
                    <label className="">
                      <input type="radio" />
                    </label>
                  </div>
                  <div
                    className={`bg-red-600 w-8 h-8  rounded-full ${
                      selectColor === 1 && 'active-color'
                    }`}
                    onClick={() => SelectColor(1)}
                  >
                    <label className=" ">
                      <input type="radio" />
                    </label>
                  </div>
                  <div
                    className={`bg-green-800 w-8 h-8  rounded-full ${
                      selectColor === 2 && 'active-color'
                    }`}
                    onClick={() => SelectColor(2)}
                  >
                    <label className=" ">
                      <input type="radio" />
                    </label>
                  </div>
                  <div
                    className={`bg-purple-950 w-8 h-8  rounded-full ${
                      selectColor === 3 && 'active-color'
                    }`}
                    onClick={() => SelectColor(3)}
                  >
                    <label className=" ">
                      <input type="radio" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span>Size</span>
                <div className="values-list flex gap-5 mt-2 justify-between ">
                  <span
                    className={selectSize === 'xs' ? 'active-size' : ''}
                    onClick={() => SelectSize('xs')}
                  >
                    XS
                  </span>
                  <span
                    className={selectSize === 's' ? 'active-size' : ''}
                    onClick={() => SelectSize('s')}
                  >
                    S
                  </span>
                  <span
                    className={selectSize === 'm' ? 'active-size' : ''}
                    onClick={() => SelectSize('m')}
                  >
                    M
                  </span>
                  <span
                    className={selectSize === 'l' ? 'active-size' : ''}
                    onClick={() => SelectSize('l')}
                  >
                    L
                  </span>
                  <span
                    className={selectSize === 'xl' ? 'active-size' : ''}
                    onClick={() => SelectSize('xl')}
                  >
                    XL
                  </span>
                </div>
              </div>
              <div className="mt-4 flex gap-5 items-center">
                <input
                  type="number"
                  className="w-20 p-2 h-12 text-black outline-none text-sm  "
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                />
                <button
                  className={
                    addToCart
                      ? 'flex  items-center justify-center text-center bg-blue-500 opacity-45 w-full  text-sm h-12'
                      : ' flex  items-center justify-center bg-blue-500 w-full text-sm hover:bg-white hover:text-[#1d4ed8] h-12'
                  }
                  onClick={handleCart}
                  disabled={addToCart}
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
