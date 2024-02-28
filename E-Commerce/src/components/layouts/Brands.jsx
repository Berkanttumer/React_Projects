import React from 'react';
import Brand1 from '../../assets/img/brands/brand1.png';
import Brand2 from '../../assets/img/brands/brand2.png';
import Brand3 from '../../assets/img/brands/brand3.png';
import Brand4 from '../../assets/img/brands/brand4.png';
import Brand5 from '../../assets/img/brands/brand5.png';

const Brands = () => {
  return (
    <section className="brands mt-10 mb-10 bg-white">
      <div className="container ">
        <ul className="flex justify-between items-center brand-list">
          <li>
            <a href="">
              <img src={Brand1} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Brand2} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Brand3} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Brand4} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Brand5} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
