import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MegaMenuImage from '../../assets/img/mega-menu.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="container flex items-center justify-between !mt-8 relative">
      <Link to="/" className="font-bold text-3xl">
        LOGO
      </Link>
      <ul className="flex gap-3 items-center ">
        <li>
          <a className="flex items-center">
            HOME <ExpandMoreIcon sx={{ color: 'gray' }} />
          </a>
        </li>
        <li>
          <a className="flex items-center ">
            SHOP <ExpandMoreIcon sx={{ color: 'gray' }} />
          </a>
          <div className="megamenu left-0 top-full w-full flex justify-center absolute z-50 mt-12">
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
              <div className="flex flex-col gap-3">
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
          <a>BLOG</a>
        </li>
        <li>
          <Link to="/Contact" className="ml-4">
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center ">
        <PermIdentityIcon /> <SearchIcon />
        <a href="">
          <FavoriteBorderIcon />
        </a>
        <LocalMallOutlinedIcon />
      </div>
    </header>
  );
};
export default Header;
