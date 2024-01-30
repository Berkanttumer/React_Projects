import React from 'react';

const Footer = () => {
  return (
    <footer class="footer flex justify-between border-t border-gray-500 items-center mt-5">
      <div class="container flex justify-between mt-5">
        <div class="copyright">© Copyright 2023</div>
        <div class="icons">
          <ul class="icons flex gap-3">
            <a href="#">
              <li>
                <i class="fa-brands fa-facebook"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
            </a>
            <a href="#">
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
