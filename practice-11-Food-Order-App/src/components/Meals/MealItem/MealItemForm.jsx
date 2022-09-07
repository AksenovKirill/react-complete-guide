import React, {useContext, useRef, useState} from 'react';
import {CartContext} from '../../../context/CartContext';
import {Input} from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

export const MealItemForm = ({handleAddToCart, id}) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const inputRef = useRef();

  const handleSubmitData = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = Number(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return null;
    }
    handleAddToCart(enteredAmountNumber);
  };
  const inputAmountProps = {
    id: 'amount' + id,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  return (
    <form onSubmit={handleSubmitData} className={classes.form}>
      <Input ref={inputRef} label='Amount' input={inputAmountProps} />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};
