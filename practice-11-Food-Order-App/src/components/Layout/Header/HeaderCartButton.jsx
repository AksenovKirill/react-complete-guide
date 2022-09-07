import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import {CartIcon} from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = () => {
  const {items, handleToggleCart} = useContext(CartContext);
  console.log(items);
  const numberOfCartItems = items?.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  console.log(items);
  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{0}</span>
    </button>
  );
};
