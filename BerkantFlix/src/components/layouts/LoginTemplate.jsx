import React from 'react';

const LoginTemplate = ({ selected }) => {
  return selected === 'signin' ? (
    <div className="mt-10 ">
      <div className="flex flex-col ">
        <label>E-posta or username</label>
        <input
          type="text"
          className="rounded-md outline-none  pl-2 p-1 text-gray-600 mt-2"
          placeholder="you@example.com"
        />
        <label className="mt-5">Password</label>
        <input
          type="password"
          className="rounded-md outline-none  p-1 text-gray-600 mt-2"
        />
      </div>
    </div>
  ) : (
    <div className="mt-10 ">
      <div className="flex flex-col ">
        <label>E-posta </label>
        <input
          type="text"
          className="rounded-md outline-none pl-2 p-1 text-gray-600 mt-2"
          placeholder="you@example.com"
        />
        <label className="mt-5">Doğum Tarihi</label>
        <label className="mt-5">Password</label>
        <input
          type="password"
          className="rounded-md outline-none  p-1 text-gray-600 mt-2"
        />
      </div>
    </div>
  );
};

export default LoginTemplate;
