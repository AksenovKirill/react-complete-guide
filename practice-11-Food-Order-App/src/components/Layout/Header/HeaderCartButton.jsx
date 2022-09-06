import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import {CartIcon} from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = () => {
  const {items, handleToggleCart} = useContext(CartContext);
  const numberOfCartItems = items?.reduce(
    (sum, meal) => (sum += Number(meal.amount)),
    0,
  );
  return (
    <button onClick={handleToggleCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems ?? 0}</span>
    </button>
  );
};
