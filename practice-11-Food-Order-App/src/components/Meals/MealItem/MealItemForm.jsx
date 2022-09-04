import React from 'react';
import {Input} from '../../UI/Input';
import {inputAmountProps} from '../../../assets/const';

import classes from './MealItemForm.module.css';

export const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label='Amount' input={inputAmountProps} />
      <button>+ Add</button>
    </form>
  );
};
