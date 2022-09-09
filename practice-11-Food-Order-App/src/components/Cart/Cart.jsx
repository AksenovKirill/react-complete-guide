import React, {useContext} from 'react';
import {Modal} from '../UI/Modal/Modal';
import {CartContext} from '../../context/CartContext';
import classes from './Cart.module.css';

export const Cart = ({isShowCart, onClose}) => {
  const {totalAmount, items} = useContext(CartContext);
  const fixTotal = `$${totalAmount.toFixed(2)}`;
  const cartList = items?.map((item) => <li key={item.id}>{item.name}</li>);
  const isItems = items?.length > 0;
  return (
    <>
      {isShowCart && (
        <Modal onClick={onClose}>
          <ul className={classes['cat-items']}>{cartList}</ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{fixTotal}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={onClose} className={classes['button--alt']}>
              Close
            </button>
            {isItems && <button className={classes.button}>Order</button>}
          </div>
        </Modal>
      )}
    </>
  );
};
