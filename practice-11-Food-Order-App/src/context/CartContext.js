import {createContext, useState} from 'react';

export const CartContext = createContext({
  isOpen: false,
  handleOpenCart: () => {},
  handleCloseCart: () => {},
});

export const CartContextProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen: isOpen,
        handleOpenCart: handleOpenCart,
        handleCloseCart: handleCloseCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
