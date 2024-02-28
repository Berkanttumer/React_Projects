import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container flex items-center justify-between !mt-8">
      <Link to="/" className="font-bold text-3xl">
        LOGO
      </Link>
      <div className="flex gap-3 items-center ">
        <a className="flex items-center">
          HOME
          <ExpandMoreIcon sx={{ color: 'gray' }} />
        </a>
        <a className="flex items-center">
          SHOP
          <ExpandMoreIcon sx={{ color: 'gray' }} />
        </a>
        <a>BLOG</a>
        <Link to="/Contact">CONTACT</Link>
      </div>
      <div className="flex gap-3 items-center ">
        <PermIdentityIcon />
        <SearchIcon />
        <a href="">
          <FavoriteBorderIcon />
        </a>
        <LocalMallOutlinedIcon />
      </div>
    </header>
  );
};

export default Header;
