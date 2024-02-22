import React, { useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useAsyncError, Await, Navigate, useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  return (
    <>
      <div className="container text-account">
        <h1 className=" mt-16 mb-10 text-3xl ">Account Details</h1>
        <h2>UserName: {user?.displayName}</h2>
        <h2>E-Mail: {user?.email}</h2>
      </div>
      <div className="container">
        <h1 className="text-3xl mt-20">My Shows</h1>
      </div>
    </>
  );
};

export default Account;
