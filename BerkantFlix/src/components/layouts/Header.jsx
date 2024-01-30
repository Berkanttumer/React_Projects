import React from 'react';

import logo from '../../assets/e9e7a5a5bda4050781491119636d0b0f.png';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="nav-wrapper">
          <div className="nav nav-black">
            <div className="nav nav-red">
              <div className="nav nav-white">
                <button className="nav-btn close-btn">
                  <i className="fas fa-times text-blue-900"></i>
                </button>
                <a className="w-[180px]">
                  <img className="" src={logo} alt="" />
                </a>
                <form action="search.html" className="mt-2 search-form-mobile">
                  <input
                    className="mobile-search"
                    id="searchInputMobile"
                    type="text"
                    placeholder="Search..."
                  />
                </form>
                <ul className="list">
                  <li>
                    <a href="index.html">Movies</a>
                  </li>
                  <li>
                    <a href="tv-shows.html">TV Shows</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-between">
          <button className="open-btn mobile-bar hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="logo">
            <a href="index.html" className="">
              <img className="w-[180px]" src={logo} alt="" />
            </a>
          </div>
          <form action="search.html" id="search-form" className="search-form">
            <div className="input relative">
              <input
                className="text-l w-[780px] outline-none border-none text-black p-3 pl-6 rounded-full"
                type="text"
                placeholder="Search a movie"
                id="searchInput"
                name="search-term"
              />
              <div className="button">
                <button className="search-btn absolute">Search</button>
              </div>
            </div>
          </form>
          <div className="nav-menu ">
            <ul className="flex">
              <li>
                <a className="nav-link" href="/index.html">
                  Movies
                </a>
              </li>
              <li className="ml-5">
                <a className="nav-link" href="/tv-shows.html">
                  TV Shows
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
