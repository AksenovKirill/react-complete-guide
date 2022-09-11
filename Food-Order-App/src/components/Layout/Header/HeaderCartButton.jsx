import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from '../../../context/CartContext';
import {CartIcon} from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = ({onShow}) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const {items} = useContext(CartContext);

  const numberOfCartItems = items?.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onShow} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
