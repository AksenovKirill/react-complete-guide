import React, {useContext} from 'react';
import {Modal} from '../UI/Modal/Modal';
import {CartItem} from './CartItem';
import {CartContext} from '../../context/CartContext';
import classes from './Cart.module.css';

export const Cart = ({isShowCart, onClose}) => {
  const {totalAmount, items} = useContext(CartContext);
  const fixTotal = `$${totalAmount.toFixed(2)}`;
  const handleRemoveItem = (id) => {};
  const handleAddItem = (item) => {};

  const cartList = items?.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={handleRemoveItem.bind(null, item.id)}
      onAdd={handleAddItem.bind(null, item)}
    />
  ));
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
