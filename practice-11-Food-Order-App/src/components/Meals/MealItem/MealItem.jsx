import React from 'react';
import classes from './MealItem.module.css';
import {MealItemForm} from './MealItemForm';

export const MealItem = (props) => {
  const {name, description, price, id} = props;
  const fixPrice = `${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}> {fixPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};
