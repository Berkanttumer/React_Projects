import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container bg-black text-white flex gap-10 pb-10 pt-10">
      <div className="flex flex-col  flex-1">
        <Link to="/" className="font-bold text-xl pb-5">
          LOGO
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quasi
          blanditiis? Iste dicta fugiat delectus.
        </p>
        <p className="mt-6">(+800) 1234 5678 90 - info@example.com</p>
      </div>
      <div className="links-col flex gap-20">
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
    </footer>
  );
};

export default Footer;
