import React, { useContext, useState } from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MegaMenuImage from '../../../public/img/mega-menu.jpg';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { ModalContext } from '../../ContextAPI/ModalProvider';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../ContextAPI/AuthContext';

const Header = () => {
  const { openSearch, handleOpenSearch, cartItems } = useContext(ModalContext);
  const totalItems = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const [isVisible, setIsVisible] = useState(false);
  const { user } = useContext(AuthContext);
  const handleOpenBtn = () => {
    setIsVisible(true);
  };

  const handleCloseBtn = () => {
    setIsVisible(false);
  };

  return (
    <header className="container flex items-center justify-between !mt-8 relative">
      <div className="md:hidden mr-3 ">
        <MenuIcon onClick={handleOpenBtn} className="cursor-pointer " />
      </div>
      <div className={`nav-wrapper relative${handleCloseBtn}`}>
        <div className={`nav nav-black ${isVisible ? 'visible' : ''}`}>
          <div className={`nav nav-white ${isVisible ? 'visible' : ''}`}>
            <button
              className="nav-btn close-btn absolute top-10 right-0"
              onClick={handleCloseBtn}
            >
              <i className="fas fa-times"></i>
            </button>
            <button
              className="nav-btn open-btn"
              onClick={isVisible ? handleCloseBtn : handleOpenBtn}
            >
              <i className="fas fa-bars "></i>
            </button>
            <Link to="/" className="w-[180px]">
              <img className="w-[220px]" alt="" />
            </Link>

            <ul className="list flex flex-col mt-6 gap-5 ">
              <li>
                <Link to="/" onClick={handleCloseBtn}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Shop" onClick={handleCloseBtn}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/Blog" onClick={handleCloseBtn}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={handleCloseBtn}>
                  Contact
                </Link>
              </li>
              {user?.email ? (
                ''
              ) : (
                <li>
                  <Link to="/Account" className="font-bold">
                    <button onClick={handleCloseBtn}>Sign in</button>
                  </Link>
                </li>
              )}
              {user?.email ? (
                ''
              ) : (
                <li>
                  <button onClick={handleCloseBtn}>
                    <Link
                      to={{ pathname: '/Account', state: { signUp: true } }}
                      className='className="font-bold'
                    >
                      Sign Up
                    </Link>
                  </button>
                </li>
              )}
              {user?.email ? (
                <li>
                  <Link to="/Account">
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

      <div className="container flex items-center justify-between">
        <Link to="/" className="font-bold text-3xl">
          LOGO
        </Link>

        <ul className="menu-list  hidden gap-3 items-center md:flex">
          <li>
            <NavLink to="/" className="flex items-center ">
              HOME <ExpandMoreIcon sx={{ color: 'gray' }} />
            </NavLink>
          </li>
          <li className="shop ">
            <NavLink to="/Shop" href="#" className="flex items-center ">
              SHOP <ExpandMoreIcon sx={{ color: 'gray' }} />
            </NavLink>
            <div className="megamenu left-0 top-full w-full flex justify-center absolute z-50 mt-8">
              <div className=" flex justify-between bg-white text-black p-5  ">
                <div className="megamenu-links flex ">
                  <div>
                    <h3 className=" font-bold mb-4">Shop Style</h3>
                    <ul className="flex flex-col gap-1 flex-nowrap">
                      <li>Shop Standard</li>
                      <li>Shop Standard</li>
                      <li>Shop Standard</li>
                      <li>Shop Standard</li>
                      <li>Shop Standard</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className=" font-bold mb-4">Filter Layout</h3>
                    <ul className="flex flex-col gap-1">
                      <li>Sidebar</li>
                      <li>Filter Side Out</li>
                      <li>Filter Dropdown</li>
                      <li>Filter Drawer</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className=" font-bold mb-4">Shop Loader</h3>
                    <ul className="flex flex-col gap-1">
                      <li>Shop Pagination</li>
                      <li>Shop Infinity</li>
                      <li>Shop Load More</li>
                      <li>Cart Modal</li>
                      <li>Cart Drawer</li>
                      <li>Cart Page</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3 ml-5">
                  <img src={MegaMenuImage} alt="" />
                  <h3>JOIN THE LAYERING GANG</h3>
                  <span>Suspendisse faucibus nunc et pellentesque</span>
                  <a
                    href=""
                    className="pl-6 pr-6 bg-white text-black inline-block border border-black border-solid w-32 text-center "
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/Blog">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="ml-4">
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-3 items-center ">
          <Link to="/Account">
            <PermIdentityIcon />
          </Link>

          <Link>
            <SearchIcon onClick={handleOpenSearch} />
          </Link>

          <Link to="/Favorites">
            <FavoriteBorderIcon />
          </Link>

          <Link to="/Cart">
            <LocalMallOutlinedIcon className="relative" />
          </Link>

          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-blue-700">
            <span className="text-[10px] font-bold ">{totalItems}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
