import styled from '@emotion/styled';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginTemplate from './LoginTemplate';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import { css } from '@emotion/react';

const style = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 850px;
  height: 850px;
  background-color: black;
  outline: none;

  @media (max-width: 1200px) {
    width: 550px;
    height: 550px;
  }

  @media (max-width: 1500px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 1900px) {
    width: 750px;
    height: 750px;
  }

  @media (max-width: 400px) {
    width: 380px;
    height: 400px;
  }
`;

const LoginModal = ({ handleOpen, handleClose, open }) => {
  const [selected, setSelected] = useState('signin');
  return (
    <div>
      <Modal
        className="relative mt-40 md:mt-52 "
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography
            component="div"
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="w-1/2 p-4"
          >
            <div className="flex gap-5 mt-10">
              <button
                className="font-bold"
                onClick={() => setSelected('signin')}
                style={
                  selected === 'signin' ? { borderBottom: '2px solid red' } : {}
                }
              >
                Sign In
              </button>
              <button
                className="font-bold"
                onClick={() => setSelected('signup')}
                style={
                  selected === 'signup' ? { borderBottom: '2px solid red' } : {}
                }
              >
                Sign Up
              </button>
            </div>

            <LoginTemplate selected={selected} handleClose={handleClose} />
          </Typography>

          <CloseIcon
            onClick={handleClose}
            className="top-5 absolute right-5 hover:cursor-pointer"
          />
          <div className="ml-3 object-cover ">
            <img
              src="https://image.tmdb.org/t/p/original/e7Jvsry47JJQruuezjU2X1Z6J77.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
