import {useState} from 'react';
import {CartContext} from './CartContext';

export const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleAddItem = (event, item) => {
    event.preventDefault();
    cartContext.items.push(item);
  };

  const handleRemoveItem = (id) => {
    cartContext.items.filter((item) => item.id !== id);
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    handleAddItem: handleAddItem,
    handleRemoveItem: handleRemoveItem,
    isOpen: isOpen,
    handleOpenCart: handleOpenCart,
    handleCloseCart: handleCloseCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
