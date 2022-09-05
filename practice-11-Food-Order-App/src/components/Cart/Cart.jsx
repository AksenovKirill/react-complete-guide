import React from 'react';
import {cartItems} from '../../assets/const';
import classes from './Cart.module.css';

export const Cart = (props) => {
  const cartList = cartItems.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <div>
      <ul className={classes['cat-items']}>{cartList}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
