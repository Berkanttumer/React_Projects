import React, { useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useAsyncError, Await, Navigate, useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center mt-10 mb-10 text-3xl">Account Details</h1>
      <h2>UserName: {user?.displayName}</h2>
      <h2>UserName: {user?.email}</h2>
    </div>
  );
};

export default Account;
