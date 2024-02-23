import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginTemplate = ({ selected, handleClose }) => {
  // For password
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const handlePasswordSign = () => {
    setPasswordSignIn(passwordSignIn.type === 'password' ? 'text' : 'password');
  };

  // For confirm password
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleLogin = async () => {
    try {
      await logIn(email, password);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length === 0) {
      toast.error('Passwords cannot be empty');
      return;
      // } else if (password !== password2) {
      //   toast.error('Passwords do not match');
      //   return;
      // } else if (password.length < 6) {
      //   toast.error('Password must be at least 6 characters');
      //   return;
    }
    try {
      await signUp(email, password);
      toast.success('Account created successfully');
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const [email, setEmail] = useState('');

  const { user, signUp, logIn, updateUserName } = UserAuth();

  return selected === 'signin' ? (
    <div className="mt-10">
      <div className="flex flex-col relative">
        <label>E-posta</label>
        <input
          onChange={handleEmailChange}
          type="text"
          className="rounded-md outline-none  pl-2 p-1 text-gray-600 mt-2"
          placeholder="you@example.com"
        />
        <label className="mt-5">Password</label>
        <input
          onChange={handlePassword}
          type={passwordSignIn}
          className="rounded-md outline-none  p-1 text-gray-600 mt-2"
        />
        {/* {passwordSignIn === 'password' ? (
          <VisibilityOffIcon
            onClick={handlePasswordSign}
            className="text-black absolute top-[53%] right-0 hover:cursor-pointer"
          />
        ) : (
          <VisibilityIcon
            onClick={handlePasswordSign}
            className="text-black absolute top-[53%] right-0 hover:cursor-pointer"
          />
        )} */}
        <button
          className="mt-12 bg-[#DC1A28] text-black font-bold p-1 rounded-md"
          onClick={handleLogin}
        >
          Sign in
        </button>
      </div>
    </div>
  ) : (
    <div className="mt-10 ">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label>E-posta </label>
          <input
            onChange={handleEmailChange}
            type="text"
            className="rounded-md outline-none pl-2 p-1 text-gray-600 mt-2 "
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col mt-5 relative">
          <label>Password</label>
          <input
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md outline-none p-1 text-gray-600 mt-2 "
          />
          {/* {password === 'password' ? (
            <VisibilityOffIcon className="text-black absolute top-[58%] right-0 hover:cursor-pointer" />
          ) : (
            <VisibilityIcon className="text-black absolute top-[58%] right-0 hover:cursor-pointer" />
          )} */}
        </div>
        {/* <div className="flex flex-col mt-5 relative">
          <label className="">Confirm Password</label>
          <input
            type={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="rounded-md outline-none p-1 text-gray-600 mt-2 "
          />
          {password2 === 'password' ? (
            <VisibilityOffIcon
              onClick={handleClick2}
              className="text-black absolute top-[58%] right-0 hover:cursor-pointer"
            />
          ) : (
            <VisibilityIcon
              onClick={handleClick2}
              className="text-black absolute top-[58%] right-0 hover:cursor-pointer"
            />
          )}
        </div> */}

        <button
          onClick={handleSubmit}
          className="mt-12 bg-[#DC1A28] text-black font-bold p-1 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginTemplate;
