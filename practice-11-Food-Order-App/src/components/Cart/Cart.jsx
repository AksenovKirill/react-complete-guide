import React, {useContext} from 'react';
import {cartItems} from '../../assets/const';
import {Modal} from '../UI/Modal/Modal';
import {CartContext} from '../../context/CartContext';
import classes from './Cart.module.css';

export const Cart = () => {
  const {isOpen, handleCloseCart} = useContext(CartContext);
  const cartList = cartItems.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <>
      {isOpen && (
        <Modal>
          <ul className={classes['cat-items']}>{cartList}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
          </div>
          <div className={classes.actions}>
            <button
              onClick={handleCloseCart}
              className={classes['button--alt']}>
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};
