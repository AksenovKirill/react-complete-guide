import React, {useContext} from 'react';
import {Modal} from '../UI/Modal/Modal';
import {CartItem} from './CartItem';
import {CartContext} from '../../context/CartContext';
import classes from './Cart.module.css';

export const Cart = ({isShowCart, onClose}) => {
  const {totalAmount, items, handleAddItem, handleRemoveItem} =
    useContext(CartContext);

  const fixTotal = `$${totalAmount.toFixed(2)}`;
  const isItems = items?.length > 0;

  const onRemoveItem = (id) => {
    handleRemoveItem(id);
  };

  const onAddItem = (item) => {
    handleAddItem({...item, amount: 1});
  };

  const cartList = items?.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={onRemoveItem.bind(null, item.id)}
      onAdd={onAddItem.bind(null, item)}
    />
  ));

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
