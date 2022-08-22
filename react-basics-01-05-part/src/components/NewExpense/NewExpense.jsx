import React, { useState } from "react";
import { ExpenseForm } from "../Expenses/ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ handleAddExpense }) => {
  const [isOpenForm, setOpenForm] = useState(false);

  const handleSaveData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    handleAddExpense(expenseData);
  };

  const handleClickStartEding = () => {
    setOpenForm(true);
  };

  const handleClickStopEding = () => {
    setOpenForm(false);
  };

  return (
    <div className="new-expense">
      {!isOpenForm && (
        <button onClick={handleClickStartEding} type="button">
          AddNewExpense
        </button>
      )}
      {isOpenForm && (
        <ExpenseForm onCancel={handleClickStopEding} handleSaveData={handleSaveData} />
      )}
    </div>
  );
};
