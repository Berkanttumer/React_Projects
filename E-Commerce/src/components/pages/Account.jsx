import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Account = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [signIn, setSignIn] = useState(true);
  const [signForm, setSignForm] = useState(true);
  return (
    <section className="mt-24 mb-24">
      <div className="container flex items-center justify-center">
        <div className="bg-white w-[400px] h-[500px] text-black ">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-12 mt-12">
              <button
                onClick={() => {
                  setSignIn(true);
                  setSignForm(true);
                }}
                className={`text-xl border-b-2 border-black ${
                  signIn ? '' : 'border-gray-300'
                }
                
                `}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setSignIn(false);
                  setSignForm(false);
                }}
                className={`text-xl border-b-2 ${
                  signIn ? 'border-gray-300' : ' border-black'
                }`}
              >
                Sign Up
              </button>
            </div>
            {signForm ? (
              <>
                <div className="form mt-9 ml-9">
                  <div className=" gap-1 flex flex-col">
                    <label>E-Mail *</label>
                    <input type="text" className="border-black border w-4/5" />
                  </div>
                  <div className="gap-1 flex flex-col">
                    <label>Password *</label>
                    <input type="text" className="border-black border w-4/5" />
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="text-white bg-red-700 pt-1 pb-1 pl-9 pr-9">
                    Sign In
                  </button>
                </div>

                <div className=" mt-8 flex justify-center items-center ml-9 mr-9">
                  <hr className="border-gray-500 flex-grow" />
                  <div className="px-2 text-sm font-bold">OR CONTINUE WITH</div>
                  <hr className="border-gray-500 flex-grow" />
                </div>
                <div className="mt-4 flex justify-center gap-5 ">
                  <button className="bg-black text-white items-center flex gap-2 border-gray-700 border w-4/5 justify-center pt-1 pb-1 rounded-lg hover:bg-gray-800">
                    <GitHubIcon sx={{ fontSize: '20px' }} />
                    GitHub
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="form mt-9 ml-9">
                  <div className="gap-1 flex flex-col">
                    <label>Username *</label>
                    <input type="text" className="border-black border" />
                  </div>
                  <div className=" gap-1 flex flex-col">
                    <label>E-Mail *</label>
                    <input type="text" className="border-black border " />
                  </div>
                  <div className="gap-1 flex flex-col">
                    <label>Password *</label>
                    <input type="text" className="border-black border " />
                  </div>
                </div>
                <div className="mt-14 flex justify-center">
                  <button className="text-white bg-red-700 pt-1 pb-1 pl-9 pr-9">
                    Sign Up
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
