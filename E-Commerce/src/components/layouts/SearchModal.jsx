import React, { useContext } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { css } from '@emotion/react';
import { ModalContext } from '../../ContextAPI/ModalProvider';

const SearchModal = () => {
  const { handleClose, openSearch } = useContext(ModalContext);

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
  `;
  return (
    <Modal
      className=" flex"
      open={openSearch}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-wrapper flex ">
          <div className="flex flex-col mt-24 items-center ml-12 mr-12 text-center">
            <Typography
              id="modal-modal-title"
              variant="h4"
              className="!font-bold"
            >
              NEWSLETTER
            </Typography>
          </div>
        </div>
        <CloseIcon
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
        />
      </Box>
    </Modal>
  );
};

export default SearchModal;
