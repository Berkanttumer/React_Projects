import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex justify-between border-t border-gray-500 items-center mt-5">
      <div className="container flex justify-between mt-5">
        <div className="copyright">© Copyright 2023</div>
        <div className="icons">
          <ul className="icons flex gap-3">
            <a href="#">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
