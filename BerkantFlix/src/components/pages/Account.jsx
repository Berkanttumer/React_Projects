import React, { useContext, useEffect, useState } from 'react';
import { AuthContextProvider, UserAuth } from '../../context/AuthContext';
import { useAsyncError, Await, Navigate, useNavigate } from 'react-router-dom';
import SavedMoviesShows from '../layouts/SavedMoviesShows';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { auth } from '../../firebase';

const Account = () => {
  const { user } = UserAuth();

  const { logOut } = UserAuth();

  return (
    <>
      <div className="container text-account">
        <h1 className=" mt-16 mb-10 text-3xl ">Account Details</h1>
        <h2>E-Mail: {user?.email}</h2>
      </div>
      <div className="container">
        <h1 className="text-3xl mt-20">My Favorites</h1>
        <SavedMoviesShows />

        <div className="mt-32 flex gap-2">
          <span className="text-red-700 font-bold">Exit</span>
          <ExitToAppIcon className="hover:cursor-pointer" onClick={logOut} />
        </div>
      </div>
    </>
  );
};

export default Account;
