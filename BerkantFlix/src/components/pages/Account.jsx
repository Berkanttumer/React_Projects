import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useAsyncError, Await, Navigate, useNavigate } from 'react-router-dom';
import SavedMoviesShows from '../layouts/SavedMoviesShows';

const Account = () => {
  const { user } = UserAuth();

  return (
    <>
      <div className="container text-account">
        <h1 className=" mt-16 mb-10 text-3xl ">Account Details</h1>
        <h2>E-Mail: {user?.email}</h2>
      </div>
      <div className="container">
        <h1 className="text-3xl mt-20">My Shows</h1>
        <SavedMoviesShows />
      </div>
    </>
  );
};

export default Account;
