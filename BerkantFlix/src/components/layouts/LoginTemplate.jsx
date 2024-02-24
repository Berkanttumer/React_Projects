import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginTemplate = ({ selected, handleClose }) => {
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await logIn(email, password);
      handleClose();
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length === 0) {
      toast.error('Passwords cannot be empty');
      return;
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
          type="password"
          className="rounded-md outline-none  p-1 text-gray-600 mt-2"
        />

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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md outline-none p-1 text-gray-600 mt-2 "
          />
        </div>

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
