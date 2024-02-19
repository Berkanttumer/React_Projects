import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Form } from 'react-router-dom';

const LoginTemplate = ({ selected }) => {
  // For password
  const [passwordSignIn, setPasswordSignIn] = useState('password');

  const handlePasswordSign = () => {
    setPasswordSignIn(passwordSignIn === 'password' ? 'text' : 'password');
  };

  // For confirm password
  const [password, setPassword] = useState('password');
  const [password2, setPassword2] = useState('password');

  const handleClick = () => {
    setPassword(password === 'password' ? 'text' : 'password');
  };

  const handleClick2 = () => {
    setPassword2(password2 === 'password' ? 'text' : 'password');
  };
  return selected === 'signin' ? (
    <div className="mt-10">
      <div className="flex flex-col relative">
        <label>E-posta or username</label>
        <input
          type="text"
          className="rounded-md outline-none  pl-2 p-1 text-gray-600 mt-2"
          placeholder="you@example.com"
        />
        <label className="mt-5">Password</label>
        <input
          type={passwordSignIn}
          className="rounded-md outline-none  p-1 text-gray-600 mt-2"
        />
        {passwordSignIn === 'password' ? (
          <VisibilityOffIcon
            onClick={handlePasswordSign}
            className="text-black absolute top-[53%] right-0"
          />
        ) : (
          <VisibilityIcon
            onClick={handlePasswordSign}
            className="text-black absolute top-[53%] right-0 "
          />
        )}
        <button className="mt-12 bg-[#DC1A28] text-black font-bold p-1 rounded-md">
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
            type="text"
            className="rounded-md outline-none pl-2 p-1 text-gray-600 mt-2 "
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col mt-5 relative">
          <label>Password</label>
          <input
            type={password}
            className="rounded-md outline-none p-1 text-gray-600 mt-2 "
          />
          {password === 'password' ? (
            <VisibilityOffIcon
              onClick={handleClick}
              className="text-black absolute top-[58%] right-0"
            />
          ) : (
            <VisibilityIcon
              onClick={handleClick}
              className="text-black absolute top-[58%] right-0 "
            />
          )}
        </div>
        <div className="flex flex-col mt-5 relative">
          <label className="">Confirm Password</label>
          <input
            type={password2}
            className="rounded-md outline-none p-1 text-gray-600 mt-2 "
          />
          {password2 === 'password' ? (
            <VisibilityOffIcon
              onClick={handleClick2}
              className="text-black absolute top-[58%] right-0 "
            />
          ) : (
            <VisibilityIcon
              onClick={handleClick2}
              className="text-black absolute top-[58%] right-0 "
            />
          )}
        </div>

        <button className="mt-12 bg-[#DC1A28] text-black font-bold p-1 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginTemplate;
