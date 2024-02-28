import React from 'react';
import { Link } from 'react-router-dom';
import AppStoreIcon from '../../assets/img/footer/app-store.png';
import AndroidIcon from '../../assets/img/footer/google-play.png';

const Footer = () => {
  return (
    <footer className=" bg-black text-white gap-10 pb-10 pt-10 ">
      <div className="subscribe mb-12 bg-white text-black pt-20 pb-20">
        <div className="sub-row container ">
          <div className="flex justify-between ">
            <div className="left-col">
              <div>
                <h3 className="text-3xl max-w-[500px]">
                  Get our emails for info on new items, sales and more.
                </h3>
                <p className="mt-1">
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
                      className="h-12 bg-white text-black border-1 border-black border-solid pl-6 pr-6"
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
            <div className="right-col ">
              <div className="top-title">
                <h3 className="text-3xl max-w-[500px]">
                  Need help? <br /> <h3>(+90) 123 456 78 90</h3>
                </h3>
                <p className="text-sm mt-1">We are available 8:00am – 7:00pm</p>
              </div>

              <div className="icons flex gap-2 items-center mt-10">
                <img src={AppStoreIcon} alt="" />
                <img src={AndroidIcon} alt="" />
              </div>
              <p className="text-xs">
                Shopping App: Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-14 pb-14">
        <div className="flex container ">
          <div className="flex flex-col flex-[3]">
            <Link to="/" className="font-bold text-xl pb-5">
              LOGO
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quasi blanditiis? Iste dicta fugiat delectus.
            </p>
            <p className="mt-6">(+800) 1234 5678 90 - info@example.com</p>
          </div>
          <div className="links-col flex gap-20 ml-20">
            <div>
              <h3 className="font-bold text-xl">Information</h3>
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
              <h3 className="font-bold text-xl">Information</h3>
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
              <h3 className="font-bold text-xl">Information</h3>
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
              <h3 className="font-bold text-xl">Information</h3>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
