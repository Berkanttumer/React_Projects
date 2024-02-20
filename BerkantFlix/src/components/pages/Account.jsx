import React, { useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useAsyncError, Await, Navigate, useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Account = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  return user?.email ? (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center mt-10 mb-10 text-3xl">Account Details</h1>
      <h2>UserName: {user?.displayName}</h2>
      <h2>UserName: {user?.email}</h2>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default Account;
