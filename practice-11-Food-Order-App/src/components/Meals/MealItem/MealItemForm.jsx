import React, {useContext, useState} from 'react';
import {CartContext} from '../../../context/CartContext';
import {Input} from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

export const MealItemForm = ({id}) => {
  const [amount, setAmount] = useState(1);
  const {handleAddItem} = useContext(CartContext);

  const inputAmountProps = {
    id: 'amount' + id,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: 1,
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form}>
      <Input label='Amount' input={inputAmountProps} onChange={handleChange} />
      <button onClick={(event) => handleAddItem(event, amount)}>+ Add</button>
    </form>
  );
};
