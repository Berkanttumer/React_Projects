import React, { useEffect, useState } from 'react';

import logo from '../../assets/e9e7a5a5bda4050781491119636d0b0f.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import { UserAuth } from '../../context/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Account from '../pages/Account';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);

  const handleOpenBtn = () => {
    setIsVisible(true);
  };

  const handleCloseBtn = () => {
    setIsVisible(false);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogoClick = () => {
    setSearchTerm('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?search-term=${searchTerm}`);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlelogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="header">
        <div className={`nav-wrapper ${mobileModal ? handleCloseBtn : ''}`}>
          <div className={`nav nav-black ${isVisible ? 'visible' : ''}`}>
            <div className={`nav nav-red ${isVisible ? 'visible' : ''}`}>
              <div className={`nav nav-white ${isVisible ? 'visible' : ''}`}>
                <button className="nav-btn close-btn" onClick={handleCloseBtn}>
                  <i className="fas fa-times text-blue-900"></i>
                </button>
                <button
                  className="nav-btn open-btn"
                  onClick={isVisible ? handleCloseBtn : handleOpenBtn}
                >
                  <i className="fas fa-bars text-blue-900"></i>
                </button>
                <Link to="/" className="w-[180px]">
                  <img className="w-[220px]" src={logo} alt="" />
                </Link>

                <form
                  className="mt-2 search-form-mobile"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="mobile-search"
                    id="searchInputMobile"
                    type="text"
                    placeholder="Search a movie or show"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </form>
                <ul className="list">
                  <li>
                    <Link to="/Movies" onClick={handleCloseBtn}>
                      Movies
                    </Link>
                  </li>
                  <li>
                    <Link to="/Tvshows" onClick={handleCloseBtn}>
                      TV Shows
                    </Link>
                  </li>
                  {user?.email ? (
                    ''
                  ) : (
                    <li>
                      <button
                        onClick={() => {
                          handleOpen();
                          handleCloseBtn();
                        }}
                      >
                        Sign in
                      </button>
                    </li>
                  )}
                  {user?.email ? (
                    ''
                  ) : (
                    <li>
                      <button
                        onClick={() => {
                          handleOpen();
                          handleCloseBtn();
                        }}
                      >
                        Sign Up
                      </button>
                    </li>
                  )}
                  {user?.email ? (
                    <li>
                      <Link to="Account">
                        <button onClick={handleCloseBtn}>Account</button>
                      </Link>
                    </li>
                  ) : (
                    ''
                  )}
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-between header-sticky !mt-[40px]">
          <button
            className="open-btn mobile-bar hidden"
            onClick={handleOpenBtn}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="logo w-[180px] flex-shrink-0">
            <NavLink to="/" className="" onClick={handleLogoClick}>
              <img className="w-full" src={logo} alt="" />
            </NavLink>
          </div>

          <form
            id="search-form"
            className="search-form"
            onSubmit={handleSubmit}
          >
            <div className="input relative">
              <input
                className="text-l w-[780px] outline-none border-none text-black p-3 pl-6 rounded-full "
                type="text"
                placeholder="Search a movie or show"
                id="searchInput"
                name="search-term"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <div className="button">
                <button className="search-btn absolute">Search</button>
              </div>
            </div>
          </form>
          <div className="nav-menu ">
            <ul className="flex">
              <li className="ml-5">
                <NavLink to="/movies" className="nav-link">
                  Movies
                </NavLink>
              </li>
              <li className="ml-5">
                <NavLink to="/tvshows" className="nav-link">
                  Shows
                </NavLink>
              </li>
              {user?.email ? (
                <>
                  <li
                    className="ml-5 flex items-center justify-center hover:cursor-pointer"
                    onClick={() => {
                      navigate('/Account');
                    }}
                  >
                    <AccountCircleIcon />
                    <p className="ml-1">{user?.displayName}</p>
                  </li>
                  <li>
                    <button className="ml-1" onClick={handlelogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="ml-5">
                  <button onClick={handleOpen} className="font-bold ">
                    Login
                  </button>
                </li>
              )}{' '}
              <LoginModal
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
