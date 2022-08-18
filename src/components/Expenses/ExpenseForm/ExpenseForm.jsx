import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = ({ handleSaveData, handleClickForm, open }) => {
  const [input, setInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleChangeTitle = (event) => {
    setInput((prevState) => ({ ...prevState, enteredTitle: event.target.value }));
  };

  const handleChangeAmount = (event) => {
    setInput((prevState) => ({ ...prevState, enteredAmount: event.target.value }));
  };

  const handleChangeDate = (event) => {
    setInput((prevState) => ({ ...prevState, enteredDate: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: input.enteredTitle,
      amount: input.enteredAmount,
      date: new Date(input.enteredDate),
    };

    handleSaveData(expenseData);
    setInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {open ? (
        <>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                value={input.enteredTitle}
                onChange={handleChangeTitle}
                type="text"
                placeholder="title"
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                value={input.enteredAmount}
                onChange={handleChangeAmount}
                type="number"
                min="0.01"
                step="0.01"
                placeholder="amount"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                value={input.enteredDate}
                onChange={handleChangeDate}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={handleClickForm} type="button">
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </>
      ) : (
        <button onClick={handleClickForm} type="button">
          AddNewExpense
        </button>
      )}
    </form>
  );
};
