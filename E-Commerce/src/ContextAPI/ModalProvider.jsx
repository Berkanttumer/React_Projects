import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
    setOpenSearch(false);
  };

  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
    console.log(openSearch);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        handleOpenModal,
        handleClose,
        openSearch,
        handleOpenSearch,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
