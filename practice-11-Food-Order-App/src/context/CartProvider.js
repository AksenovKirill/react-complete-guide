import {useReducer} from 'react';
import {CartContext} from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  isOpen: false,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id,
    );

    const existingCartItem = state.items[cartItemIndex];
    let updateItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updateItems = [...state.items];
      updateItems[cartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.payload);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    state.items = state.items.filter((item) => item !== action.payload);
  }
  return defaultCartState;
};
export const CartProvider = ({children}) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

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
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
