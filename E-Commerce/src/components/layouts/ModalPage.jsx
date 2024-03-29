import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import ModalDialog from '../../../public/img/modal-dialog.jpg';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContext } from '../../ContextAPI/ModalProvider';

const ModalPage = () => {
  const { openModal, handleClose } = useContext(ModalContext);

  const handleModal = (e) => {
    localStorage.setItem('modalCheckbox', e.target.checked);
    console.log(e.target.checked);
  };

  const style = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 440px;
    width: 800px;
    background-color: black;
    outline: none;

    // @media (max-width: 900px) {
    //   width: 550px;
    //   height: 440px;
    // }

    // @media (max-width: 1200px) {
    //   width: 550px;
    //   height: 440px;
    // }
    // @media (max-width: 1500px) {
    //   width: 600px;
    //   height: 440px;
    // }

    @media (max-width: 400px) {
      width: 350px;
      height: 450px;
      top: 50%;
      left: 50%;
      .modal-wrapper {
        display: flex;
        flex-direction: column;
      }
      img {
        display: none;
      }
    }
    @media (max-width: 800px) {
      width: 350px;
      height: 450px;
      top: 50%;
      left: 50%;
      .modal-wrapper {
        display: flex;
        flex-direction: column;
      }
      img {
        display: none;
      }
    }
  `;
  return (
    localStorage.getItem('modalCheckbox') !== 'true' && (
      <Modal
        className=" flex"
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-wrapper flex ">
            <img src={ModalDialog} />
            <div className="flex flex-col mt-24 items-center ml-12 mr-12 text-center">
              <Typography
                id="modal-modal-title"
                variant="h4"
                className="!font-bold"
              >
                NEWSLETTER
              </Typography>
              <Typography
                className="!text-[14px] !mt-2 "
                id="modal-modal-description"
              >
                Sign up to our newsletter and get exclusive deals you won find
                any where else straight to your inbox!
              </Typography>
              <form className="mt-12 flex flex-col gap-6 w-full items-center relative">
                <input
                  type="email"
                  className="w-full pl-4 pr-4 pt-1 pb-1 text-black "
                  placeholder="Enter your Email address here"
                />
                <button className="bg-blue-700 w-full pt-2 pb-2 text-[14px] font-bold">
                  SUBSCRIBE
                </button>
                <label className="flex gap-2">
                  <input type="checkbox" onChange={handleModal} />
                  <span className="text-[14px]">
                    Don't show this popup again
                  </span>
                </label>
              </form>
            </div>
          </div>
          <CloseIcon
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleClose}
          />
        </Box>
      </Modal>
    )
  );
};

export default ModalPage;
