import React, { useContext, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '../../ContextAPI/AuthContext';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { red } from '@mui/material/colors';

const Account = () => {
  const { signUp, logIn, updateProfile, logOut, user, signGitHub } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signIn) {
        await logIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    console.log('form gönderiliyor');
  };

  const close = async () => {
    await logOut();
    navigate('/');
  };

  const [signIn, setSignIn] = useState(true);
  const [signForm, setSignForm] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  return user ? (
    <section className="mt-12">
      <div className="container flex flex-col gap-3">
        <div className=" flex gap-2 items-center">
          <h1 className="text-xl">E-mail:</h1>
          <p>{user.email}</p>
        </div>
        <div className="flex gap-2 hover:cursor-pointer" onClick={close}>
          <p className="font-bold text-red-700">Exit</p>
          <ExitToAppIcon onClick={close} />
        </div>
      </div>
    </section>
  ) : (
    <section className="mt-24 mb-24">
      <div className="container flex items-center justify-center">
        <div className="bg-white w-[400px] h-[500px] text-black ">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-12 mt-12">
              {user ? <button onClick={close}>Logout</button> : ''}

              <button
                onClick={(e) => {
                  e.preventDefault();
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
                onClick={(e) => {
                  e.preventDefault();
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
                    <input
                      type="email"
                      className="border-black border w-4/5"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="gap-1 flex flex-col">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="border-black border w-4/5"
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
                  <button
                    className="bg-black text-white items-center flex gap-2 border-gray-700 border w-4/5 justify-center pt-1 pb-1 rounded-lg hover:bg-gray-800"
                    onClick={signGitHub}
                  >
                    <GitHubIcon sx={{ fontSize: '20px' }} />
                    GitHub
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="form mt-9 ml-9">
                  <div className=" gap-1 flex flex-col">
                    <label>E-Mail *</label>
                    <input
                      type="email"
                      className="border-black border "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="gap-1 flex flex-col mb-2">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="border-black border "
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-center w-[90%]">
                    <span className="text-xs">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </span>
                  </div>
                </div>
                <div className="flex justify-center">
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
