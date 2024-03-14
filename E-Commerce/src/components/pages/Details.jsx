import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '../../data';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useParams } from 'react-router-dom';
import profile from '../../assets/img/avatars/avatar1.jpg';
import Campaign from '../layouts/Campaign';

const Details = () => {
  const { id } = useParams();
  const product = products.find((data) => data.id === Number(id));
  const image = '/' + product.img.thumbs[0];
  const [Selectimage, setSelectImage] = useState(image);
  const [selectColor, setSelectColor] = useState(null);
  const [selectSize, setSelectSize] = useState();
  const [addToCart, setAddToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = products.find((data) => data.id === Number(id));
    const image = '/' + product.img.thumbs[0];
    setSelectImage(image);
    setSelectColor(null);
    setSelectSize(undefined);
    setAddToCart(false);
    setQuantity(1);
  }, [id]);

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

  const [tab, setTab] = useState('desc');
  const changeTab = (tab) => {
    setTab(tab);
    const tabElement = document.getElementById(tab);

    // Make the text of the tab bold
    if (tabElement) {
      tabElement.style.fontWeight = '800';
      console.log(tabElement);
    }
  };

  return (
    <>
      <section className="details mt-12 mb-12">
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
                <img
                  src={Selectimage}
                  alt=""
                  className="hover:cursor-zoom-in "
                />
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
                <h1 className="text-3xl font-bold">{product.title}</h1>
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
                <span className="line-through text-gray-400">
                  {`$${product.price.oldPrice.toFixed(2)}`}
                </span>
                <span className="font-bold ">{`$${product.price.newPrice.toFixed(
                  2
                )}`}</span>
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
                        : 'transition-btn flex  items-center justify-center bg-blue-500 w-full text-sm hover:bg-white hover:text-[#1d4ed8] h-12'
                    }
                    onClick={handleCart}
                    disabled={addToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </form>
              <div className="text-xs mt-2">
                <div className="border-b border-gray-700 pb-5">
                  <ul className="flex gap-5">
                    <li>Size Guide</li>
                    <li>Size Guide</li>
                    <li>Size Guide</li>
                  </ul>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <span>
                    SKU: <span className="font-bold">BE45VGRT</span>
                  </span>
                  <span>
                    Categories: <span className="font-bold">Pants , Women</span>
                  </span>
                  <span>Tags: black , white</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-5 border-b pb-5">
              <ul className="tabs flex gap-5">
                <li
                  className={tab === 'desc' ? 'font-bold' : ''}
                  onClick={() => changeTab('desc')}
                >
                  Description
                </li>
                <li
                  className={tab === 'additional' ? 'font-bold' : ''}
                  onClick={() => changeTab('additional')}
                >
                  Additional information
                </li>
                <li
                  className={tab === 'reviews' ? 'font-bold' : ''}
                  onClick={() => changeTab('reviews')}
                >
                  Reviews
                </li>
              </ul>
            </div>
            <div className=" mt-5 text-[14px]">
              <div>
                {tab === 'desc' && (
                  <>
                    <p>
                      Quisque varius diam vel metus mattis, id aliquam diam
                      rhoncus. Proin vitae magna in dui finibus malesuada et at
                      nulla. Morbi elit ex, viverra vitae ante vel, blandit
                      feugiat ligula. Fusce fermentum iaculis nibh, at sodales
                      leo maximus a. Nullam ultricies sodales nunc, in
                      pellentesque lorem mattis quis. Cras imperdiet est in nunc
                      tristique lacinia. Nullam aliquam mauris eu accumsan
                      tincidunt. Suspendisse velit ex, aliquet vel ornare vel,
                      dignissim a tortor.
                    </p>
                    <br />
                    <p>
                      Quisque varius diam vel metus mattis, id aliquam diam
                      rhoncus. Proin vitae magna in dui finibus malesuada et at
                      nulla. Morbi elit ex, viverra vitae ante vel, blandit
                      feugiat ligula. Fusce fermentum iaculis nibh, at sodales
                      leo maximus a. Nullam ultricies sodales nunc, in
                      pellentesque lorem mattis quis. Cras imperdiet est in nunc
                      tristique lacinia. Nullam aliquam mauris eu accumsan
                      tincidunt. Suspendisse velit ex, aliquet vel ornare vel,
                      dignissim a tortor.
                    </p>
                  </>
                )}
              </div>
              <div>
                {tab === 'additional' && (
                  <div className="information-table">
                    <h3 className="mb-3">Additional informationn</h3>
                    <table className="w-full border-collapse border border-gray-500">
                      <tbody>
                        <tr className="">
                          <th>Color</th>
                          <td>
                            <p>
                              Apple Red, Bio Blue, Sweet Orange, Blue, Green,
                              Pink, Black, White
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>Size</th>
                          <td>
                            <p>XS, S, M, L, XL, XXL</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div>
                {tab === 'reviews' && (
                  <div>
                    <h3 className="text-lg">
                      2 reviews for Analogue Resin Strap
                    </h3>
                    <ol className="mt-5 flex flex-col gap-8">
                      <li>
                        <div className="gap-5 flex">
                          <div>
                            <img
                              src={profile}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div>
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                            </div>
                            <div className="flex gap-2">
                              <span className="font-bold">admin</span>
                              <span>-</span>
                              <span className="opacity-30">April 23, 2022</span>
                            </div>
                            <div>
                              <p>
                                Sed perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="gap-5 flex">
                          <div>
                            <img
                              src={profile}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col ">
                            <div>
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'yellow' }}
                              />
                            </div>
                            <div className="flex gap-2">
                              <span className="font-bold">admin</span>
                              <span>-</span>
                              <span className="opacity-30">April 23, 2022</span>
                            </div>
                            <div>
                              <p>
                                Sed perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                    <div className="add-comment mt-6">
                      <form className="flex flex-col gap-5">
                        <h2 className="text-xl border-b pb-4">Add a review</h2>
                        <div className="">
                          <span>
                            Your rating <span className="text-red-600">*</span>
                          </span>
                          <div className="flex mt-2">
                            <a className="star-icons border-r pr-2 mr-2">
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                            </a>
                            <a className="star-icons border-r pr-2 mr-2 ">
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                            </a>
                            <a className="star-icons border-r pr-2 mr-2 ">
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                            </a>
                            <a className="star-icons border-r pr-2 mr-2 ">
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                            </a>
                            <a className="star-icons  ">
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                              <StarIcon
                                sx={{ fontSize: 15, color: 'gray' }}
                                className="star-icon"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span>
                            Your review <span className="text-red-600">*</span>
                          </span>
                          <textarea
                            cols="30"
                            rows="10"
                            className="mt-2 outline-none text-black p-2"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="mt-12">
                      <button className="transition-btn bg-white text-black pt-2 pb-2 pl-6 pr-6 hover:bg-[#1d4ed8] hover:text-white ">
                        Sign up for comment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Campaign />
    </>
  );
};

export default Details;