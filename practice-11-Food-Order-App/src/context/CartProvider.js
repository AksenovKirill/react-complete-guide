import {useReducer} from 'react';
import {CartContext} from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  isOpen: false,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateItems = [...state.items, action.payload];
    const updateTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    state.items = state.items.filter((item) => item !== action.payload);
  }
  if (action.type === 'SHOW_CART') {
    state.isOpen = action.payload;
    return {
      isOpen: state.isOpen,
    };
  }
  return defaultCartState;
};
export const CartProvider = ({children}) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const handleToggleCart = () => {
    dispatchCartAction({type: 'SHOW_CART', payload: !cartState.isOpen});
  };

  const handleAddItem = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', payload: item});
  };

  const handleRemoveItem = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', payload: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    isOpen: cartState.isOpen,
    handleAddItem: handleAddItem,
    handleRemoveItem: handleRemoveItem,
    handleToggleCart: handleToggleCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
