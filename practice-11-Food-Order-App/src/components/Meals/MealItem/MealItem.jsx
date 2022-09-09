import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import classes from './MealItem.module.css';
import {MealItemForm} from './MealItemForm';

export const MealItem = (props) => {
  const {name, description, price, id} = props;
  const {handleAddItem} = useContext(CartContext);
  const ctx = useContext(CartContext);
  console.log(ctx);
  const fixPrice = `${price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    console.log(111);
    handleAddItem({id: id, name: name, amount: amount, price: price});
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}> {fixPrice}</div>
      </div>
      <div>
        <MealItemForm handleAddToCart={handleAddToCart} id={id} />
      </div>
    </li>
  );
};
