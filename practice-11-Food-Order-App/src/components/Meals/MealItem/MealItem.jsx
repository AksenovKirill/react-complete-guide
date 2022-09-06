import React, {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import classes from './MealItem.module.css';
import {MealItemForm} from './MealItemForm';

export const MealItem = (props) => {
  const {name, description, price, id} = props;
  const {handleAddItem} = useContext(CartContext);
  const fixPrice = `${price.toFixed(2)}`;

  const addToCartItem = (amount) => {
    handleAddItem({amount, price: fixPrice});
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}> {fixPrice}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addToCartItem} id={id} />
      </div>
    </li>
  );
};
