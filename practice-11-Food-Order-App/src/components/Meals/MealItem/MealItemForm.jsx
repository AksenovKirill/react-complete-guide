import React from 'react';
import {Input} from '../../UI/Input';
import classes from './MealItemForm.module.css';

export const MealItemForm = ({id}) => {
  const inputAmountProps = {
    id: 'amount' + id,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  return (
    <form className={classes.form}>
      <Input label='Amount' input={inputAmountProps} />
      <button>+ Add</button>
    </form>
  );
};
