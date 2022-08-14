import React from "react";
import { ExpenseForm } from "../Expenses/ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ handleAddExpense }) => {
  const handleSaveData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    handleAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm handleSaveData={handleSaveData} />
    </div>
  );
};
