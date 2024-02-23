import React, { useEffect, useState } from 'react';

import logo from '../../assets/e9e7a5a5bda4050781491119636d0b0f.png';
import {
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import LoginModal from './LoginModal';
import { UserAuth } from '../../context/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Account from '../pages/Account';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  console.log(user);
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogoClick = () => {
    setSearchTerm('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
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
      <header className="header ">
        <div className="nav-wrapper ">
          <div className="nav nav-black">
            <div className="nav nav-red">
              <div className="nav nav-white">
                <button className="nav-btn close-btn">
                  <i className="fas fa-times text-blue-900"></i>
                </button>
                <a className="w-[180px]">
                  <img className="" src={logo} alt="" />
                </a>
                <form className="mt-2 search-form-mobile">
                  <input
                    className="mobile-search"
                    id="searchInputMobile"
                    type="text"
                    placeholder="Search..."
                  />
                </form>
                <ul className="list">
                  <li>
                    <a>Movies</a>
                  </li>
                  <li>
                    <NavLink to="/tvshows">TV Shows</NavLink>
                  </li>
                </ul>
                <div>
                  <button>Sign in</button>
                </div>
                <div>Sign Up</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-between header-sticky">
          <button className="open-btn mobile-bar hidden">
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
