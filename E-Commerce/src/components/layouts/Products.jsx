import React from 'react';
import img1 from '../../assets/img/products/product1/1.png';
import img2 from '../../assets/img/products/product1/2.png';
import StarIcon from '@mui/icons-material/Star';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="top-title flex items-center justify-center flex-col">
          <h3 className="text-3xl font-bold mb-1">New Arrivals</h3>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div>
          <ul className="product-list ">
            <li className="flex flex-col items-center">
              <div>
                <a href="">
                  <img src={img1} alt="" />
                </a>
              </div>
              <div className="product-info pt-5 items-center flex flex-col">
                <div>
                  <h3>Analogue Resin Strap</h3>
                </div>
                <div className="flex pt-3">
                  <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                  <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                  <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                  <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                  <StarIcon sx={{ fontSize: 15, color: 'yellow' }} />
                </div>
                <div className="pt-3">
                  <strong className="text-red-700">$108.00</strong>
                  span
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
