import React from 'react';
import { Link } from 'react-router-dom';
import AppStoreIcon from '../../assets/img/footer/app-store.png';
import AndroidIcon from '../../assets/img/footer/google-play.png';
import cards from '../../assets/img/footer/cards.png';

const Footer = () => {
  return (
    <footer className=" bg-black text-white gap-10 ">
      <div className="subscribe mb-12 bg-white text-black pt-20 pb-20">
        <div className="sub-row container ">
          <div className="flex justify-between ">
            <div className="left-col">
              <div>
                <h3 className="text-3xl max-w-[500px] font-bold">
                  Get our emails for info on new items, sales and more.
                </h3>
                <p className="mt-1 text-sm">
                  We'll email you a voucher worth $10 off your first order over
                  $50.
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="mt-8">
                  <form className="flex text-white">
                    <input
                      type="text"
                      placeholder="Enter your email adress."
                      className="bg-black h-12 flex-1 outline-none p-4"
                    />
                    <button
                      href=""
                      className="h-12 bg-white text-black border-2 border-black border-solid pl-6 pr-6 "
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs mt-2">
                    By subscribing you agree to our Terms & Conditions and
                    Privacy & Cookies Policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-col">
              <div className="top-title">
                <h3 className="text-3xl max-w-[500px] font-bold">
                  Need help? <br />
                </h3>
                <h3 className="text-3xl font-bold">(+90) 123 456 78 90</h3>
                <p className="text-sm mt-1">We are available 8:00am – 7:00pm</p>
              </div>

              <div className="icons flex gap-2 items-center mt-10">
                <img src={AppStoreIcon} alt="" />
                <img src={AndroidIcon} alt="" />
              </div>
              <p className="text-xs mt-2">
                Shopping App: Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 pb-14  border-b border-solid border-gray-500 ">
        <div className="flex container flex-wrap">
          <div className="flex flex-col flex-[3]">
            <Link to="/" className="font-bold text-xl pb-5">
              LOGO
            </Link>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quasi blanditiis? Iste dicta fugiat delectus.
            </p>
            <p className="mt-6">(+800) 1234 5678 90 - info@example.com</p>
          </div>
          <div className="links-col flex gap-20 ml-20">
            <div>
              <h3 className="font-bold">Information</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Privarcy Policy</a>
                </li>
                <li>
                  <a href="">Returns Policy</a>
                </li>
                <li>
                  <a href="">Shipping Policy</a>
                </li>
                <li>
                  <a href="">Dropshipping</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold ">Account</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">My Orders</a>
                </li>
                <li>
                  <a href="">My Wishlist</a>
                </li>
                <li>
                  <a href="">Account details</a>
                </li>
                <li>
                  <a href="">Track My Orders</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Shop</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Affiliate</a>
                </li>
                <li>
                  <a href="">Bestsellers</a>
                </li>
                <li>
                  <a href="">Discount</a>
                </li>
                <li>
                  <a href="">Latest Products</a>
                </li>
                <li>
                  <a href="">Sale Products</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold ">Categories</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Women</a>
                </li>
                <li>
                  <a href="">Men</a>
                </li>
                <li>
                  <a href="">Bags</a>
                </li>
                <li>
                  <a href="">Outerwear</a>
                </li>
                <li>
                  <a href="">Shoes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright mt-10 mb-10">
        <div className="container">
          <div className="flex gap-5 items-center  ">
            <div>
              <p className="text-xs">
                Copyright 2024 © E-Commerce Theme. All right reserved. Powered
                by Berkant Tümer.
              </p>
            </div>
            <a href="">
              <img src={cards} alt="" />
            </a>
            <div className="ml-auto">
              <ul className="copyright-links flex gap-2">
                <li className="border-1 border-gray-50 border-r border-solid pr-2">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="border-1 border-gray-50 border-r border-solid pr-2">
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">Returns Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
