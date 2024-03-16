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
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
    console.log(openSearch);
  };

  const [addToCart, setAddToCart] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );
  const handleCart = (product) => {
    setAddToCart(true);

    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          ...product,
          quantity: quantity,
        },
      ]);
    }
  };

  const deleteItem = (id) => {
    const filteredItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(filteredItems);
  };

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log('cartItems', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        handleOpenModal,
        handleClose,
        openSearch,
        handleOpenSearch,
        handleCloseSearch,
        handleCart,
        addToCart,
        setAddToCart,
        cartItems,
        deleteItem,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
