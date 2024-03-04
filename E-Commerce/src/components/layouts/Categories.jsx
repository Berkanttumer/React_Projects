import React from 'react';
import smartphone from '../../assets/img/categories/categories1.png';
import watch from '../../assets/img/categories/categories2.png';
import electronic from '../../assets/img/categories/categories3.png';
import furniture from '../../assets/img/categories/categories4.png';
import collection from '../../assets/img/categories/categories5.png';
import fashion from '../../assets/img/categories/categories6.png';

const Categories = () => {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-1">All Categories</h3>
          <p>Summer Collection New Morden Design</p>
        </div>

        <ul className="categories-list flex gap-5 mt-9 items-center justify-center flex-wrap">
          <li>
            <a href="">
              <img src={smartphone} alt="" />
              <span className="text-center">Smartphone</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={watch} alt="" />
              <span>Watches</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={electronic} alt="" />
              <span>Electronics</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={furniture} alt="" />
              <span>Furnitures</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={collection} alt="" />
              <span>Collections</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={fashion} alt="" />
              <span>Fashion</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
