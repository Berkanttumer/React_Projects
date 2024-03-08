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

  const handleImage = (imageUrl) => {
    setSelectImage(imageUrl);
  };
  console.log(product1);
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
            <div className="">
              <img src={Selectimage} alt="" />
            </div>
            <div>
              <ol className="mt-6">
                <li>
                  <Swiper
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
          <div className="right-col">
            <div>
              <h1>Analogue Resin Strap</h1>
            </div>
            <div>
              <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
              <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
              <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
              <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
              <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
